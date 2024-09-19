import { ScrollView, StatusBar, Text } from 'react-native';
import React from 'react'

const Profile = () => {
    return (
        <ScrollView className='bg-gray-50 px-2 h-full'>
            <Text className='text-xl font-rregular'>User Profile</Text>
            <StatusBar translucent={true} barStyle={'light-content'} />
        </ScrollView>
    )
}

export default Profile