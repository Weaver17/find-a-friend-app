import BreedCard from "@/components/BreedCard";
import { useFetch } from "@/hooks/useFetch";
import { getAnimalTypes } from "@/lib/api";
import { icons } from "@/lib/icons";
import React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const AnimalsPage = () => {
    const { data: types, loading, error } = useFetch(getAnimalTypes);

    return (
        <View className="flex-1 bg-light-100 p-4">
            <Image
                source={icons.bone_bg}
                resizeMode="contain"
                className="absolute w-full h-full left-[50%] top-[50%] -translate-x-[46.5%] -translate-y-[50%] z-0"
            />

            <Text className="text-center text-dark-200 text-4xl font-bold my-6 mx-auto">
                Animal Breeds
            </Text>

            {loading && (
                <ActivityIndicator
                    size="large"
                    color="#FFFA70"
                    className="mt-8 self-center"
                />
            )}

            {error && (
                <Text className="text-red-500 px-5 my-3">
                    Error: {error.message}
                </Text>
            )}

            {!loading && !error && types && types.length > 0 && (
                <FlatList
                    data={types}
                    renderItem={({ item }) => <BreedCard name={item.name} />}
                    keyExtractor={(item) => item.name}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        justifyContent: "center",
                        gap: 6,
                        marginBottom: 10,
                    }}
                />
            )}
        </View>
    );
};

export default AnimalsPage;
