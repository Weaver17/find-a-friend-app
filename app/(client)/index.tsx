import FriendCard from "@/components/FriendCard";
import PaginateBtns from "@/components/PaginateBtns";
import { useFetch } from "@/hooks/useFetch";
import { useMyRouter } from "@/hooks/useMyRouter";
import { getAllAnimals } from "@/lib/api";
import { icons } from "@/lib/icons";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
    const [friends, setFriends] = useState<Friend[]>([]);

    // TODO:
    // FIX "FETCHFRIENDS" ON EACH PAGE FOR CLARIFICATON
    // ADD LOGIC FOR WHEN NO RESULTS ARE FOUND
    // INTRO TEXT
    // FRIEND PAGE
    // CONSOLIDATE ICONS

    const {
        loading,
        setLoading,
        error,
        setError,
        totalPages,
        setTotalPages,
        page,
        setPage,
    } = useFetch(getAllAnimals);

    const { NextPress, PrevPress } = useMyRouter();

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
                await getAllAnimals(page).then((data) => {
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
                className="absolute w-full h-full left-[50%] top-[50%] -translate-x-[46.5%] -translate-y-[50%] z-0"
            />

            <View className="bg-accent/90 p-4 rounded-lg gap-y-4 my-4">
                <Text className="text-center text-dark-200 text-2xl font-bold">
                    Welcome To The App That Helps You Find The Friend You Are
                    Looking For!
                </Text>
                <Text className="text-center text-dark-200 text-base">
                    Regular intro text about what this app is all about. Regular
                    intro text about what this app is all about. Regular intro
                    text about what this app is all about. Regular intro text
                    about what this app is all about.
                </Text>
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
                    ListHeaderComponent={
                        <Text className="text-center text-dark-200 mb-6 mx-auto text-4xl font-bold">
                            Latest Potential Friends:
                        </Text>
                    }
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
        </View>
    );
}
