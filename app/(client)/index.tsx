import FriendCard from "@/components/FriendCard";
import PageButton from "@/components/PageButton";
import { useFetch } from "@/hooks/useFetch";
import { getAllAnimals } from "@/lib/api";
import { icons } from "@/lib/icons";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
    const { data: friends, loading, error } = useFetch(getAllAnimals);

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
                        <Text className="text-center text-dark-200 text-4xl font-bold mb-6 mx-auto">
                            Latest Potential Friends:
                        </Text>
                    }
                    ListFooterComponent={
                        <PageButton text="Next Page" color="#114A04" />
                    }
                />
            )}
        </View>
    );
}
