import { Text, View } from "react-native";

const TabIcon = ({ focused, title }: any) => {
    if (focused) {
        return (
            <View className="flex flex-row w-full min-w-[200px] flex-1 min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden">
                <Text className="text-secondary text-xl font-semibold underline underline-offset-8 ">
                    {title}
                </Text>
            </View>
        );
    }

    return (
        <View className="size-full w-full min-w-[200px] justify-center items-center mt-4 rounded-full">
            <Text className="text-secondary text-xl font-semibold">
                {title}
            </Text>
        </View>
    );
};

export default TabIcon;
