import { Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import useAuth from '@/hooks/useAuth';

export default function CategoryData({ tag }: { tag: string }) {
    const authfunc = useAuth();

    if (!authfunc) return

    const { setSelectedCategory, selectedCategory } = authfunc

    return (
        <TouchableOpacity onPress={() => setSelectedCategory(tag)}
            className={`${selectedCategory === tag ? "bg-black" : "border border-gray-200"} py-1 px-4 rounded-full mr-2`} activeOpacity={0.9}>
            <Text className={`${selectedCategory === tag ? "text-white" : "text-black"}`}>{tag}</Text>
        </TouchableOpacity>
    )
}