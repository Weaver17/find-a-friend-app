import React from "react";
import { Text, View } from "react-native";

const FriendGenInfo = (friend: Friend) => {
    return (
        <View className="flex items-center gap-4 my-2">
            <View className="flex-row flex-wrap justify-center bg-accent/90  px-2 py-4 w-full rounded-xl">
                {friend?.breeds?.unknown === true ? <Text>Unknown</Text> : null}

                {friend?.breeds?.mixed === true ? (
                    <Text className="text-dark-200 text-xl mr-2">Mixed</Text>
                ) : null}
                {friend?.breeds?.primary ? (
                    <Text className="text-dark-200 text-xl mr-1 font-semibold">
                        {friend?.breeds?.primary}
                    </Text>
                ) : null}

                {friend?.breeds?.secondary ? (
                    <Text className="text-dark-200 text-xl font-semibold">
                        {" "}
                        and &nbsp; {friend?.breeds?.secondary}
                    </Text>
                ) : null}
            </View>

            {/* AGE / GENDER / SIZE  */}
            <View className="flex-row justify-between w-full px-2">
                <Text className="text-dark-200 text-xl font-semibold">
                    {friend?.species}
                </Text>
                <Text className="text-dark-200 text-xl font-semibold">
                    {friend?.age}
                </Text>
                <Text className="text-dark-200 text-xl font-semibold">
                    {friend?.size}
                </Text>
                <Text className="text-dark-200 text-xl font-semibold">
                    {friend?.gender}
                </Text>
            </View>
        </View>
    );
};

export default FriendGenInfo;
