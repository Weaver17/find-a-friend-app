import BackButton from "@/components/BackButton";
import SocialLink from "@/components/SocialLink";
import { useFetch } from "@/hooks/useFetch";
import { useMyRouter } from "@/hooks/useMyRouter";
import { useOrgInfoFetch } from "@/hooks/useOrgInfoFetch";
import { getSingleOrg } from "@/lib/api";
import { icons } from "@/lib/icons";
import { openPetFinderLink, openWebsite } from "@/lib/utils";
import { Link, useLocalSearchParams } from "expo-router";
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
        hours,
    } = useOrgInfoFetch(org as Orginization);

    const openAdoptionLink = async () => {
        try {
            const link = org?.adoption?.url;
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
                    <ScrollView className="mb-16">
                        <View className="bg-accent/90 mt-10 p-2  rounded-xl  gap-4">
                            <Text className="text-center text-dark-200  mx-auto text-4xl font-bold">
                                {org?.name}
                            </Text>
                            <Image
                                source={{ uri: mainPhoto }}
                                className="w-full h-[300px]"
                                resizeMode="contain"
                            />
                            <Text className="text-center mx-auto text-xl text-dark-200">
                                {org?.email}
                            </Text>
                        </View>

                        <View className="flex-row justify-between p-4 my-2">
                            <View className="gap-2">
                                {org?.phone ? (
                                    <Text className="text-xl text-dark-200">
                                        {org?.phone}
                                    </Text>
                                ) : null}
                                <View className="justify-center mx-auto">
                                    <Text className=" text-xl text-dark-200">
                                        {org?.address?.address1
                                            ? `${org?.address?.address1 ?? ""}`
                                            : null}

                                        {org?.address?.address2
                                            ? `${org?.address?.address2 ?? ""}`
                                            : null}
                                    </Text>
                                    <Text className="text-xl text-dark-200">{`${org?.address?.city}, ${org?.address?.state}. ${org?.address?.country}. ${org?.address?.postcode}`}</Text>
                                </View>
                            </View>
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
                            {org?.website ? (
                                <TouchableOpacity
                                    onPress={() =>
                                        openWebsite(org?.website ?? "")
                                    }
                                    className="flex-row gap-4 justify-center w-1/2 h-12 bg-primary rounded-full py-2 px-4"
                                >
                                    <Text className="text-center text-xl text-secondary font-semibold my-auto">
                                        Check Out Our Website
                                    </Text>
                                </TouchableOpacity>
                            ) : null}
                        </View>
                        <View className="flex-row gap-4 p-4 my-2">
                            <View className="my-4 gap-4 w-[60%]">
                                {org?.url ? (
                                    <TouchableOpacity
                                        onPress={() =>
                                            openPetFinderLink(org?.url ?? "")
                                        }
                                        className=""
                                    >
                                        <Text className=" text-xl text-dark-100 underline ">
                                            Petfinder Homepage
                                        </Text>
                                    </TouchableOpacity>
                                ) : null}
                                {org?.adoption?.url ? (
                                    <TouchableOpacity
                                        onPress={openAdoptionLink}
                                        className=""
                                    >
                                        <Text className=" text-xl text-dark-100 underline ">
                                            Adoption Page
                                        </Text>
                                    </TouchableOpacity>
                                ) : null}
                            </View>
                            <View className="gap-2 py-2 w-1/2">
                                <View className="flex-row justify-between w-[75%]">
                                    <Text className="text-center text-dark-200 font-semibold">
                                        Monday:
                                    </Text>
                                    <Text className="text-center text-dark-200 font-semibold">
                                        {hours?.mondayHours}
                                    </Text>
                                </View>

                                <View className="flex-row justify-between w-[75%]">
                                    <Text className=" text-dark-200 font-semibold">
                                        Tuesday:
                                    </Text>
                                    <Text className=" text-dark-200 font-semibold">
                                        {hours?.tuesdayHours}
                                    </Text>
                                </View>
                                <View className="flex-row justify-between w-[75%]">
                                    <Text className=" text-dark-200 font-semibold">
                                        Wednesday:
                                    </Text>
                                    <Text className=" text-dark-200 font-semibold">
                                        {hours?.wednesdayHours}
                                    </Text>
                                </View>
                                <View className="flex-row justify-between w-[75%]">
                                    <Text className=" text-dark-200 font-semibold">
                                        Thursday:
                                    </Text>
                                    <Text className=" text-dark-200 font-semibold">
                                        {hours?.thursdayHours}
                                    </Text>
                                </View>
                                <View className="flex-row justify-between w-[75%]">
                                    <Text className=" text-dark-200 font-semibold">
                                        Friday:
                                    </Text>
                                    <Text className=" text-dark-200 font-semibold">
                                        {hours?.fridayHours}
                                    </Text>
                                </View>
                                <View className="flex-row justify-between w-[75%]">
                                    <Text className=" text-dark-200 font-semibold">
                                        Saturday:
                                    </Text>
                                    <Text className=" text-dark-200 font-semibold">
                                        {hours?.saturdayHours}
                                    </Text>
                                </View>
                                <View className="flex-row justify-between w-[75%]">
                                    <Text className=" text-dark-200 font-semibold">
                                        Sunday:
                                    </Text>
                                    <Text className=" text-dark-200 font-semibold">
                                        {hours?.sundayHours}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className="mx-auto p-6">
                            <Link href={`/animals/org/${org?.id}`}>
                                <TouchableOpacity className="flex-row gap-4 justify-center w-1/2 h-12 bg-primary rounded-full  py-2 px-4">
                                    <Text className="text-center text-xl text-secondary font-semibold my-auto">
                                        Browse Our Friends
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                        </View>
                        {org?.photos?.[1] ? (
                            <View className="mx-auto w-full pb-16">
                                <Text className="text-center mb-4 text-dark-200 text-3xl font-semibold">
                                    Photos:
                                </Text>

                                <View className="w-[300px] mx-auto gap-6">
                                    {org?.photos?.[1].medium ? (
                                        <Image
                                            source={{
                                                uri: org?.photos?.[1].medium,
                                            }}
                                            className="w-full h-60"
                                            resizeMode="contain"
                                        />
                                    ) : null}

                                    {org?.photos?.[2]?.medium ? (
                                        <Image
                                            source={{
                                                uri: org?.photos?.[2].medium,
                                            }}
                                            className="w-full h-60"
                                            resizeMode="contain"
                                        />
                                    ) : null}
                                    {org?.photos?.[3]?.medium ? (
                                        <Image
                                            source={{
                                                uri: org?.photos?.[3].medium,
                                            }}
                                            className="w-full h-60"
                                            resizeMode="contain"
                                        />
                                    ) : null}
                                    {org?.photos?.[4]?.medium ? (
                                        <Image
                                            source={{
                                                uri: org?.photos?.[4].medium,
                                            }}
                                            className="w-full h-60"
                                            resizeMode="contain"
                                        />
                                    ) : null}
                                    {org?.photos?.[5]?.medium ? (
                                        <Image
                                            source={{
                                                uri: org?.photos?.[5].medium,
                                            }}
                                            className="w-full h-60"
                                            resizeMode="contain"
                                        />
                                    ) : null}
                                    {org?.photos?.[6]?.medium ? (
                                        <Image
                                            source={{
                                                uri: org?.photos?.[6].medium,
                                            }}
                                            className="w-full h-60"
                                            resizeMode="contain"
                                        />
                                    ) : null}
                                    {org?.photos?.[7]?.medium ? (
                                        <Image
                                            source={{
                                                uri: org?.photos?.[7].medium,
                                            }}
                                            className="w-full h-60"
                                            resizeMode="contain"
                                        />
                                    ) : null}
                                    {org?.photos?.[8]?.medium ? (
                                        <Image
                                            source={{
                                                uri: org?.photos?.[8].medium,
                                            }}
                                            className="w-full h-60"
                                            resizeMode="contain"
                                        />
                                    ) : null}
                                    {org?.photos?.[9]?.medium ? (
                                        <Image
                                            source={{
                                                uri: org?.photos?.[9].medium,
                                            }}
                                            className="w-full h-60"
                                            resizeMode="contain"
                                        />
                                    ) : null}
                                    {org?.photos?.[10]?.medium ? (
                                        <Image
                                            source={{
                                                uri: org?.photos?.[10].medium,
                                            }}
                                            className="w-full h-60"
                                            resizeMode="contain"
                                        />
                                    ) : null}
                                </View>
                            </View>
                        ) : null}
                    </ScrollView>
                </View>
            )}
            <BackButton onPress={onPress} />
        </View>
    );
};

export default OrgPage;
