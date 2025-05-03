import TabIcon from "@/components/TabIcon";
import { icons } from "@/lib/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const _layout = () => {
    return (
        <>
            <View className="bg-light-100 w-full h-[110px] pt-14">
                <Image
                    source={icons.logo}
                    className="w-full h-full "
                    resizeMode="contain"
                />
            </View>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarItemStyle: {
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    tabBarStyle: {
                        backgroundColor: "#29541E",
                        marginHorizontal: 0,
                        marginVertical: 0,
                        height: 70,
                        position: "absolute",
                        overflow: "hidden",
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} title="Home" />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="animals"
                    options={{
                        title: "Animals",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} title="Animals" />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="breeds"
                    options={{
                        title: "Breeds",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} title="Breeds" />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="orgs"
                    options={{
                        title: "Orgs",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} title="Orgs" />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default _layout;
