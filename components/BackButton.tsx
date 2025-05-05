import { Text, TouchableOpacity, View } from "react-native";

const BackButton = ({ onPress }: { onPress: () => void }) => {
    return (
        <View className="bg-dark-100 absolute m-0 bottom-0 self-center w-screen h-[70px] p-2">
            <TouchableOpacity
                onPress={onPress}
                className="bg-light-300 justify-center items-center rounded-full h-12"
            >
                <Text className="font-semibold text-dark-200">Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BackButton;
