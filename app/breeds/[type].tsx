import BackButton from "@/components/BackButton";
import BreedsCard from "@/components/subcards/BreedsCard";
import { useFetch } from "@/hooks/useFetch";
import { useMyRouter } from "@/hooks/useMyRouter";
import { getAnimalTypeBreeds } from "@/lib/api";
import { icons } from "@/lib/icons";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const BreedsPage = () => {
    const { type } = useLocalSearchParams();

    const [breeds, setBreeds] = useState<Breeds[]>([]);

    const { loading, setLoading, error, setError } = useFetch(() =>
        getAnimalTypeBreeds(type as string)
    );

    const { onPress } = useMyRouter();

    useEffect(() => {
        const fetchFriends = async () => {
            setLoading(true);
            try {
                await getAnimalTypeBreeds(type as string).then((data) => {
                    setBreeds(data);
                });
            } catch (e) {
                console.log(e);
                setError(e as Error);
                throw e;
            } finally {
                setLoading(false);
            }
        };
        fetchFriends();
    }, []);

    return (
        <View className="flex-1 bg-light-100 p-4">
            <Image
                source={icons.bone_bg}
                resizeMode="contain"
                className="absolute w-full h-full left-[50%] top-[50%] -translate-x-[46.5%] -translate-y-[50%] z-0"
            />

            <Text className="text-center text-dark-200 text-4xl font-bold mt-16 mb-4 mx-auto uppercase">
                Breeds for {type}s
            </Text>

            {/* SEARCH BAR OR FILTER OPTIONS NEEDED */}

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

            {!loading && !error && breeds && breeds.length > 0 && (
                <FlatList
                    data={breeds}
                    renderItem={({ item }) => (
                        <BreedsCard type={type as string} name={item.name} />
                    )}
                    keyExtractor={(item) => item.name}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        justifyContent: "center",
                        gap: 6,
                        paddingBottom: 80,
                    }}
                    className="mb-18"
                />
            )}
            <BackButton onPress={onPress} />
        </View>
    );
};

export default BreedsPage;
