// Setup fetch config
export const PETFINDER_URL = process.env.EXPO_PUBLIC_BASE_URL;
const CLIENT_ID = process.env.EXPO_PUBLIC_CLIENT_ID;
const CLIENT_API_KEY = process.env.EXPO_PUBLIC_CLIENT_API_KEY;

// figure out a way to request an access key, and use it for requests
const fetchAccessKey = async (clientId: string, clientSecret: string) => {
    try {
        const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;

        const res = await fetch(`${PETFINDER_URL}/oauth2/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: body,
        });

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Error in fetching access key", res.statusText);
        }

        const data = await res.json();

        return data.access_token;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

let accessKey: string | null = null;

// setup get all animals by latest date
export const getAllAnimals = async (page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        console.log(accessKey);

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

// get all animal types
export const getAnimalTypes = async () => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        const res = await fetch(`${PETFINDER_URL}/types`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessKey}`,
            },
        });

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all types", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// get all organizations
export const getAllOrganizations = async (page: number = 1) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        const res = await fetch(`${PETFINDER_URL}/organizations?page=${page}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessKey}`,
            },
        });

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all orgs", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// get single org
export const getSingleOrg = async (orgId: string) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        const res = await fetch(`${PETFINDER_URL}/organizations/${orgId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessKey}`,
            },
        });

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch all orgs", res.statusText);
        }

        const data = await res.json();

        return data.organization;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// get animals from single org
export const getAnimalsFromSingleOrg = async (
    orgId: string,
    page: number = 1
) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        const res = await fetch(
            `${PETFINDER_URL}/animals?organization=${orgId}&page=${page}`,
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
            throw new Error("Failed to fetch animal type", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// get single animal type
export const getSingleAnimalType = async (animalType: string) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        const res = await fetch(`${PETFINDER_URL}/types/${animalType}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessKey}`,
            },
        });

        if (!res.ok) {
            // @ts-ignore
            throw new Error("Failed to fetch animal type", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// get animals by single type
export const getAnimalsBySingleType = async (
    animalType: string,
    pageNum: number = 1
) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        const res = await fetch(
            `${PETFINDER_URL}/animals?type=${animalType}&page=${pageNum}`,
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
            throw new Error("Failed to fetch animals by type", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// get animal type all breeds
export const getAnimalTypeBreeds = async (animalType: string) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        const res = await fetch(`${PETFINDER_URL}/types/${animalType}/breeds`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessKey}`,
            },
        });

        if (!res.ok) {
            // @ts-ignore
            throw new Error(
                "Failed to fetch all breeds by type",
                // @ts-ignore
                res.statusText
            );
        }

        const data = await res.json();

        return data.breeds;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// get specific animal type breed
export const getSpecificAnimalTypeBreed = async (
    animalType: string,
    breed: string,
    page: number = 1
) => {
    try {
        accessKey = await fetchAccessKey(CLIENT_ID!, CLIENT_API_KEY!);

        if (!accessKey) {
            throw new Error("No access key");
        }

        const res = await fetch(
            `${PETFINDER_URL}/animals?type=${animalType}&breed=${breed}&page=${page}`,
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
            throw new Error("Failed to fetch 1 breed by type", res.statusText);
        }

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};
