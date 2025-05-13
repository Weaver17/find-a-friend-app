import React from "react";
import { TextInput, View } from "react-native";

type SearchBarProps = {
    placeholder: string;
    onPress: () => void;
    value: string;
    onChangeText: (text: string) => void;
};

const SearchBar = ({
    placeholder,
    onPress,
    value,
    onChangeText,
}: SearchBarProps) => {
    return (
        <View className="flex-row items-center bg-light-200 rounded-full px-5 py-4 border border-primary focus:border-dark-200">
            {/* <Image
                source={icons.search}
                className="size-5"
                resizeMode="contain"
                tintColor="#ab72e8"
            /> */}
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#114A04"
                className="flex-1 ml-2 text-dark-200"
            />
        </View>
    );
};

export default SearchBar;
