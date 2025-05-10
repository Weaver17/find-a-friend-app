import React from "react";
import { Text, View } from "react-native";

const FriendAdoptAtt = (friend: Friend) => {
    return (
        <View className="flex-row gap-4 p-4 mt-2">
            <View className="my-2 w-1/3">
                {friend?.status ? (
                    <View className="justify-between">
                        <Text className="text-dark-200 text-xl">
                            Adoption Status:
                        </Text>
                        <Text className="text-dark-200 text-xl font-semibold uppercase">
                            {friend?.status}
                        </Text>
                    </View>
                ) : null}
            </View>

            <View className="my-2 gap-2 w-2/3 items-end">
                {friend?.attributes?.spayed_neutered ? (
                    <Text className="text-dark-200 text-xl font-semibold">
                        Spayed/Neutered
                    </Text>
                ) : (
                    <Text className="text-dark-200 text-xl font-semibold">
                        Not Spayed or Neutered
                    </Text>
                )}
                {friend?.attributes?.house_trained ? (
                    <Text className="text-dark-200 text-xl font-semibold">
                        House Trained
                    </Text>
                ) : (
                    <Text className="text-dark-200 text-xl font-semibold">
                        Not House Trained
                    </Text>
                )}
                {friend?.type === "Cat" && friend?.attributes?.declawed ? (
                    <Text className="text-dark-200 text-xl font-semibold ">
                        Declawed
                    </Text>
                ) : null}
                {friend?.attributes?.special_needs ? (
                    <Text className="text-dark-200 text-xl font-semibold ">
                        Has Special Needs / Requires Special Attention
                    </Text>
                ) : null}
                {friend?.attributes?.shots_current ? (
                    <Text className="text-dark-200 text-xl font-semibold ">
                        Vaccinations Up-to-Date
                    </Text>
                ) : (
                    <Text className="text-dark-200 text-xl font-semibold ">
                        Needs Updated Vaccinations
                    </Text>
                )}
            </View>
        </View>
    );
};

export default FriendAdoptAtt;
