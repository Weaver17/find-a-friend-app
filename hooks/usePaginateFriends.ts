import { getAllAnimalsForPagination } from "@/lib/api";
import { useState } from "react";
import { useFetch } from "./useFetch";

export default function usePaginateAnimals() {
    const [animals, setAnimals] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const { data, loading, error } = useFetch(() =>
        getAllAnimalsForPagination(page)
    );

    const nextPage = async () => {
        setPage(data.current_page + 1);
        setAnimals(data.animals);
        setTotalPages(data.total_pages);
    };

    const prevPage = async () => {
        setPage(data.current_page - 1);
        setAnimals(data.animals);
        setTotalPages(data.total_pages);
    };

    return {
        animals,
        setAnimals,
        nextPage,
        prevPage,
        totalPages,
        page,
        loading,
        error,
    };
}
