import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Badge, BadgeText } from '@gluestack-ui/themed'
import useNotiStore from '@/stores/notitStores'
import useUserStore from '@/stores/userStores'
import { getNotificationUnReadByCustomerId } from '@/services/notification.services'

interface CartBadgeProps {
    color: string
    size: number
}

const NotiBasge = (props: CartBadgeProps) => {
    const { notiList, setNotiList } = useNotiStore()
    const { user } = useUserStore()
    const [totalNoti, setTotalNoti] = useState<number>(0)

    useEffect(() => {
        if (!user || !user.uuid) return
        fetchNoti()
    }, [user])

    useEffect(() => {
        if (!notiList) return
        const totalNoti = notiList.filter((noti) => noti.isReaded === false).length
        setTotalNoti(totalNoti)
    }, [notiList])

    const fetchNoti = async () => {
        try {
            if (!user || !user.uuid) return
            const notiList = await getNotificationUnReadByCustomerId(user.uuid)
            if (!notiList) return
            setNotiList(notiList)
        } catch (error: any) {
            console.error('fetchNoti', error.message)
        }
    }

    if (totalNoti === 0) return <Ionicons name="notifications-outline" size={props.size} color={props.color} />
    return (
        <View>
            <Badge
                h={22}
                w={22}
                bg="$red600"
                borderRadius="$full"
                mb={-18}
                mr={-14}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
            >
                <BadgeText color="$white">{totalNoti}</BadgeText>
            </Badge>
            <Ionicons name="notifications-outline" size={props.size} color={props.color} />
        </View>
    )
}

export default NotiBasge

const styles = StyleSheet.create({})
