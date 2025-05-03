import { icons } from "@/lib/icons";
import { Friend } from "@/lib/types";
import { useState } from "react";
import { Image, Text, View } from "react-native";

export default function Index() {
    const [friends, setFriends] = useState<Friend[]>([]);

    return (
        <View className="flex-1 bg-light-100 p-4">
            <Image
                source={icons.bone_bg}
                resizeMode="contain"
                className="absolute w-full h-full left-[50%] top-[50%] -translate-x-[46.5%] -translate-y-[50%] z-0"
            />

            <View className="bg-accent/90 p-4 rounded-lg gap-y-4">
                <Text className="text-center text-dark-200 text-2xl font-bold">
                    Welcome To The App That Helps You Find The Friend You Are
                    Looking For!
                </Text>
                <Text className="text-center text-dark-200 text-base">
                    Regular intro text about what this app is all about. Regular
                    intro text about what this app is all about. Regular intro
                    text about what this app is all about. Regular intro text
                    about what this app is all about.
                </Text>
            </View>
        </View>
    );
}
