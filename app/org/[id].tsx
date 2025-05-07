import BackButton from "@/components/BackButton";
import SocialLink from "@/components/SocialLink";
import { useFetch } from "@/hooks/useFetch";
import { useMyRouter } from "@/hooks/useMyRouter";
import { useSocialIconFetch } from "@/hooks/useSocialIconFetch";
import { getSingleOrg } from "@/lib/api";
import { icons } from "@/lib/icons";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    Linking,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const OrgPage = () => {
    const { id } = useLocalSearchParams();

    const [org, setOrg] = useState<Orginization>();

    const { loading, setLoading, error, setError } = useFetch(() =>
        getSingleOrg(id as string)
    );

    const { onPress } = useMyRouter();

    const {
        facebookIcon,
        twitterIcon,
        instagramIcon,
        youtubeIcon,
        pinterestIcon,
        facebookLink,
        twitterLink,
        instagramLink,
        youtubeLink,
        pinterestLink,
    } = useSocialIconFetch(org?.social_media as SocialMedia);

    const openWebsite = async () => {
        try {
            const link = org?.website;
            if (!link) return;

            const supported = await Linking.canOpenURL(link);

            if (!supported) {
                console.log("Don't know how to open URI: " + link);
                return;
            }

            await Linking.openURL(link);
        } catch (e) {
            console.log(e);
            throw e;
        }
    };

    useEffect(() => {
        const fetchFriends = async () => {
            setLoading(true);
            try {
                await getSingleOrg(id as string).then((data) => {
                    setOrg(data);
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

    const mainPhoto = org?.photos?.[0]?.medium ?? "https://http.dog/404.jpg";

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

            {!loading && !error && org && (
                <View>
                    <ScrollView>
                        <View className="bg-accent/90 mt-10 p-2 rounded-xl  gap-4">
                            <Text className="text-center text-dark-200  mx-auto text-4xl font-bold">
                                {org?.name}
                            </Text>
                            <Image
                                source={{ uri: mainPhoto }}
                                className="w-full h-[300px]"
                                resizeMode="contain"
                            />
                            <Text className="text-center mx-auto text-xl text-dark-200 underline">
                                {org?.email}
                            </Text>
                        </View>
                        <View className="flex-row justify-between p-4">
                            <Text className="text-xl text-dark-200">
                                {org?.phone}
                            </Text>
                            <View className="flex-row gap-4">
                                {facebookIcon ? (
                                    <SocialLink
                                        link={facebookLink ?? ""}
                                        icon={facebookIcon}
                                    />
                                ) : null}

                                {instagramIcon ? (
                                    <SocialLink
                                        link={instagramLink ?? ""}
                                        icon={instagramIcon}
                                    />
                                ) : null}

                                {pinterestIcon ? (
                                    <SocialLink
                                        link={pinterestLink ?? ""}
                                        icon={pinterestIcon}
                                    />
                                ) : null}

                                {twitterIcon ? (
                                    <SocialLink
                                        link={twitterLink ?? ""}
                                        icon={twitterIcon}
                                    />
                                ) : null}

                                {youtubeIcon ? (
                                    <SocialLink
                                        link={youtubeLink ?? ""}
                                        icon={youtubeIcon}
                                    />
                                ) : null}
                            </View>
                        </View>
                        <View className="justify-center gap-4 mx-auto">
                            <TouchableOpacity
                                onPress={openWebsite}
                                className="flex-row gap-4 justify-center w-1/2 h-12 bg-primary rounded-full p-2"
                            >
                                <Text className="text-center text-xl text-secondary font-semibold my-auto">
                                    Check Out Their Website
                                </Text>
                            </TouchableOpacity>
                            <Text>Address:</Text>
                            <Text>
                                {`${org?.address?.address1 ?? ""} 
                                ${org?.address?.address2 ?? ""}`}
                            </Text>
                            <Text>{`${org?.address?.city}, ${org?.address?.state}. ${org?.address?.country}. ${org?.address?.postcode}`}</Text>
                        </View>
                    </ScrollView>
                </View>
            )}
            <BackButton onPress={onPress} />
        </View>
    );
};

export default OrgPage;
