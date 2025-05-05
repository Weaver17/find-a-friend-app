import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const ColorCard = ({ text }: { text: string }) => {
    return (
        <Link href={`/orgs/${text.toLowerCase()}`} asChild>
            <TouchableOpacity className="flex-row justify-center h-14 mx-auto py-2">
                <Text className="text-2xl text-dark-100 mx-0.5 my-auto font-semibold">
                    {text}
                </Text>
            </TouchableOpacity>
        </Link>
    );
};

export default ColorCard;
