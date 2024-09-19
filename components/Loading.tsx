import { View, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading() {
    return (
        <View style={{
            flex: 1,
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <ActivityIndicator size={'large'} color={'#ffcb3b'} />
        </View>
    )
}