import { getWhiteTypeIcon, slugify } from "@/lib/utils";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const TypeCard = ({ name }: { name: string }) => {
    const icon = getWhiteTypeIcon(name);

    const nameSlug = slugify(name);

    return (
        <Link href={`/types/${nameSlug}`} asChild>
            <TouchableOpacity className="flex-row gap-4 justify-center w-full h-20 bg-primary rounded-full py-2">
                <Image
                    source={icon}
                    className="w-20 h-16"
                    resizeMode="contain"
                />
                <Text className="text-4xl text-dark-200 my-auto font-semibold">
                    {name}
                </Text>
            </TouchableOpacity>
        </Link>
    );
};

export default TypeCard;
