import React from "react";
import { Text, View } from "react-native";

const OrgPageAddress = ({ phone, address }: Orginization) => {
    return (
        <View className="gap-2">
            {phone ? (
                <Text className="text-xl text-dark-200">{phone}</Text>
            ) : null}
            <View className="justify-center mx-auto">
                <Text className=" text-xl text-dark-200">
                    {address?.address1 ? `${address?.address1 ?? ""}` : null}

                    {address?.address2 ? `${address?.address2 ?? ""}` : null}
                </Text>
                <Text className="text-xl text-dark-200">{`${address?.city}, ${address?.state}. ${address?.country}. ${address?.postcode}`}</Text>
            </View>
        </View>
    );
};

export default OrgPageAddress;
