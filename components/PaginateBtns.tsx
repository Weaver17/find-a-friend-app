import React from "react";
import { Text, View } from "react-native";
import PageButton from "./PageButton";

type PaginateBtnsProps = {
    page: number;
    totalPages: number;
    onNextPress: () => void;
    onPrevPress: () => void;
};

const PaginateBtns = ({
    page,
    totalPages,
    onNextPress,
    onPrevPress,
}: PaginateBtnsProps) => {
    return (
        <View className="mx-auto gap-6">
            <Text className="text-center text-dark-200 text-base font-semibold">
                Page: {page}
            </Text>
            {page === 1 && (
                <PageButton
                    text="Next Page"
                    color="#114A04"
                    onPress={onNextPress}
                />
            )}
            {page === totalPages && (
                <PageButton
                    text="Previous Page"
                    color="#114A04"
                    onPress={onPrevPress}
                />
            )}
            {page > 1 && page < totalPages && (
                <View className="flex-row gap-6">
                    <PageButton
                        text="Previous Page"
                        color="#114A04"
                        onPress={onPrevPress}
                    />
                    <PageButton
                        text="Next Page"
                        color="#114A04"
                        onPress={onNextPress}
                    />
                </View>
            )}
        </View>
    );
};

export default PaginateBtns;
