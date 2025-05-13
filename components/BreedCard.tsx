import { getDarkTypeIcon } from "@/lib/utils";
import { Link } from "expo-router";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

const BreedCard = ({ name }: { name: string }) => {
    const icon = getDarkTypeIcon(name);

    return (
        <Link href={`/breeds/${name.toLowerCase()}`} asChild>
            <TouchableOpacity className="flex-row justify-center w-40 h-full bg-primary rounded-full py-2 mt-2">
                <Image
                    source={icon}
                    className="w-20 h-16"
                    resizeMode="contain"
                />
                {/* <Text className="text-4xl text-secondary my-auto font-semibold">
                    {name}
                </Text> */}
            </TouchableOpacity>
        </Link>
    );
};

export default BreedCard;
