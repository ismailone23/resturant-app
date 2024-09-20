import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import {
    DrawerContentScrollView,
    DrawerItem,
} from "@react-navigation/drawer";

import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import useAuth from "@/hooks/useAuth";
import { router, usePathname } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { draweritems } from "@/constants";

const CustomDrawer = (props: DrawerContentComponentProps) => {
    const authfunc = useAuth();
    if (!authfunc) return null
    const { logout } = authfunc
    const pathname = usePathname();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View className="mb-4">
                    <ImageBackground source={require('../assets/images/background.jpg')} className="w-full h-44 flex justify-center items-center" >
                        <Image source={require('../assets/images/model.png')} className="w-16 h-16 rounded-full" />
                        <Text className="text-lg font-rmedium">John Doe</Text>
                        <Text>+8801234567891</Text>
                    </ImageBackground>
                </View>
                {
                    draweritems.map(({ icon, name, title }, i) => (
                        <DrawerItem key={i}
                            style={{
                                width: '100%',
                                padding: 0,
                                borderRadius: 0,
                                marginLeft: 0,
                                backgroundColor: pathname === `/${name}` ? '#ffcb3b' : 'white'
                            }}
                            label={title}
                            labelStyle={{
                                marginLeft: -17,
                                color: '#000',
                                fontSize: 15
                            }}
                            icon={() => (
                                <Feather style={{ marginLeft: 10 }} name={icon} color={'#000'} size={18} />
                            )}
                            onPress={() => router.push(`/${name}`)}
                        />
                    ))
                }
            </DrawerContentScrollView>
            <View style={{ paddingHorizontal: 20, borderTopWidth: 1, borderTopColor: "#eee" }}>
                <TouchableOpacity onPress={() => logout()} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,

                                marginLeft: 5,
                            }}
                        >
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    userAvatar: {
        height: 67.5,
        width: 67.5,
        borderRadius: 40,
        marginBottom: 10,
        marginTop: 30,
    },
    switchTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 7,
        paddingVertical: 5,
    },
    preferences: {
        fontSize: 16,
        color: "#ccc",
        paddingTop: 10,
        fontWeight: "500",
        paddingLeft: 20,
    },
    switchText: {
        fontSize: 17,
        color: "",
        paddingTop: 10,
        fontWeight: "bold",
    },
});