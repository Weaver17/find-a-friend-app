import { useEffect, useState } from "react";

export const useFetch = (
    fetchFunction: () => Promise<Friend[]>,
    autoFetch = true
) => {
    const [data, setData] = useState<Friend[] | null>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetchFunction();
            setData(res);
        } catch (e) {
            setError(
                e instanceof Error ? e : new Error("Something went wrong")
            );
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
        setPage(1);
        setTotalPages(1);
    };

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []);

    return {
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
        refetch: fetchData,
        reset,
        page,
        setPage,
        totalPages,
        setTotalPages,
    };
};
