import { createContext, ReactNode, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { contexttype } from "@/constants/types";
import { USER_TOKEN } from "@/constants";
export const AuthContext = createContext<contexttype | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState<null | { error: boolean; txt: string }>(null)
    const [usertoken, setUsertoken] = useState('')

    const signin = async ({ phone, password }: {
        phone: string;
        password: string;
    }) => {
        setTimeout(async () => {
            await AsyncStorage.setItem(USER_TOKEN, 'token').then(() => setUsertoken('token')).catch(err => new Error('login failed'))
            return setLoading(false)
        }, 2000)
    }
    const logout = async () => {
        AsyncStorage.removeItem(USER_TOKEN)
        setUsertoken('')
    }
    const isLoggedIn = async () => {
        const token = await AsyncStorage.getItem(USER_TOKEN)
        console.log('checking');
        if (token) {
            setUsertoken(token)
            return 'token'
        } else {
            setUsertoken('');
            return null
        }
    }
    const createacc = async ({
        username,
        phone,
        password
    }: {
        username: string,
        phone: string
        password: string
    }) => {
        return new Promise(async (resolve, reject) => {
            await AsyncStorage.setItem(USER_TOKEN, 'data').then(() => {
                setUsertoken('token')
                resolve('data')
                setLoading(false);
            }).catch(err => {
                reject(err)
            })
        })
    }

    const contextvalue = {
        createacc,
        signin,
        logout,
        message,
        setMessage,
        loading,
        setLoading,
        usertoken,
        isLoggedIn
    }
    return (
        <AuthContext.Provider value={contextvalue}>
            {children}
        </AuthContext.Provider>
    )
}