import { View, Text } from 'react-native'
import { recipe } from '@/constants/types'
import { FlatList } from 'react-native-gesture-handler'
import FoodData from '../home/FoodData'

export default function FilterFood({ filterdData }: { filterdData: recipe[] }) {

    return (
        <View className='pb-32 w-full flex flex-col'>
            {filterdData.length > 0 && <Text className='text-gray-500 py-1 text-center'>----Search Result----</Text>}
            <FlatList data={filterdData}
                ListEmptyComponent={() => <Text className='text-gray-500 italic pl-1'>No Data</Text>}
                windowSize={3}
                showsVerticalScrollIndicator={false}
                initialNumToRender={3}
                key={'#'}
                maxToRenderPerBatch={3}
                keyExtractor={item => "#" + item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => <FoodData {...item} />}
            />
        </View>
    )
}