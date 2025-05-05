import { icons } from "@/lib/icons";
import React from "react";
import { Image, View } from "react-native";

const OrgPage = () => {
    return (
        <View className="flex-1 bg-light-100 p-4">
            <Image
                source={icons.bone_bg}
                resizeMode="contain"
                className="absolute w-full h-full left-[50%] top-[50%] -translate-x-[46.5%] -translate-y-[50%] z-0"
            />
        </View>
    );
};

export default OrgPage;
