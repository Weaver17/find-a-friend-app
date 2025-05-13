import BreedCard from "@/components/BreedCard";
import TypeCard from "@/components/TypeCard";
import { useFetch } from "@/hooks/useFetch";
import { getAnimalTypes } from "@/lib/api";
import { icons } from "@/lib/icons";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const BreedsPage = () => {
    const [types, setTypes] = useState<AnimalType[]>([]);

    const { loading, setLoading, error, setError } = useFetch(getAnimalTypes);

    useEffect(() => {
        const fetchTypes = async () => {
            setLoading(true);
            try {
                await getAnimalTypes().then((data) => {
                    setTypes(data.types);
                });
            } catch (e) {
                console.log(e);
                setError(e as Error);
                throw e;
            } finally {
                setLoading(false);
            }
        };
        fetchTypes();
    }, []);

    return (
        <View className="flex-1 bg-light-100 py-4">
            <Image
                source={icons.bone_bg}
                resizeMode="contain"
                className="absolute w-full h-full left-[50%] top-[50%] -translate-x-[46.5%] -translate-y-[50%] z-0"
            />

            <Text className="text-center text-dark-200 text-4xl font-bold my-2 mx-auto">
                Animal Breeds and Types
            </Text>
            <View className="gap-6 h-full pb-28 mb-20">
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
                <View className="bg-accent/90 w-40 p-4 rounded-lg mx-auto">
                    <Text className="text-center text-dark-200 text-4xl font-semibold mx-auto">
                        Breeds
                    </Text>
                </View>
                {!loading && !error && types && types.length > 0 && (
                    <FlatList
                        data={types}
                        renderItem={({ item }) => (
                            <BreedCard name={item.name} />
                        )}
                        keyExtractor={(item) => item.name}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            justifyContent: "center",
                            alignContent: "center",
                            marginBottom: 10,
                            alignItems: "center", // vertically center children
                            padding: 10,
                        }}
                        ItemSeparatorComponent={() => (
                            <View style={{ width: 6 }} />
                        )}
                        snapToInterval={160 + 6}
                        decelerationRate="fast"
                        snapToAlignment="start"
                    />
                )}
                <View className="bg-accent/90 w-40 p-4 rounded-lg mx-auto">
                    <Text className="text-center text-dark-200 text-4xl font-semibold mx-auto">
                        Types
                    </Text>
                </View>
                {!loading && !error && types && types.length > 0 && (
                    <FlatList
                        data={types}
                        renderItem={({ item }) => <TypeCard name={item.name} />}
                        keyExtractor={(item) => item.name}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            justifyContent: "center",
                        }}
                        ItemSeparatorComponent={() => (
                            <View style={{ height: 6 }} />
                        )}
                    />
                )}
            </View>
        </View>
    );
};

export default BreedsPage;
