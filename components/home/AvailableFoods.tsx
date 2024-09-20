import { Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import { recipe } from '@/constants/types'
import FoodData from './FoodData'
import Category from './Category'

export default function AvailableFoods({ recipeData, selectedCategory }: { recipeData: recipe[]; selectedCategory: string }) {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true)
        setRefreshing(false)
    }
    const filterRecipe: recipe[] = useMemo(() => {
        const mData = recipeData;
        if (selectedCategory === 'All') {
            console.log('all');
            return recipeData
        };
        console.log('custom');
        return mData.filter(fData => fData.tags.includes(selectedCategory))
    }, [selectedCategory])

    return (
        <View style={{ paddingBottom: 80 }}>
            <FlatList data={filterRecipe}
                ListEmptyComponent={() => <Text>Empty</Text>}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                windowSize={3}
                showsVerticalScrollIndicator={false}
                initialNumToRender={3}
                key={'#'}
                maxToRenderPerBatch={3}
                keyExtractor={item => "#" + item.id.toString()}
                ListHeaderComponent={() => <Category />}
                numColumns={2}
                renderItem={({ item }) => <FoodData {...item} />}
            />
        </View>
    )
}