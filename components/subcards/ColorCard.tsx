import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const ColorCard = ({
    text,
    type,
}: {
    text: string;
    type: string | string[];
}) => {
    return (
        <Link href={`/types/type/${type}&color=${text}`} asChild>
            <TouchableOpacity className="flex-row justify-center h-14 mx-auto py-2">
                <Text className="text-2xl text-dark-100 mx-0.5 my-auto font-semibold">
                    {text}
                </Text>
            </TouchableOpacity>
        </Link>
    );
};

export default ColorCard;
