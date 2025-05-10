import BackButton from "@/components/BackButton";
import CoatCard from "@/components/subcards/CoatCard";
import ColorCard from "@/components/subcards/ColorCard";
import { useFetch } from "@/hooks/useFetch";
import { useMyRouter } from "@/hooks/useMyRouter";
import { getSingleAnimalType } from "@/lib/api";
import { icons } from "@/lib/icons";
import { getScientificName } from "@/lib/utils";
import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const TypePage = () => {
    const { type } = useLocalSearchParams();

    const [typeDetails, setTypeDetails] = useState<AnimalType>();

    const { loading, setLoading, error, setError } = useFetch(() =>
        getSingleAnimalType(type as string)
    );

    const { onPress } = useMyRouter();

    useEffect(() => {
        const fetchTypeDetails = async () => {
            setLoading(true);
            try {
                await getSingleAnimalType(type as string).then((data) => {
                    setTypeDetails(data.type);
                });
            } catch (e) {
                console.log(e);
                setError(e as Error);
                throw e;
            } finally {
                setLoading(false);
            }
        };
        fetchTypeDetails();
    }, []);

    const scientificName = getScientificName(typeDetails?.name ?? "N/A");

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
                        {typeDetails?.name}
                    </Text>
                    {scientificName === "N/A" ? null : (
                        <View className="bg-accent/90 p-4 rounded-lg my-2">
                            <Text className="text-center text-dark-200 text-2xl font-bold">
                                {scientificName}
                            </Text>
                        </View>
                    )}

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            justifyContent: "center",
                            gap: 6,
                            marginBottom: 10,
                            paddingBottom: 80,
                        }}
                    >
                        <View className="mx-auto">
                            <Link href={`/types/type/${type}`} asChild>
                                <TouchableOpacity className="flex-row justify-center w-32 h-14 mx-auto bg-light-300 rounded-full py-2">
                                    <Text className="text-center text-dark-100 text-3xl font-bold my-1 mx-auto">
                                        All
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                        </View>

                        <View className="flex-row justify-between mx-auto w-1/2">
                            <Link
                                href={`/types/type/${type}&gender=male`}
                                asChild
                            >
                                <TouchableOpacity>
                                    <Text className="text-center text-dark-100 text-3xl font-semibold my-4 mx-auto underline">
                                        Male
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                            <Link
                                href={`/types/type/${type}&gender=female`}
                                asChild
                            >
                                <TouchableOpacity>
                                    <Text className="text-center text-dark-100 text-3xl font-semibold my-4 mx-auto underline">
                                        Female
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                        </View>

                        {typeDetails && typeDetails?.coats.length > 0 && (
                            <View>
                                <Text className="text-center text-dark-100 text-3xl font-bold my-4 mx-auto">
                                    Coats
                                </Text>
                                <View className="flex-row flex-wrap justify-center mx-auto w-full gap-4">
                                    {typeDetails?.coats.map((coat: string) => (
                                        <CoatCard
                                            key={coat}
                                            type={type}
                                            text={coat}
                                        />
                                    ))}
                                </View>
                            </View>
                        )}

                        <View>
                            <Text className="text-center text-dark-100 text-3xl font-bold my-4 mx-auto">
                                Colors
                            </Text>
                            <View className="flex-row flex-wrap justify-center mx-auto w-full gap-2">
                                {typeDetails?.colors.map((color: string) => (
                                    <ColorCard
                                        key={color}
                                        type={type}
                                        text={color}
                                    />
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                    <BackButton onPress={onPress} />
                </>
            )}
        </View>
    );
};

export default TypePage;
