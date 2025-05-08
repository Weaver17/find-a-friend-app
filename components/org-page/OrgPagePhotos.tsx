import React from "react";
import { Image, Text, View } from "react-native";

const OrgPagePhotos = (org: Orginization) => {
    return (
        <View className="mx-auto w-full pb-16">
            <Text className="text-center mb-4 text-dark-200 text-3xl font-semibold">
                Photos:
            </Text>

            <View className="w-[300px] mx-auto gap-6">
                {org?.photos?.[1].medium ? (
                    <Image
                        source={{
                            uri: org?.photos?.[1].medium,
                        }}
                        className="w-full h-60"
                        resizeMode="contain"
                    />
                ) : null}

                {org?.photos?.[2]?.medium ? (
                    <Image
                        source={{
                            uri: org?.photos?.[2].medium,
                        }}
                        className="w-full h-60"
                        resizeMode="contain"
                    />
                ) : null}
                {org?.photos?.[3]?.medium ? (
                    <Image
                        source={{
                            uri: org?.photos?.[3].medium,
                        }}
                        className="w-full h-60"
                        resizeMode="contain"
                    />
                ) : null}
                {org?.photos?.[4]?.medium ? (
                    <Image
                        source={{
                            uri: org?.photos?.[4].medium,
                        }}
                        className="w-full h-60"
                        resizeMode="contain"
                    />
                ) : null}
                {org?.photos?.[5]?.medium ? (
                    <Image
                        source={{
                            uri: org?.photos?.[5].medium,
                        }}
                        className="w-full h-60"
                        resizeMode="contain"
                    />
                ) : null}
                {org?.photos?.[6]?.medium ? (
                    <Image
                        source={{
                            uri: org?.photos?.[6].medium,
                        }}
                        className="w-full h-60"
                        resizeMode="contain"
                    />
                ) : null}
                {org?.photos?.[7]?.medium ? (
                    <Image
                        source={{
                            uri: org?.photos?.[7].medium,
                        }}
                        className="w-full h-60"
                        resizeMode="contain"
                    />
                ) : null}
                {org?.photos?.[8]?.medium ? (
                    <Image
                        source={{
                            uri: org?.photos?.[8].medium,
                        }}
                        className="w-full h-60"
                        resizeMode="contain"
                    />
                ) : null}
                {org?.photos?.[9]?.medium ? (
                    <Image
                        source={{
                            uri: org?.photos?.[9].medium,
                        }}
                        className="w-full h-60"
                        resizeMode="contain"
                    />
                ) : null}
                {org?.photos?.[10]?.medium ? (
                    <Image
                        source={{
                            uri: org?.photos?.[10].medium,
                        }}
                        className="w-full h-60"
                        resizeMode="contain"
                    />
                ) : null}
            </View>
        </View>
    );
};

export default OrgPagePhotos;
