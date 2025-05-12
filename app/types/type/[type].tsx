import BackButton from "@/components/BackButton";
import FriendCard from "@/components/FriendCard";
import NoFriendsFound from "@/components/NoFriendsFound";
import PaginateBtns from "@/components/PaginateBtns";
import { useFetch } from "@/hooks/useFetch";
import { useMyRouter } from "@/hooks/useMyRouter";
import { useParams } from "@/hooks/useParams";
import { getAnimalsBySingleType, PETFINDER_URL } from "@/lib/api";
import { icons } from "@/lib/icons";
import { deslugify } from "@/lib/utils";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const TypeResults = () => {
    const { type } = useLocalSearchParams();

    const [friends, setFriends] = useState<Friend[]>([]);

    const {
        loading,
        setLoading,
        error,
        setError,
        totalPages,
        setTotalPages,
        page,
        setPage,
    } = useFetch(() => getAnimalsBySingleType(type as string, page));

    const { gender, coat, color } = useParams(
        `${PETFINDER_URL}/animals?type=${type}`
    );

    const { NextPress, PrevPress, onPress } = useMyRouter();

    const onNextPress = () => {
        setPage(NextPress(page));
    };

    const onPrevPress = () => {
        setPage(PrevPress(page));
    };

    useEffect(() => {
        const fetchFriends = async () => {
            setLoading(true);
            try {
                await getAnimalsBySingleType(type as string, page).then(
                    (data) => {
                        setFriends(data.animals);
                        setPage(data.pagination.current_page);
                        setTotalPages(data.pagination.total_pages);
                    }
                );
            } catch (e) {
                console.log(e);
                setError(e as Error);
                throw e;
            } finally {
                setLoading(false);
            }
        };
        fetchFriends();
    }, [page]);

    const animalType = deslugify((type as string).split("&")[0]);

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

            {!loading && !error && friends && friends.length === 0 && (
                <NoFriendsFound />
            )}

            {!loading && !error && friends && friends.length > 0 && (
                <FlatList
                    data={friends}
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
                        <PaginateBtns
                            totalPages={totalPages}
                            page={page}
                            onNextPress={onNextPress}
                            onPrevPress={onPrevPress}
                        />
                    }
                />
            )}

            <BackButton onPress={onPress} />
        </View>
    );
};

export default TypeResults;
