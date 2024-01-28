import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'
import EmptyNotification from '@/components/notification/EmptyNotification'
import useNotiStore, { Notification } from '@/stores/notitStores'
import { updateNotificationReaded } from '@/services/notification.services'

const NotificationPage = () => {
    const { notiList, updateNoti } = useNotiStore()

    const onHandleTouch = (noti: Notification) => {
        console.log('onHandleTouch', noti.id)
        updateNotificationReaded(noti.id)
        updateNoti(noti)
    }

    if (notiList.length === 0) {
        return (
            <View>
                <EmptyNotification />
            </View>
        )
    }
    const convertTime = (time: number) => {
        if (!time) return ''
        const date = new Date(time * 1000)
        return date.toLocaleString()
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                {notiList.map((noti, index) => (
                    <View
                        key={noti.id + index}
                        style={{ ...styles.notiCard, backgroundColor: noti.isReaded ? '#fff' : '#FFB6C1' }}
                        onTouchEnd={() => onHandleTouch(noti)}
                    >
                        <View style={styles.title}>
                            <Text style={styles.textTitle}>{noti.notification.title}</Text>
                            {noti?.createAt?.nanoseconds && (
                                <Text style={styles.textBody}>{convertTime(noti.createAt.seconds)}</Text>
                            )}
                        </View>
                        <Text style={styles.textBody}>{noti.notification.body}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default NotificationPage

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingTop: 10,
    },
    notiCard: {
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    textBody: {
        fontSize: 16,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})
