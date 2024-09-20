import { View, Text, TextInput } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { Feather } from '@expo/vector-icons';

export default function SearchField({
    setSearchData,
    searchData
}: {
    searchData: string;
    setSearchData: Dispatch<SetStateAction<string>>
}) {
    return (
        <View className='my-1 gap-y-1 '>
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
    )
}