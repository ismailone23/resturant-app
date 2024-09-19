import { Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'

export default function Create() {
    return (
        <ScrollView className='bg-gray-50 h-full px-2'>
            <Text className='text-xl font-rregular'>Welcome to Create Food Page</Text>
            <StatusBar translucent={true} barStyle={'dark-content'} />
        </ScrollView>
    )
}