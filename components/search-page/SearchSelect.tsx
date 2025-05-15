import { dropdownStyles, SEARCH_DROPDOWN_OPTIONS } from "@/lib/constants";
import React from "react";
import { Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const SearchSelect = () => {
    return (
        <SelectDropdown
            data={SEARCH_DROPDOWN_OPTIONS}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
                return (
                    <View style={dropdownStyles.buttonStyle}>
                        <Text style={dropdownStyles.buttonTxtStyle}>
                            {selectedItem || "Breed"}
                        </Text>
                    </View>
                );
            }}
            renderItem={(item, index, isSelected) => {
                return (
                    <View
                        style={{
                            ...dropdownStyles.itemStyle,
                            ...(isSelected && {
                                backgroundColor: "#29541E",
                            }),
                        }}
                    >
                        <Text style={dropdownStyles.itemTxtStyle}>{item}</Text>
                    </View>
                );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={dropdownStyles.menuStyle}
        />
    );
};

export default SearchSelect;
