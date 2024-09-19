import { View, Text } from 'react-native'
import React from 'react'
import { DrawerHeaderProps, DrawerToggleButton } from '@react-navigation/drawer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

export default function Header({ route, navigation }: DrawerHeaderProps | BottomTabHeaderProps) {
    return (
        <SafeAreaView className='bg-primary py-4'>
            <View className='flex flex-row items-center '>
                <TouchableHighlight>
                    <DrawerToggleButton tintColor='#000' />
                </TouchableHighlight>
                <Text className='text-lg capitalize'>{route.name}</Text>
            </View>
        </SafeAreaView>
    )
}