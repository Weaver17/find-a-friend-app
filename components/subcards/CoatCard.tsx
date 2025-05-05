import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const CoatCard = ({ text }: { text: string }) => {
    return (
        <Link href={`/orgs/${text.toLowerCase()}`} asChild>
            <TouchableOpacity className="flex-row justify-center w-32 h-14 mx-auto bg-light-300 rounded-full py-2">
                <Text className="text-2xl text-dark-100 my-auto font-semibold">
                    {text}
                </Text>
            </TouchableOpacity>
        </Link>
    );
};

export default CoatCard;
