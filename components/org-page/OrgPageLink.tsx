import { openWebsiteLink } from "@/lib/utils";
import { Text, TouchableOpacity } from "react-native";

type OrgPageLinkProps = {
    url: string;
    text: string;
};

const OrgPageLink = ({ url, text }: OrgPageLinkProps) => {
    const onPress = async () => {
        await openWebsiteLink(url);
    };

    return (
        <TouchableOpacity onPress={onPress} className="">
            <Text className=" text-xl text-dark-100 underline ">{text}</Text>
        </TouchableOpacity>
    );
};

export default OrgPageLink;
