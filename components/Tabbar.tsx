import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
import { type BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
// import { icons } from '@/constants';

export default function Tabbar({ state, navigation, descriptors }: BottomTabBarProps) {
    return (
        <View style={styles.tabbar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                const icons = {
                    search: "search",
                    cart: "shopping-bag",
                    create: "plus-square",
                    home: "home"
                }

                const icon = icons[route.name as keyof typeof icons] as keyof typeof Feather.glyphMap;

                return (
                    <TouchableHighlight
                        key={route.name}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        activeOpacity={1}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        underlayColor={'none'}
                        style={{
                            flex: 1,
                        }}>
                        <View style={{ display: 'flex', alignItems: 'center' }}>
                            <Feather name={icon} size={24} color={isFocused ? '#ffcb3b' : '#000'} />
                        </View>
                    </TouchableHighlight>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 25,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        paddingHorizontal: 5,
        paddingVertical: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10
    }
})