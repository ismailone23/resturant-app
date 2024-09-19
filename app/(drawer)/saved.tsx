import { Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
export default function Bookmark() {
    return (
        <ScrollView className='bg-gray-50 px-2 h-full'>
            <Text className='text-xl font-rregular'>All food you have Watched and Saved</Text>
            <StatusBar translucent={true} barStyle={'light-content'} />
        </ScrollView>
    )
}