import { Text, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuth from '@/hooks/useAuth'
import Loading from '@/components/Loading';
import { Redirect } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

export default function Cart() {
    const authfunc = useAuth();
    if (!authfunc) return <Loading />
    const { usertoken, logout } = authfunc
    if (!usertoken) return <Redirect href={'/signin'} />

    return (
        <ScrollView className='bg-gray-50 h-full px-2'>
            <Text className='text-xl font-rregular'>Cart is Empty</Text>
            <StatusBar translucent={true} barStyle={'dark-content'} />
        </ScrollView>
    )
}