import { fetchAccessKey } from "./api";

export const PETFINDER_URL = process.env.EXPO_PUBLIC_BASE_URL;
const CLIENT_ID = process.env.EXPO_PUBLIC_CLIENT_ID;
const CLIENT_API_KEY = process.env.EXPO_PUBLIC_CLIENT_API_KEY;

let accessKey: string | null = null;

export const searchAnimals = async (
    filters: Record<string, string>,
    page: number = 1
) => {
    try {
        const accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        const queryParams = new URLSearchParams({
            ...filters,
            page: page.toString(),
        });

        const res = await fetch(`${PETFINDER_URL}/animals?${queryParams}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessKey}`,
            },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch animals: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const searchAllAnimals = async (page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        // console.log(accessKey);

        const res = await fetch(`${PETFINDER_URL}/animals?page=${page}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessKey}`,
            },
        });

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all animals", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const searchBreeds = async (breed: string, page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        // console.log(accessKey);

        const res = await fetch(
            `${PETFINDER_URL}/animals?breed=${breed}page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessKey}`,
                },
            }
        );

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all animals", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const searchTypes = async (type: string, page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        // console.log(accessKey);

        const res = await fetch(
            `${PETFINDER_URL}/animals?type=${type}page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessKey}`,
                },
            }
        );

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all animals", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const searchSize = async (size: string, page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        // console.log(accessKey);

        const res = await fetch(
            `${PETFINDER_URL}/animals?size=${size}page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessKey}`,
                },
            }
        );

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all animals", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const searchGender = async (gender: string, page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        // console.log(accessKey);

        const res = await fetch(
            `${PETFINDER_URL}/animals?gender=${gender}page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessKey}`,
                },
            }
        );

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all animals", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const searchAge = async (age: string, page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        // console.log(accessKey);

        const res = await fetch(
            `${PETFINDER_URL}/animals?age=${age}page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessKey}`,
                },
            }
        );

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all animals", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const searchColor = async (color: string, page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        // console.log(accessKey);

        const res = await fetch(
            `${PETFINDER_URL}/animals?color=${color}page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessKey}`,
                },
            }
        );

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all animals", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const searchCoat = async (coat: string, page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        // console.log(accessKey);

        const res = await fetch(
            `${PETFINDER_URL}/animals?coat=${coat}page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessKey}`,
                },
            }
        );

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all animals", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const searchStatus = async (status: string, page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        // console.log(accessKey);

        const res = await fetch(
            `${PETFINDER_URL}/animals?status=${status}page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessKey}`,
                },
            }
        );

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all animals", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const searchName = async (name: string, page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        // console.log(accessKey);

        const res = await fetch(
            `${PETFINDER_URL}/animals?name=${name}page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessKey}`,
                },
            }
        );

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all animals", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const searchOrg = async (org: string, page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        // console.log(accessKey);

        const res = await fetch(
            `${PETFINDER_URL}/animals?organization=${org}page=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessKey}`,
                },
            }
        );

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all animals", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};
