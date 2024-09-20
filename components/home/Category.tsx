import { Text, RefreshControl, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CategoryData from './CategoryData';
import useAuth from '@/hooks/useAuth';

export default function Category() {
    const [categoryData, setCategoryData] = useState<string[]>([])
    const authfunc = useAuth()
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
        setRefreshing(true)
        setRefreshing(false)
    }
    if (!authfunc) return
    const { recipeData } = authfunc
    const memodata: string[] = useMemo(() => {
        let catarr: string[] = ["All"]
        for (let i = 0; i < recipeData.length; i++) {
            const tags = recipeData[i].tags
            for (let j = 0; j < tags.length; j++) {
                if (!catarr.includes(tags[j])) {
                    catarr.push(tags[j])
                }
            }
        }
        return catarr
    }, [recipeData])

    return (
        <View style={{ flex: 1, marginTop: 5, marginRight: 10 }}>
            <Text className='text-xl mb-2 font-rregular'>All Categories</Text>
            <FlatList data={memodata}
                ListEmptyComponent={() => (<Text className='italic text-sm text-gray-500'>No Data</Text>)}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                horizontal
                windowSize={2}
                initialNumToRender={4}
                maxToRenderPerBatch={4}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.toLowerCase()}
                renderItem={({ item }) => <CategoryData tag={item} />} />
            <Text className='text-xl mt-4 mb-2 font-rregular'>All available dishes</Text>
        </View>
    )
}