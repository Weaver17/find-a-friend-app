import { openWebsiteLink } from "@/lib/utils";
import { Text, TouchableOpacity } from "react-native";

type OrgPageBtnProps = {
    url: string;
    text: string;
};

const OrgPageBtn = ({ url, text }: OrgPageBtnProps) => {
    const onPress = async () => {
        await openWebsiteLink(url);
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex-row gap-4 justify-center h-12 bg-primary rounded-full py-2 px-4"
        >
            <Text className="text-center text-xl text-secondary font-semibold my-auto">
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default OrgPageBtn;
