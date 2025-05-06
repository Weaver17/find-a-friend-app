import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const OrgCard = ({ name }: { name: string }) => {
    return (
        <Link href={`/orgs/${name.toLowerCase()}`} asChild>
            <TouchableOpacity className="flex-row gap-4 justify-center w-full h-20 bg-primary rounded-full py-2">
                <Text
                    className="text-2xl text-secondary my-auto font-semibold"
                    numberOfLines={1}
                >
                    {name}
                </Text>
            </TouchableOpacity>
        </Link>
    );
};

export default OrgCard;
