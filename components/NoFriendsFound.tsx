import React from "react";
import { Text, View } from "react-native";

const NoFriendsFound = () => {
    return (
        <View className="w-2/3 mx-auto mt-20 bg-primary p-4 rounded-lg">
            <Text className="text-center text-secondary mx-auto text-2xl font-semibold">
                No Friends Found That Match Your Search
            </Text>
        </View>
    );
};

export default NoFriendsFound;
