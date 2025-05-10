import { Stack } from "expo-router";

import "./global.css";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(client)" options={{ headerShown: false }} />
            <Stack.Screen
                name="animals/animal/[id]"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="animals/org/[id]"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="breeds/[type]"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="breeds/[type]/[breed]"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="types/[type]"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="types/type/[type]"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="org/[id]" options={{ headerShown: false }} />
        </Stack>
    );
}
