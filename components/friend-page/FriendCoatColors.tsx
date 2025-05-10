import { openWebsiteLink } from "@/lib/utils";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const FriendCoatColors = (friend: Friend) => {
    const onLinkPress = async () => {
        await openWebsiteLink(friend?.url as string);
    };

    return (
        <View className=" mt-2 px-2 py-4  w-full justify-center gap-4 mx-auto bg-primary/90 rounded-xl">
            {friend?.coat ? (
                <Text className="text-secondary text-center text-xl font-semibold">
                    Coat: {friend?.coat}
                </Text>
            ) : null}
            {friend?.colors?.primary ? (
                <View className="flex-row flex-wrap justify-center w-full itmes-center">
                    <Text className="text-secondary text-xl font-semibold">
                        Colors:{" "}
                    </Text>
                    <Text className="text-secondary text-center text-xl font-semibold">
                        {friend?.colors?.primary}{" "}
                    </Text>
                    {friend?.colors?.secondary ? (
                        <Text className="text-secondary text-center text-xl font-semibold">
                            &amp; {friend?.colors?.secondary}
                        </Text>
                    ) : null}
                    {friend?.colors?.tertiary ? (
                        <Text className="text-secondary text-center text-xl font-semibold">
                            &amp; {friend?.colors?.tertiary}
                        </Text>
                    ) : null}
                </View>
            ) : null}
            {friend?.description ? (
                <Text className="text-secondary text-xl text-center ">
                    {friend?.description}
                </Text>
            ) : null}
            {/* PETFINDER LINK  */}
            {friend?.url ? (
                <TouchableOpacity onPress={onLinkPress}>
                    <Text className="text-secondary text-xl text-center underline">
                        Petfinder Page
                    </Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

export default FriendCoatColors;
