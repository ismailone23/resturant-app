import { Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'

export default function Orders() {
    return (
        <ScrollView className='bg-gray-50 px-2 h-full'>
            <Text className='text-xl font-rregular'>Orders History</Text>
            <StatusBar translucent={true} barStyle={'light-content'} />
        </ScrollView>
    )
}