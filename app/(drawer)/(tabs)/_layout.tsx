import React from 'react'
import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'
import Tabbar from '@/components/Tabbar'
import { routes } from '@/constants'
import Header from '@/components/Header'

export default function TabsLayout() {
    return (
        <>
            <Tabs tabBar={props => <Tabbar {...props} />}
                screenOptions={{
                    // headerTitleStyle: {
                    //     marginLeft: -20
                    // },
                    // headerStyle: {
                    //     height: 80,
                    // },
                    // headerLeft: () => <DrawerToggleButton tintColor='#000' />
                }}>
                {
                    routes.map(({ icon, name, tabBarBadge, title, header }) =>
                        <Tabs.Screen
                            key={name}
                            name={name}
                            options={{
                                headerTitle: header,
                                header: (props) => <Header {...props} />,
                                tabBarIcon: ({ color, size, focused }) => <Feather name={icon}
                                    size={size ? size : 12}
                                    color={focused ? color : "#222222"}
                                    focused={focused}
                                />,
                                tabBarBadge: title === 'Cart' ? tabBarBadge : undefined
                            }}
                        />
                    )
                }
            </Tabs>
        </>
    )
}