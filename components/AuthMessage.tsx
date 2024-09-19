import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import useAuth from '@/hooks/useAuth';

export default function AuthMessage() {
    const authfunc = useAuth();
    if (!authfunc) return null
    const { setMessage, message } = authfunc
    return (
        message && <TouchableOpacity activeOpacity={0.8} onPress={() => setMessage(null)} className={`${message.error ? 'bg-red-500/20' : 'bg-teal-500/20'} px-2 pb-4 pt-2 items-center justify-center mt-3 w-full rounded`}>
            <Text className={`${message.error ? 'text-red-500' : 'text-teal-500'} w-full font-rregular flex flex-wrap items-center break-all`}>
                {message.error ? <Image className='w-6 h-6' source={require('../assets/images/times.png')} /> :
                    <Image className='w-5 object-contain h-5' source={require('../assets/images/taskok.png')} />}
                {message.txt}
            </Text>
        </TouchableOpacity>
    )
}