import { StatusBar, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import useAuth from '@/hooks/useAuth'
import Loading from '@/components/Loading';
import { Redirect } from 'expo-router';
import axios from 'axios'
import { recipe } from '@/constants/types';
import AvailableFoods from '@/components/home/AvailableFoods';

export default function Home() {
    const authfunc = useAuth();
    if (!authfunc) return <Loading />
    const { usertoken, setRecipeData, recipeData, selectedCategory } = authfunc
    if (!usertoken) return <Redirect href={'/signin'} />
    const [loading, setLoading] = useState(false)

    const fetchReciprData = useMemo(async (): Promise<recipe[]> => {
        setLoading(true)
        try {
            const data = await axios.get('https://dummyjson.com/recipes')
            setRecipeData(data.data.recipes)
            setLoading(false)
            return data.data.recipes
        } catch (error) {
            setLoading(false)
            console.log(error);
            return []
        }
    }, [])

    return (
        <>
            <View style={{ flex: 1 }} className='bg-[#F6F8FA] pl-4'>
                {loading ? <Loading /> : <AvailableFoods recipeData={recipeData} selectedCategory={selectedCategory} />}
            </View>
            <StatusBar translucent={true} barStyle={'dark-content'} />
        </>
    )
}