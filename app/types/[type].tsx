import SubCard from "@/components/SubCard";
import { useFetch } from "@/hooks/useFetch";
import { getSingleAnimalType } from "@/lib/api";
import { icons } from "@/lib/icons";
import { getScientificName } from "@/lib/utils";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const TypePage = () => {
    const { type } = useLocalSearchParams();

    const {
        data: animalType,
        loading,
        error,
    } = useFetch(() => getSingleAnimalType(type as string));

    const scientificName = getScientificName(animalType?.name);

    return (
        <View className="flex-1 bg-light-100 p-4 pt-20">
            <Image
                source={icons.bone_bg}
                resizeMode="contain"
                className="absolute w-full h-full left-[50%] top-[60%] -translate-x-[46.5%] -translate-y-[50%] z-0"
            />

            {loading && (
                <ActivityIndicator
                    size="large"
                    color="#FFFA70"
                    className="my-auto self-center"
                />
            )}

            {error && (
                <Text className="text-red-500 px-5 my-3">
                    Error: {error.message}
                </Text>
            )}

            {!loading && !error && type && (
                <>
                    <Text className="text-center text-dark-200 text-6xl font-bold mb-6 mx-auto">
                        {animalType?.name}
                    </Text>
                    <View className="bg-accent/90 p-4 rounded-lg my-2">
                        <Text className="text-center text-dark-200 text-2xl font-bold">
                            {scientificName}
                        </Text>
                    </View>
                    <Text className="text-center text-dark-100 text-3xl font-bold my-4 mx-auto">
                        Coats
                    </Text>
                    <FlatList
                        data={animalType?.coats}
                        renderItem={({ item }) => <SubCard text={item} />}
                        keyExtractor={(item) => item}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        columnWrapperStyle={{
                            justifyContent: "flex-start",
                            gap: 4,
                            marginVertical: 2,
                        }}
                        contentContainerStyle={{
                            paddingBottom: 50,
                        }}
                        className="w-full mx-auto"
                    />
                    <Text className="text-center text-dark-100 text-3xl font-bold my-4 mx-auto">
                        Colors
                    </Text>
                    <FlatList
                        data={animalType?.colors}
                        renderItem={({ item }) => <SubCard text={item} />}
                        keyExtractor={(item) => item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="w-full mx-auto"
                    />
                </>
            )}
        </View>
    );
};

export default TypePage;
