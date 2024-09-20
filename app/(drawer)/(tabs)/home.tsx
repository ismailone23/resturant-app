import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import useAuth from '@/hooks/useAuth'
import Loading from '@/components/Loading';
import { Redirect } from 'expo-router';
import axios from 'axios'
import { recipe } from '@/constants/types';
import AvailableFoods from '@/components/home/AvailableFoods';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import { Rating } from '@kolking/react-native-rating';
import CustomBackdrop from '@/components/customBackdrop';

export default function Home() {
    const authfunc = useAuth();
    if (!authfunc) return <Loading />
    const { usertoken, setRecipeData, recipeData, selectedCategory } = authfunc
    if (!usertoken) return <Redirect href={'/signin'} />
    const [loading, setLoading] = useState(false)
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const [bottomshetData, setBottomshetData] = useState<recipe | null>(null)
    // variables
    const snapPoints = useMemo(() => ['80%', '25%'], []);

    // callbacks
    const handlePresentModalPress = useCallback((id: number) => {
        setBottomshetData(recipeData.filter(rdata => rdata.id === id)[0])
        bottomSheetModalRef.current?.present();
    }, [recipeData]);

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
                {loading ? <Loading /> : <AvailableFoods handlePresentModalPress={handlePresentModalPress} recipeData={recipeData} selectedCategory={selectedCategory} />}
            </View>
            <BottomSheetModal
                backdropComponent={props => <CustomBackdrop {...props} />}
                ref={bottomSheetModalRef}
                index={1}
                style={{
                    paddingHorizontal: 8
                }}
                snapPoints={snapPoints}>
                {bottomshetData ? <BottomSheetView style={styles.contentContainer}>
                    <Image source={{ uri: bottomshetData.image }} className='w-full h-64' />
                    <View className='flex w-full gap-y-2'>
                        <Text className='text-xl'>{bottomshetData.name}</Text>
                        <View style={{ marginLeft: 4, marginBottom: 5 }} className='flex flex-wrap flex-row items-start w-full'>
                            <Rating size={12} rating={bottomshetData.rating} disabled />
                            <Text className='text-xs ml-2'>({bottomshetData.rating}/5)</Text>
                            <Text className='text-xs ml-1'>by {bottomshetData.reviewCount} people</Text>
                        </View>
                    </View>
                    <View className='flex gap-y-1'>
                        <Text className='text-lg'>MealType</Text>
                        <View className='flex flex-row flex-wrap gap-x-1'>
                            {bottomshetData.mealType.map((type, i) => <Text key={i} className='border border-gray-200 py-1 px-3 rounded-full'>{type}</Text>)}
                        </View>
                    </View>
                    <View className='flex gap-y-1'>
                        <Text className='text-lg'>Tags</Text>
                        <View className='flex flex-row flex-wrap gap-x-1'>
                            {bottomshetData.tags.map((tag, i) => <Text key={i} className='border border-gray-200 py-1 px-3 rounded-full'>{tag}</Text>)}
                        </View>
                    </View>
                    <View className='flex gap-y-1'>
                        <Text className='text-lg'>Used Ingredients</Text>
                        <View>
                            {bottomshetData.ingredients.map((ingredient, i) => (
                                <Text className='text-xs' key={i}>{i + 1}. {ingredient}</Text>
                            ))}
                        </View>
                    </View>
                    <View className='flex gap-y-1'>
                        <Text><Text className='font-rmedium'>Preparation time :</Text> {bottomshetData.prepTimeMinutes} minutes</Text>
                        <Text><Text className='font-rmedium'>Cooking time :</Text> {bottomshetData.cookTimeMinutes} minutes</Text>
                    </View>
                </BottomSheetView> :
                    <BottomSheetView style={styles.contentContainer}>
                        <Text className='italic text-gray-500'>Not found !</Text>
                    </BottomSheetView>
                }
            </BottomSheetModal>
            <StatusBar translucent={true} barStyle={'dark-content'} />
        </>
    )
}
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
});
