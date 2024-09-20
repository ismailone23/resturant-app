import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { recipe } from '@/constants/types'
import { Rating } from '@kolking/react-native-rating';



export default function FoodData({ recipe: { name, image, tags, reviewCount, id, rating },
    handlePresentModalPress
}: {
    recipe: recipe,
    handlePresentModalPress: (id: number) => void
}) {
    return (
        <TouchableOpacity onPress={() => handlePresentModalPress(id)} activeOpacity={0.9} style={[
            id % 2 === 0
                ? {
                    paddingLeft: 10,
                } : {
                    paddingRight: 10,
                },
            {
                marginVertical: 4,
                overflow: 'hidden',
            }
        ]} className='w-[48%] min-h-[12rem] border-gray-300'>
            <Image source={{ uri: image }} className='w-[100%] rounded-lg h-40 object-cover' />
            <View className='gap-y-1 mt-1'>
                <Text style={{ lineHeight: 20 }} className='text-base font-rmedium'>{name}</Text>
                <View style={{ marginLeft: 4, marginBottom: 5 }} className='flex flex-wrap flex-row items-center'>
                    <Rating size={12} rating={rating} disabled />
                    <Text className='text-xs ml-2'>({rating}/5)</Text>
                    <Text className='text-xs' >by {reviewCount} people</Text>
                </View>
            </View>
            <View className='flex flex-wrap flex-row gap-1'>
                {tags.map((tag, i) => <Text key={i} className='border border-gray-200 py-1 px-3 rounded-full'>{tag}</Text>)}
            </View>
        </TouchableOpacity>
    )
}