import { useRouter } from "expo-router";

export function useMyRouter() {
    const router = useRouter();

    const onPress = () => {
        router.back();
    };

    return { onPress };
}
