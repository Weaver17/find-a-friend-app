import { icons } from "@/lib/icons";
import { Image, Text, View } from "react-native";

export default function Index() {
    return (
        <View className="flex-1 bg-light-100 items-center p-4">
            <Image
                source={icons.bone_bg}
                resizeMode="contain"
                className="w-full h-full"
            />
            <View className="bg-accent/90 p-4 rounded-lg">
                <Text>
                    Regular intro text about what this app is all about. Regular
                    intro text about what this app is all about. Regular intro
                    text about what this app is all about. Regular intro text
                    about what this app is all about.
                </Text>
            </View>
        </View>
    );
}
