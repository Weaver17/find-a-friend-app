import { useOrgInfoFetch } from "@/hooks/useOrgInfoFetch";
import React from "react";
import { Text, View } from "react-native";

const OrgPageHours = (org: Orginization) => {
    const { hours } = useOrgInfoFetch(org);

    return (
        <View className="gap-2 py-2 w-1/2">
            <View className="flex-row justify-between w-[75%]">
                <Text className="text-center text-dark-200 font-semibold">
                    Monday:
                </Text>
                <Text className="text-center text-dark-200 font-semibold">
                    {hours?.mondayHours}
                </Text>
            </View>

            <View className="flex-row justify-between w-[75%]">
                <Text className=" text-dark-200 font-semibold">Tuesday:</Text>
                <Text className=" text-dark-200 font-semibold">
                    {hours?.tuesdayHours}
                </Text>
            </View>
            <View className="flex-row justify-between w-[75%]">
                <Text className=" text-dark-200 font-semibold">Wednesday:</Text>
                <Text className=" text-dark-200 font-semibold">
                    {hours?.wednesdayHours}
                </Text>
            </View>
            <View className="flex-row justify-between w-[75%]">
                <Text className=" text-dark-200 font-semibold">Thursday:</Text>
                <Text className=" text-dark-200 font-semibold">
                    {hours?.thursdayHours}
                </Text>
            </View>
            <View className="flex-row justify-between w-[75%]">
                <Text className=" text-dark-200 font-semibold">Friday:</Text>
                <Text className=" text-dark-200 font-semibold">
                    {hours?.fridayHours}
                </Text>
            </View>
            <View className="flex-row justify-between w-[75%]">
                <Text className=" text-dark-200 font-semibold">Saturday:</Text>
                <Text className=" text-dark-200 font-semibold">
                    {hours?.saturdayHours}
                </Text>
            </View>
            <View className="flex-row justify-between w-[75%]">
                <Text className=" text-dark-200 font-semibold">Sunday:</Text>
                <Text className=" text-dark-200 font-semibold">
                    {hours?.sundayHours}
                </Text>
            </View>
        </View>
    );
};

export default OrgPageHours;
