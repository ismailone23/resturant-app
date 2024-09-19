import { useState } from 'react';
import {
    View,
    Text,
    KeyboardTypeOptions,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native'

export default function FormField({
    title,
    placeholder,
    value,
    keyboardType,
    handleChange,
    otherStyle
}: {
    title: string;
    keyboardType?: KeyboardTypeOptions
    placeholder?: string
    value?: string;
    handleChange?: (e: string) => void;
    otherStyle?: string
}) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-1 w-full flex flex-col`}>
            <Text className='text-base font-rregular'>{title}</Text>
            <View className={`border ${otherStyle} relative rounded-md items-center text-base px-4 flex-row flex`}>
                <TextInput className='text-gray-800 py-2 flex-1'
                    onChangeText={handleChange}
                    value={value}
                    placeholder={placeholder}
                    selectionColor={'#75769e'}
                    secureTextEntry={title.includes('Password') && !showPassword}
                    placeholderTextColor={'#8c8980'}
                    keyboardType={keyboardType} />
                {title.includes('Password') && <TouchableOpacity activeOpacity={1} className='absolute right-4' onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Image className='w-6 h-6 object-contain' source={require('../assets/images/eye.png')} /> :
                        <Image className='w-6 h-6 object-contain' source={require('../assets/images/eye-off.png')} />}
                </TouchableOpacity>}
            </View>
        </View>
    )
}