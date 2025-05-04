import { getAnimalTypeIcon } from "@/lib/utils";
import { Image, Text, View } from "react-native";

const FriendCard = ({
    id,
    name,
    type,
    breeds,
    age,
    gender,
    size,
    photos,
    primary_photo_cropped,
}: Friend) => {
    const thumbnail = photos[0]?.small ?? "https://http.dog/404.jpg";

    // getIcon logic
    const typeIcon = getAnimalTypeIcon(type ?? "");

    return (
        <View className="bg-primary w-[190px] h-[220px] border-secondary border-2 rounded-lg overflow-hidden">
            {photos && photos.length > 0 ? (
                <Image
                    source={{ uri: thumbnail }}
                    className="w-full h-[65%] -mt-2"
                    resizeMode="contain"
                />
            ) : (
                <Image
                    source={{ uri: "https://http.dog/404.jpg" }}
                    className="w-full h-[65%] -mt-2"
                    resizeMode="contain"
                />
            )}
            <View className="justify-between h-[35%]">
                <View className="flex-row justify-between items-center mt-1 px-1">
                    <Text
                        className="text-light-100 text-2xl font-bold px-1 max-w-[92%]"
                        numberOfLines={1}
                    >
                        {name}
                    </Text>
                    <Image
                        source={typeIcon}
                        className="h-4 w-4 mr-2"
                        resizeMode="contain"
                    />
                </View>
                <View className="gap-4">
                    <Text className="px-2 text-dark-200" numberOfLines={2}>
                        {breeds.mixed
                            ? `${breeds.primary}` +
                              (breeds.secondary ? `, ${breeds.secondary}` : "")
                            : breeds.primary}
                    </Text>
                    <View className="flex-row justify-between px-1">
                        <Text className="text-dark-200">{age}</Text>
                        <Text className="text-dark-200">{gender}</Text>
                        <Text className="text-dark-200">{size}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default FriendCard;
