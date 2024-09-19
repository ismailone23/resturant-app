import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawer from '@/components/DrawerComponents';
import Header from '@/components/Header';

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={(props) => <CustomDrawer {...props} />}
                screenOptions={{
                    headerTitleStyle: {
                        marginLeft: -20
                    },
                    headerStyle: {
                        height: 80,
                    }
                }}>
                <Drawer.Screen name='(tabs)' options={{ header: (props) => <Header {...props} />, headerShown: false }} />
                <Drawer.Screen name='orders' options={{ header: (props) => <Header {...props} />, headerShown: true }} />
                <Drawer.Screen name='saved' options={{ header: (props) => <Header {...props} />, headerShown: true }} />
                <Drawer.Screen name='profile' options={{ header: (props) => <Header {...props} />, headerShown: true }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default DrawerLayout