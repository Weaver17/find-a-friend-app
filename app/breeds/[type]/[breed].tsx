import BackButton from "@/components/BackButton";
import FriendCard from "@/components/FriendCard";
import NoFriendsFound from "@/components/NoFriendsFound";
import PaginateBtns from "@/components/PaginateBtns";
import { useFetch } from "@/hooks/useFetch";
import { useMyRouter } from "@/hooks/useMyRouter";
import { getSpecificAnimalTypeBreed } from "@/lib/api";
import { icons } from "@/lib/icons";
import { deslugify } from "@/lib/utils";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const BreedPage = () => {
    const { type, breed } = useLocalSearchParams();

    const [friends, setFriends] = useState<Friend[]>([]);

    const typeTitle = deslugify(type as string);

    const {
        loading,
        setLoading,
        error,
        setError,
        totalPages,
        setTotalPages,
        page,
        setPage,
    } = useFetch(() =>
        getSpecificAnimalTypeBreed(type as string, breed as string, page)
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
                await getSpecificAnimalTypeBreed(
                    type as string,
                    breed as string,
                    page
                ).then((data) => {
                    setFriends(data.animals);
                    setPage(data.pagination.current_page);
                    setTotalPages(data.pagination.total_pages);
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
    }, [page]);

    return (
        <View className="flex-1 bg-light-100 p-4">
            <Image
                source={icons.bone_bg}
                resizeMode="contain"
                className="absolute w-full h-full left-[50%] top-[55%] -translate-x-[46.5%] -translate-y-[50%] z-0"
            />
            <Text className="text-center text-dark-200 mt-16 mb-4 mx-auto text-4xl font-bold uppercase">
                {typeTitle}: {breed}
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
                    className="mb-[66px]"
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

export default BreedPage;
