import React from "react";
import { Image, Text, View } from "react-native";

const FriendName = (friend: Friend) => {
    const mainPhoto = friend?.photos?.[0]?.medium ?? "https://http.dog/404.jpg";

    return (
        <View className="bg-accent/90 mt-10 p-2  rounded-xl  gap-4">
            <Image
                source={{ uri: mainPhoto }}
                className="w-full h-[300px]"
                resizeMode="contain"
            />
            <Text className="text-center text-dark-200  mx-auto text-4xl font-bold">
                {friend.name}
            </Text>
        </View>
    );
};

export default FriendName;
