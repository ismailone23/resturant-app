import React from 'react'
import { Redirect, Stack } from 'expo-router'
import useAuth from '@/hooks/useAuth'
import Loading from '@/components/Loading';

const AuthLayout = () => {
    const authfunc = useAuth();

    if (!authfunc || authfunc.loading) return <Loading />
    const { loading, usertoken } = authfunc
    if (!loading && usertoken) {
        return <Redirect href={'/home'} />
    }

    return (
        <Stack>
            <Stack.Screen name='signin' options={{ headerShown: false }} />
            <Stack.Screen name='signup' options={{ headerShown: false }} />
        </Stack>
    )
}

export default AuthLayout