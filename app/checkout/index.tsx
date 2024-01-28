import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useUserStore from '@/stores/userStores'
import { CardField, useConfirmPayment, StripeProvider } from '@stripe/stripe-react-native'
import { ButtonText, ButtonSpinner, Button, Input, InputField } from '@gluestack-ui/themed'
import useCartStore from '@/stores/cartStores'
import { Stack, useRouter } from 'expo-router'
import { stripPaymentIntent } from '@/services/payment.services'
import { creeateOrderByFirebase } from '@/services/order.services'
import { getNotificationUnReadByCustomerId } from '@/services/notification.services'
import useNotiStore from '@/stores/notitStores'

const publishableKey =
    'pk_test_51OdPWBCi1YxhEpKj5m9BiTDt1aSPCluWWAQJzx3gjiNEJSWZxvqUTr01O76CqSPRZPqk19ZDivh3CdBzOPHByYkS007twLJ8Bw'

const CheckoutPage = () => {
    const [nameCard, setNameCard] = useState('')
    const { user } = useUserStore()
    const { totalprice, clearCart, cart } = useCartStore()
    const { confirmPayment } = useConfirmPayment()
    const [loading, setLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const { addNoti } = useNotiStore()

    const router = useRouter()
    const onPay = async () => {
        try {
            setLoading(true)
            if (totalprice() <= 0) {
                Alert.alert('Error', 'Cart total must be greater than 0')
                return
            }
            const clientSecret = await stripPaymentIntent(totalprice())

            const { error, paymentIntent } = await confirmPayment(clientSecret, {
                paymentMethodType: 'Card',
                paymentMethodData: { billingDetails: { name: nameCard } },
            })

            if (error) {
                Alert.alert(`Error code: ${error.code}`, error.message)
                return
            }
            if (user) {
                await creeateOrderByFirebase(cart, paymentIntent?.id, user)
                clearCart()
                Alert.alert('Success', `The payment was confirmed successfully!`)
                router.push(`/account`)
            } else {
                Alert.alert('Error', `User not found!`)
            }
        } catch (error: any) {
            const errorMessage = error?.response?.data || error.message
            Alert.alert(`Error`, errorMessage)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user) {
            setNameCard(user.displayName || '')
        }
    }, [user])

    const checkCardDetails = (cardDetails: any) => {
        if (cardDetails.complete) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }

    return (
        <StripeProvider publishableKey={publishableKey}>
            <Stack.Screen options={{ title: 'Checkout' }} />
            <View style={styles.container}>
                <Input style={{ height: 50 }}>
                    <InputField
                        placeholder="Name on card"
                        value={nameCard}
                        onChangeText={(text) => {
                            setNameCard(text)
                        }}
                    />
                </Input>
                <CardField
                    postalCodeEnabled={true}
                    placeholders={{
                        number: '4242 4242 4242 4242',
                    }}
                    cardStyle={{
                        backgroundColor: '#FFFFFF',
                        textColor: '#000000',
                    }}
                    style={{
                        width: '100%',
                        height: 50,
                        marginVertical: 30,
                    }}
                    onCardChange={(cardDetails) => checkCardDetails(cardDetails)}
                />
                <Button isDisabled={isDisabled} style={{ width: '100%', height: 50 }} onPress={() => onPay()}>
                    {loading && <ButtonSpinner mr="$1" />}
                    <ButtonText>Pay</ButtonText>
                </Button>
            </View>
        </StripeProvider>
    )
}

export default CheckoutPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
})
