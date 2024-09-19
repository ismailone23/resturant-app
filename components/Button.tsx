import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({
    handlePress,
    title,
    textClass,
    buttonClass,
}: {
    handlePress: () => void;
    title: string
    textClass?: string
    buttonClass?: string
}) {
    return (
        <TouchableOpacity activeOpacity={0.7}
            className={`${buttonClass} flex items-center justify-center`} onPress={() => handlePress()}>
            <Text className={`${textClass}`}>{title}</Text>
        </TouchableOpacity>
    )
}