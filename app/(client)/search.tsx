import SearchBar from "@/components/search-page/SearchBar";
import SearchSelect from "@/components/search-page/SearchSelect";
import { icons } from "@/lib/icons";
import React from "react";
import { Button, Image, Text, View } from "react-native";

const SearchPage = () => {
    return (
        <View className="flex-1 bg-light-100 p-4">
            <Image
                source={icons.bone_bg}
                resizeMode="contain"
                className="absolute w-full h-full left-[50%] top-[50%] -translate-x-[46.5%] -translate-y-[50%] z-0"
            />
            <Text className="text-center text-dark-200 text-4xl font-bold my-2 mx-auto">
                Search
            </Text>
            <View className="mx-auto my-4">
                <SearchSelect />
            </View>

            <SearchBar />
            <View className="bg-primary rounded-full w-[40%] h-12 mx-auto my-4 justify-center items-center">
                <Button title="Search" color="#FFF714" />
            </View>
        </View>
    );
};

export default SearchPage;
