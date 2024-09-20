import { View, StatusBar, Text, TextInput } from 'react-native'
import React, { useMemo, useState } from 'react'
import FilterFood from '@/components/find/FilterFood'
import { Feather } from '@expo/vector-icons'
import { recipe } from '@/constants/types'
import useAuth from '@/hooks/useAuth'

export default function search() {
    const [searchData, setSearchData] = useState('')
    const authfunc = useAuth();
    if (!authfunc) return
    const { recipeData } = authfunc

    const filterdData: recipe[] = useMemo(() => {
        let memodata: recipe[] = []
        if (!searchData) return []
        memodata = recipeData.filter(fdata => fdata.name.toLowerCase().includes(searchData.toLowerCase()))
        if (memodata.length < 1) {
            memodata = recipeData.filter(fdata => fdata.tags.toLocaleString().toLowerCase().includes(searchData.toLowerCase()))
        }
        return memodata
    }, [searchData])
    return (
        <View className='bg-gray-50 h-full pl-4'>
            <View className='my-1 gap-y-1 mb-2'>
                <Text className='text-xl font-rregular'>Search Food Page</Text>
                <View className=' w-full relative flex'>
                    <TextInput value={searchData}
                        onChangeText={(text) => setSearchData(text)}
                        cursorColor={'#d1d5db'}
                        className='outline-none border border-gray-300 py-1 pl-8 pr-3 rounded-md text-base' />
                    <View className='absolute left-2 top-2'>
                        <Feather name='search' size={18} color={'#6b7280'} />
                    </View>
                </View>
            </View>
            <FilterFood filterdData={filterdData} />
            <StatusBar barStyle={'light-content'} />
        </View>
    )
}