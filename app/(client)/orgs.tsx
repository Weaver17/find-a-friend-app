import OrgCard from "@/components/OrgCard";
import PaginateBtns from "@/components/PaginateBtns";
import { useFetch } from "@/hooks/useFetch";
import { useMyRouter } from "@/hooks/useMyRouter";
import { getAllOrganizations } from "@/lib/api";
import { icons } from "@/lib/icons";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const OrgsPage = () => {
    const [orgs, setOrgs] = useState<Orginization[]>([]);

    const {
        loading,
        setLoading,
        error,
        setError,
        totalPages,
        setTotalPages,
        page,
        setPage,
    } = useFetch(getAllOrganizations);

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
                await getAllOrganizations(page).then((data) => {
                    setOrgs(data.organizations);
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

            <Text className="text-center text-dark-200 text-4xl font-bold my-6 mx-auto">
                Organizations
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

            {!loading && !error && orgs && orgs.length > 0 && (
                <FlatList
                    data={orgs}
                    renderItem={({ item }) => <OrgCard name={item.name} />}
                    keyExtractor={(item) => item.name}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        justifyContent: "center",
                        gap: 6,
                        paddingBottom: 80,
                    }}
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
};

export default OrgsPage;
