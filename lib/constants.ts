import { StyleSheet } from "react-native";

export const SEARCH_DROPDOWN_OPTIONS = [
    "Breed",
    "Type",
    "Size (small, medium, large, xlarge)",
    "Gender",
    "Age (baby, young, adult, senior)",
    "Color",
    "Coat",
    "Status",
    "Name",
    "Orginization",
];

export const dropdownStyles = StyleSheet.create({
    buttonStyle: {
        width: "75%",
        height: 50,
        marginHorizontal: "auto",
        backgroundColor: "#94DE82",
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 12,
    },
    buttonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        color: "#114A04",
        textAlign: "center",
    },

    menuStyle: {
        backgroundColor: "#D1F0CA",
        borderRadius: 8,
    },
    itemStyle: {
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
    },
    itemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        color: "#30A813",
        textAlign: "center",
    },
});
