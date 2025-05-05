import { useMemo } from "react";

export function useParams(url: string) {
    return useMemo(() => {
        try {
            const params = new URL(url).searchParams;
            const allowedKeys = ["type", "gender", "coat", "color"];
            const extracted: Record<string, string> = {};

            for (const key of allowedKeys) {
                const value = params.get(key);
                if (value !== null) extracted[key] = value;
            }

            return extracted;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }, [url]);
}
