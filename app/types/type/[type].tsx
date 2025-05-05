import BackButton from "@/components/BackButton";
import FriendCard from "@/components/FriendCard";
import PageButton from "@/components/PageButton";
import { useFetch } from "@/hooks/useFetch";
import { useMyRouter } from "@/hooks/useMyRouter";
import { useParams } from "@/hooks/useParams";
import { getAnimalsBySingleType, PETFINDER_URL } from "@/lib/api";
import { icons } from "@/lib/icons";
import { deslugify } from "@/lib/utils";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const TypeResults = () => {
    const { type } = useLocalSearchParams();

    const { onPress } = useMyRouter();

    const { gender, coat, color } = useParams(
        `${PETFINDER_URL}/animals?type=${type}`
    );

    const {
        data: animals,
        loading,
        error,
    } = useFetch(() => getAnimalsBySingleType(type as string));

    const animalType = deslugify(`${(type as string).split("&")[0]}`);

    return (
        <View className="flex-1 bg-light-100 p-4 pt-20">
            <Image
                source={icons.bone_bg}
                resizeMode="contain"
                className="absolute w-full h-full left-[50%] top-[60%] -translate-x-[46.5%] -translate-y-[50%] z-0"
            />

            <View>
                <Text className="text-center text-dark-200 text-6xl font-bold mb-6 mx-auto">
                    Results:
                </Text>
                <View className="bg-accent/90 p-4 rounded-lg my-2">
                    <Text className="text-center text-dark-200 text-2xl font-semibold uppercase">
                        {`${animalType}` +
                            (gender ? `, ${gender}` : "") +
                            (coat ? `, ${coat}` : "") +
                            (color ? `, ${color}` : "")}
                    </Text>
                </View>
            </View>

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

            {!loading && !error && animals && animals.length > 0 && (
                <FlatList
                    data={animals}
                    renderItem={({ item }) => <FriendCard {...item} />}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: "center",
                        gap: 5,
                        marginBottom: 10,
                    }}
                    className="mb-20"
                    ListFooterComponent={
                        <PageButton text="Next Page" color="#114A04" />
                    }
                />
            )}

            <BackButton onPress={onPress} />
        </View>
    );
};

export default TypeResults;
