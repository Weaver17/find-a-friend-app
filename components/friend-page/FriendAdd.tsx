import { formatDate } from "@/lib/utils";
import React from "react";
import { Text, View } from "react-native";

const FriendAdd = (friend: Friend) => {
    const date = formatDate(friend?.published_at as string);

    return (
        <View className="mx-auto gap-2">
            {friend?.published_at ? (
                <Text className="text-dark-200 text-xl text-center font-semibold">
                    Status Changed On: {date}
                </Text>
            ) : null}
            {friend?.contact ? (
                <View className="gap-1">
                    {friend?.contact?.email ? (
                        <Text className="text-dark-200 text-xl font-semibold text-center underline">
                            {friend?.contact?.email}
                        </Text>
                    ) : null}
                    {friend?.contact?.phone ? (
                        <Text className="text-dark-200 text-xl font-semibold text-center">
                            {friend?.contact?.phone}
                        </Text>
                    ) : null}
                    <View className="g-1S">
                        {friend?.contact?.address?.address1 ? (
                            <Text className="text-dark-200 text-xl font-semibold text-center">
                                {friend?.contact?.address?.address1}
                            </Text>
                        ) : null}
                        {friend?.contact?.address?.address2 ? (
                            <Text className="text-dark-200 text-xl font-semibold text-center">
                                {friend?.contact?.address?.address2}
                            </Text>
                        ) : null}
                        <View className="flex-row justify-center gap-2">
                            {friend?.contact?.address?.city ? (
                                <Text className="text-dark-200 text-xl font-semibold text-center">
                                    {friend?.contact?.address?.city},
                                </Text>
                            ) : null}
                            {friend?.contact?.address?.state ? (
                                <Text className="text-dark-200 text-xl font-semibold text-center">
                                    {friend?.contact?.address?.state}.
                                </Text>
                            ) : null}

                            {friend?.contact?.address?.country ? (
                                <Text className="text-dark-200 text-xl font-semibold text-center">
                                    {friend?.contact?.address?.country}.
                                </Text>
                            ) : null}
                            {friend?.contact?.address?.postcode ? (
                                <Text className="text-dark-200 text-xl font-semibold text-center">
                                    {friend?.contact?.address?.postcode}
                                </Text>
                            ) : null}
                        </View>
                    </View>
                </View>
            ) : null}
        </View>
    );
};

export default FriendAdd;
