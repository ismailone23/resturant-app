import { Text, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native'
import React from 'react'
import useAuth from '@/hooks/useAuth'
import Loading from '@/components/Loading';
import { Link, Redirect } from 'expo-router';

export default function Home() {
    const authfunc = useAuth();
    if (!authfunc) return <Loading />

    const { usertoken, logout } = authfunc
    if (!usertoken) return <Redirect href={'/signin'} />
    return (
        <ScrollView className='bg-[#F6F8FA] py-2 pl-4'>
            <Text className='text-xl font-rregular'>This is Home Page</Text>
            <StatusBar translucent={true} barStyle={'dark-content'} />
        </ScrollView>
    )
}