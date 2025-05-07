import { Image, Linking, TouchableOpacity } from "react-native";

const SocialLink = ({ icon, link }: { icon: never; link: string }) => {
    const openLink = async () => {
        try {
            if (!link) return;

            const supported = await Linking.canOpenURL(link);

            if (!supported) {
                console.log("Don't know how to open URI: " + link);
                return;
            }

            await Linking.openURL(link);
        } catch (e) {
            console.log(e);
            throw e;
        }
    };

    return (
        <TouchableOpacity onPress={openLink}>
            <Image source={icon} className="w-8 h-8" />
        </TouchableOpacity>
    );
};

export default SocialLink;
