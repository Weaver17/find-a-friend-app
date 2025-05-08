import React from "react";
import { Image, Text, View } from "react-native";

const OrgPageLogo = ({ name, email, photos }: Orginization) => {
    const mainPhoto = photos?.[0]?.medium ?? "https://http.dog/404.jpg";

    return (
        <View className="bg-accent/90 mt-10 p-2  rounded-xl  gap-4">
            <Text className="text-center text-dark-200  mx-auto text-4xl font-bold">
                {name}
            </Text>
            <Image
                source={{ uri: mainPhoto }}
                className="w-full h-[300px]"
                resizeMode="contain"
            />
            <Text className="text-center mx-auto text-xl text-dark-200">
                {email}
            </Text>
        </View>
    );
};

export default OrgPageLogo;
