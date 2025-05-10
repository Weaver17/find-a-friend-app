import React from "react";
import { Image, Text, View } from "react-native";

const FriendPhoto = (friend: Friend) => {
    return (
        <>
            <Text className="text-dark-200 text-center mx-auto my-4 text-3xl font-semibold">
                Photos:
            </Text>
            <View className="gap-4">
                <Image
                    source={{
                        uri: friend?.photos?.[1].medium ?? "",
                    }}
                    className="w-full h-[300px]"
                    resizeMode="contain"
                />
                {friend?.photos?.[2] ? (
                    <Image
                        source={{
                            uri: friend?.photos?.[2].medium ?? "",
                        }}
                        className="w-full h-[300px]"
                        resizeMode="contain"
                    />
                ) : null}
                {friend?.photos?.[3] ? (
                    <Image
                        source={{
                            uri: friend?.photos?.[3].medium ?? "",
                        }}
                        className="w-full h-[300px]"
                        resizeMode="contain"
                    />
                ) : null}
                {friend?.photos?.[4] ? (
                    <Image
                        source={{
                            uri: friend?.photos?.[4].medium ?? "",
                        }}
                        className="w-full h-[300px]"
                        resizeMode="contain"
                    />
                ) : null}
                {friend?.photos?.[5] ? (
                    <Image
                        source={{
                            uri: friend?.photos?.[5].medium ?? "",
                        }}
                        className="w-full h-[300px]"
                        resizeMode="contain"
                    />
                ) : null}
                {friend?.photos?.[6] ? (
                    <Image
                        source={{
                            uri: friend?.photos?.[6].medium ?? "",
                        }}
                        className="w-full h-[300px]"
                        resizeMode="contain"
                    />
                ) : null}
                {friend?.photos?.[7] ? (
                    <Image
                        source={{
                            uri: friend?.photos?.[7].medium ?? "",
                        }}
                        className="w-full h-[300px]"
                        resizeMode="contain"
                    />
                ) : null}
                {friend?.photos?.[8] ? (
                    <Image
                        source={{
                            uri: friend?.photos?.[8].medium ?? "",
                        }}
                        className="w-full h-[300px]"
                        resizeMode="contain"
                    />
                ) : null}
                {friend?.photos?.[9] ? (
                    <Image
                        source={{
                            uri: friend?.photos?.[9].medium ?? "",
                        }}
                        className="w-full h-[300px]"
                        resizeMode="contain"
                    />
                ) : null}
                {friend?.photos?.[10] ? (
                    <Image
                        source={{
                            uri: friend?.photos?.[10].medium ?? "",
                        }}
                        className="w-full h-[300px]"
                        resizeMode="contain"
                    />
                ) : null}
            </View>
        </>
    );
};

export default FriendPhoto;
