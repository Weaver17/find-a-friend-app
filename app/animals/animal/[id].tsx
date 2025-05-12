import BackButton from "@/components/BackButton";
import FriendAdd from "@/components/friend-page/FriendAdd";
import FriendAdoptAtt from "@/components/friend-page/FriendAdoptAtt";
import FriendCoatColors from "@/components/friend-page/FriendCoatColors";
import FriendEnvTags from "@/components/friend-page/FriendEnvTags";
import FriendGenInfo from "@/components/friend-page/FriendGenInfo";
import FriendName from "@/components/friend-page/FriendName";
import FriendPhoto from "@/components/friend-page/FriendPhoto";
import { useFetch } from "@/hooks/useFetch";
import { useMyRouter } from "@/hooks/useMyRouter";
import { getAnimalById } from "@/lib/api";
import { icons } from "@/lib/icons";
import { getDarkTypeIcon } from "@/lib/utils";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

const FriendPage = () => {
    const { id } = useLocalSearchParams();

    const [friend, setFriend] = useState<Friend>();

    const { loading, setLoading, error, setError } = useFetch(() =>
        getAnimalById(id as string)
    );

    const { onPress } = useMyRouter();

    const icon = getDarkTypeIcon(friend?.type ?? "");

    useEffect(() => {
        const fetchFriend = async () => {
            setLoading(true);
            try {
                await getAnimalById(id as string).then((data) => {
                    setFriend(data);
                });
            } catch (e) {
                console.log(e);
                setError(e as Error);
                throw e;
            } finally {
                setLoading(false);
            }
        };

        fetchFriend();
    }, []);

    return (
        <View className="flex-1 bg-light-100 p-4">
            <Image
                source={icons.bone_bg}
                resizeMode="contain"
                className="absolute w-full h-full left-[50%] top-[55%] -translate-x-[46.5%] -translate-y-[50%] z-0"
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

            {!loading && !error && friend && (
                <View>
                    {/* HEADER / NAME  */}
                    <FriendName {...friend} />

                    <ScrollView
                        className="mb-[430px] pb-80"
                        showsVerticalScrollIndicator={false}
                    >
                        {/* ICON  */}
                        <Image
                            source={icon}
                            className=" mt-4 h-20 w-full mx-auto"
                            resizeMode="contain"
                        />
                        {/* BREED / SIZE / INFO  */}
                        <FriendGenInfo {...friend} />
                        {/* COAT / COLORS / DESC  */}
                        <FriendCoatColors {...friend} />
                        {/* ADOPTION STATUS / ATTRIBUTES  */}
                        <View className=" w-full mt-2 px-2 py-4 bg-light-200/80 rounded-lg">
                            <FriendAdoptAtt {...friend} />
                            {/* ENVIRONMENT / TAGS  */}
                            <FriendEnvTags {...friend} />
                            {/* PUBLISHED_AT / CONTACT */}
                            <FriendAdd {...friend} />
                        </View>
                        {/* PHOTOS / VIDEOS  */}
                        <View className="mb-16">
                            {friend?.photos?.[1] ? (
                                <FriendPhoto {...friend} />
                            ) : null}
                        </View>
                    </ScrollView>
                </View>
            )}
            <BackButton onPress={onPress} />
        </View>
    );
};

export default FriendPage;
