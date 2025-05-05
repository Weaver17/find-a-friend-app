import { Stack } from "expo-router";

import "./global.css";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(client)" options={{ headerShown: false }} />
            <Stack.Screen
                name="animals/[id]"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="breeds/[breed]"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="orgs/[org]" options={{ headerShown: false }} />
            <Stack.Screen
                name="types/[type]"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="types/type/[type]"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}
