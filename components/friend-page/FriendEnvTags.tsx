import React from "react";
import { Text, View } from "react-native";

const FriendEnvTags = (friend: Friend) => {
    return (
        <View className="flex-row gap-4 p-4">
            <View className="mb-4 w-1/2">
                <Text className="text-dark-200 text-xl">I am good with:</Text>
                <View className="flex-row gap-2">
                    <Text className="text-dark-200 text-xl">Kids:</Text>

                    {friend?.environment?.children ? (
                        <Text className="text-dark-200 text-xl font-semibold">
                            Yes
                        </Text>
                    ) : (
                        <Text className="text-dark-200 text-xl font-semibold">
                            No
                        </Text>
                    )}
                </View>
                <View className="flex-row gap-2">
                    <Text className="text-dark-200 text-xl">Dogs:</Text>
                    {friend?.environment?.dogs ? (
                        <Text className="text-dark-200 text-xl font-semibold">
                            Yes
                        </Text>
                    ) : (
                        <Text className="text-dark-200 text-xl font-semibold">
                            No
                        </Text>
                    )}
                </View>
                <View className="flex-row gap-2">
                    <Text className="text-dark-200 text-xl">Cats:</Text>
                    {friend?.environment?.cats ? (
                        <Text className="text-dark-200 text-xl font-semibold">
                            Yes
                        </Text>
                    ) : (
                        <Text className="text-dark-200 text-xl font-semibold">
                            No
                        </Text>
                    )}
                </View>
            </View>
            <View className="w-1/2">
                {friend?.tags && friend?.tags.length > 0 ? (
                    <View className="items-end">
                        <Text className="text-dark-200 text-xl">
                            Some Would Say I Am:
                        </Text>
                        {friend?.tags.map((tag: string) => (
                            <Text
                                key={tag}
                                className="text-dark-200 text-xl font-semibold"
                            >
                                {tag}
                            </Text>
                        ))}
                    </View>
                ) : null}
            </View>
        </View>
    );
};

export default FriendEnvTags;
