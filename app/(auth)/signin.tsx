import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import Button from '@/components/Button'
import { Link, router } from 'expo-router'
import useAuth from '@/hooks/useAuth'
import FormField from '@/components/FormField'
import AuthMessage from '@/components/AuthMessage'
import Loading from '@/components/Loading'

export default function Signin() {
    const [form, setForm] = useState({
        password: '',
        phone: '',
    })

    const authfunc = useAuth();
    if (!authfunc) return <Loading />
    const { setMessage, setLoading, signin, loading } = authfunc
    const handlelogin = async () => {
        setMessage(null);
        setLoading(true)
        const { password, phone } = form
        if (!phone || !password) {
            setLoading(false)
            return setMessage({ txt: 'Please fillup the Required Fields Carefully', error: true })
        }
        signin({ password, phone }).then(() => {
            router.push('/home')
        }).catch(err => {
            setMessage({ error: true, txt: err })
        })
    }
    if (loading) return <Loading />
    return (
        <SafeAreaView className='h-full bg-white'>
            <ScrollView>
                <View className='w-full px-4 justify-center items-center gap-y-2 min-h-[85vh] flex flex-col'>
                    <Image source={require('../../assets/images/foodlogo.png')} />
                    <Text className='font-rbold text-lg'>Sign In to Explore</Text>
                    <View className='w-full flex space-y-2 flex-col'>
                        <FormField
                            value={form.phone}
                            otherStyle='border-gray-300 '
                            placeholder='01234567890'
                            title='Phone'
                            keyboardType='phone-pad'
                            handleChange={e => setForm({ ...form, phone: e })}
                        />
                        <FormField
                            value={form.password}
                            otherStyle='border-gray-300 '
                            placeholder='******'
                            title='Password'
                            handleChange={e => setForm({ ...form, password: e })}
                        />
                        <Button buttonClass='bg-primary h-12 mt-4 rounded-md' handlePress={handlelogin} textClass='text-lg font-rregular' title='Sign In' />
                    </View>
                    <AuthMessage />
                    <Link href={'/signup'} onPress={() => setMessage(null)} className='underline pt-2 text-black'>Don't Have an Account? Create New</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}