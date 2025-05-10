import BackButton from "@/components/BackButton";
import OrgPageAddress from "@/components/org-page/OrgPageAddress";
import OrgPageBtn from "@/components/org-page/OrgPageBtn";
import OrgPageHours from "@/components/org-page/OrgPageHours";
import OrgPageLink from "@/components/org-page/OrgPageLink";
import OrgPageLogo from "@/components/org-page/OrgPageLogo";
import OrgPagePhotos from "@/components/org-page/OrgPagePhotos";
import OrgPageSocials from "@/components/org-page/OrgPageSocials";
import { useFetch } from "@/hooks/useFetch";
import { useMyRouter } from "@/hooks/useMyRouter";
import { getSingleOrg } from "@/lib/api";
import { icons } from "@/lib/icons";
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

const OrgPage = () => {
    const { id } = useLocalSearchParams();

    const [org, setOrg] = useState<Orginization>();

    const { loading, setLoading, error, setError } = useFetch(() =>
        getSingleOrg(id as string)
    );

    const { onPress } = useMyRouter();

    useEffect(() => {
        const fetchOrg = async () => {
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

        fetchOrg();
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

            {!loading && !error && org && (
                <View>
                    <ScrollView className="mb-16">
                        {/* HEADER / LOGO  */}
                        <OrgPageLogo {...org} />

                        <View className="flex-row justify-between p-4 my-2">
                            {/* ADDRESS  */}
                            <OrgPageAddress {...org} />
                            {/* SOCIAL LINKS  */}
                            <OrgPageSocials {...org} />
                        </View>
                        <View className="justify-center gap-4 mx-auto">
                            {/* WEBSITE LINK  */}
                            {org?.website ? (
                                <OrgPageBtn
                                    url={org?.website}
                                    text="Check out our Website"
                                />
                            ) : null}
                        </View>
                        <View className="flex-row gap-4 p-4 my-2">
                            <View className="my-4 gap-4 w-[60%]">
                                {/* PETFINDER LINK  */}
                                {org?.url ? (
                                    <OrgPageLink
                                        url={org?.url}
                                        text="Petfinder Homepage"
                                    />
                                ) : null}
                                {/* ADOPTION PAGE LINK  */}
                                {org?.adoption?.url ? (
                                    <OrgPageLink
                                        url={org?.adoption?.url}
                                        text="Adoption Homepage"
                                    />
                                ) : null}
                            </View>
                            {/* HOURS  */}
                            <OrgPageHours {...org} />
                        </View>
                        <View className="mx-auto p-6">
                            {/* LOCAL BROWSE  */}
                            <Link
                                href={`/animals/org/${org?.id.toLowerCase()}`}
                                asChild
                            >
                                <TouchableOpacity className="flex-row gap-4 justify-center h-12 bg-primary rounded-full py-2 px-4">
                                    <Text className="text-center text-xl text-secondary font-semibold my-auto">
                                        Browse Our Friends
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                        </View>
                        {/* PHOTOS  */}
                        {org?.photos?.[1] ? <OrgPagePhotos {...org} /> : null}
                    </ScrollView>
                </View>
            )}
            <BackButton onPress={onPress} />
        </View>
    );
};

export default OrgPage;
