import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import FormField from '@/components/FormField'
import Button from '@/components/Button'
import { Link, router } from 'expo-router'
import useAuth from '@/hooks/useAuth'
import AuthMessage from '@/components/AuthMessage'

export default function Signup() {
    const [formdata, setFormdata] = useState({
        username: '',
        cpassword: '',
        password: '',
        phone: '',
        email: '',
    })

    const authfunc = useAuth();
    if (!authfunc) return null;
    const { setMessage, createacc, setLoading } = authfunc;
    const handleCreateAcc = async () => {
        setMessage(null);
        setLoading(true)
        const { cpassword, email, password, phone, username } = formdata
        if (!cpassword || !email || !username || !phone || !password) {
            setLoading(false)
            return setMessage({ txt: "Please fill all the fields.", error: true })
        }
        if (password !== cpassword) {
            setLoading(false)
            return setMessage({ txt: "Password and Confirm Password must be same", error: true })
        }
        await createacc({ username, password, phone }).then(() => {
            router.push('/home');
        }).catch(err => {
            setMessage({ error: true, txt: err })
        })
    }
    return (
        <SafeAreaView className='h-full bg-white'>
            <ScrollView>
                <View className='w-full px-4 justify-center items-center gap-y-2 min-h-[90vh] flex flex-col'>
                    <Image source={require('../../assets/images/foodlogo.png')} />
                    <Text className='font-rbold text-lg'>Create a New Account to Explore</Text>
                    <View className='w-full flex flex-col'>
                        <FormField
                            value={formdata.username}
                            otherStyle='border-gray-300'
                            placeholder='John Doe'
                            title='Username'
                            handleChange={e => setFormdata({ ...formdata, username: e })}
                        />
                        <FormField
                            value={formdata.email}
                            otherStyle='border-gray-300 '
                            placeholder='test@example.com'
                            title='Email'
                            keyboardType='email-address'
                            handleChange={e => setFormdata({ ...formdata, email: e })}
                        />
                        <FormField
                            value={formdata.phone}
                            otherStyle='border-gray-300 '
                            placeholder='01234567890'
                            title='Phone'
                            keyboardType='phone-pad'
                            handleChange={e => setFormdata({ ...formdata, phone: e })}
                        />
                        <FormField
                            value={formdata.password}
                            otherStyle='border-gray-300 '
                            placeholder='******'
                            title='Password'
                            handleChange={e => setFormdata({ ...formdata, password: e })}
                        />
                        <FormField
                            value={formdata.cpassword}
                            otherStyle='border-gray-300 '
                            placeholder='******'
                            title='Confirm Password'
                            handleChange={e => setFormdata({ ...formdata, cpassword: e })}
                        />
                        <Button buttonClass='bg-primary h-12 mt-4 rounded-md'
                            handlePress={handleCreateAcc} textClass='text-lg font-rregular'
                            title='Create Account' />
                    </View>
                    <AuthMessage />
                    <Link href={'/signin'} onPress={() => setMessage(null)} className='underline pt-2 text-black'>Already Have an Account? Signin</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}