import Button from "@/components/Button";
import Loading from "@/components/Loading";
import useAuth from "@/hooks/useAuth";
import { router } from "expo-router";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const authfunc = useAuth();
    if (!authfunc) return <Loading />
    const { isLoggedIn, setLoading, loading } = authfunc
    const handlePress = async () => {
        setLoading(true)
        const user = await isLoggedIn()
        setLoading(false)
        if (user) {
            router.push('/home')
        }
        router.push('/signin')
    }
    if (loading) return <Loading />
    return (
        <SafeAreaView className="flex-1 justify-center items-center" >
            <ScrollView className="w-full h-[100%] bg-white">
                <View className="min-h-[100vh] px-2 w-full gap-y-5 justify-center flex items-center">
                    <Image source={require('../assets/images/foodlogo.png')} />
                    <View className="flex items-center space-y-3 pl-4">
                        <Text className="text-black text-lg text-center font-rbold">Feast at Your Fingertips-{"\n"} Where Every Craving Finds Its Flavor!</Text>
                        <Text className="text-center font-rregular text-base">Discover a world of flavors with our{"\n"}
                            all-in-one food app. Where your favorite{"\n"}
                            meals are just a tap away. Whether you're{"\n"}
                            craving a quick bite or a gourmet feast, our {"\n"}
                            app connects you with the best restaurants,{"\n"}
                            cafes, and local eateries. With fast delivery
                            {"\n"} and customizable options.</Text>
                        <Button handlePress={handlePress} textClass="text-lg font-rregular"
                            buttonClass="rounded-full bg-primary h-12 w-48 mt-5 px-6"
                            title="Continue"
                        />
                    </View>
                </View>
            </ScrollView>
            <StatusBar translucent={true} barStyle={'light-content'} />
        </SafeAreaView>
    )
}