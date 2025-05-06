import { useRouter } from "expo-router";

export function useMyRouter() {
    const router = useRouter();

    const onPress = () => {
        router.back();
    };

    const NextPress = (pageNumber: number) => {
        let nextPage = pageNumber + 1;
        return nextPage;
    };

    const PrevPress = (pageNumber: number) => {
        let prevPage = pageNumber - 1;
        return prevPage;
    };

    return { onPress, NextPress, PrevPress };
}
