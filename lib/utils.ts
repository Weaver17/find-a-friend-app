import { Linking } from "react-native";
import { darkIcons } from "./dark-icons";
import { icons } from "./icons";
import { whiteIcons } from "./white-icons";

export function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/[ ,&]+/g, "-") // Replace space, comma, ampersand with -
        .replace(/(^-+)|(-+$)/g, ""); // Trim leading/trailing dashes
}

export function deslugify(slug: string) {
    return slug
        .replace(/-+/g, ", ") // Replace one or more dashes with a space
        .trim(); // Clean leading/trailing spaces
}

export function extractPetfinderParams(url: string) {
    const params = new URL(url).searchParams;

    const allowedKeys = ["type", "gender", "coat", "color"];
    const extracted: Record<string, string> = {};

    for (const key of allowedKeys) {
        const value = params.get(key);
        if (value !== null) extracted[key] = value;
    }

    return extracted;
}

export const getAnimalTypeIcon = (animalType: string) => {
    let icon = icons.paw;

    switch (animalType) {
        case "Dog":
            icon = icons.dog;
            break;
        case "Cat":
            icon = icons.cat;
            break;
        case "Bird":
            icon = icons.bird;
            break;
        case "Rabbit":
            icon = icons.rabbit;
            break;
        case "Horse":
            icon = icons.horse;
            break;
        case "Small & Furry":
            icon = icons.fuzzy;
            break;
        case "Barnyard":
            icon = icons.barn;
            break;
        case "Scales, Fins & Other":
            icon = icons.scaley;
            break;
        case "Paw":
            icon = icons.paw;
            break;
    }

    return icon;
};

export const getWhiteTypeIcon = (animalType: string) => {
    let icon = icons.paw;

    switch (animalType) {
        case "Dog":
            icon = whiteIcons.white_dog;
            break;
        case "Cat":
            icon = whiteIcons.white_cat;
            break;
        case "Bird":
            icon = whiteIcons.white_bird;
            break;
        case "Rabbit":
            icon = whiteIcons.white_rabbit;
            break;
        case "Horse":
            icon = whiteIcons.white_horse;
            break;
        case "Small & Furry":
            icon = whiteIcons.white_fuzzy;
            break;
        case "Barnyard":
            icon = whiteIcons.white_barn;
            break;
        case "Scales, Fins & Other":
            icon = whiteIcons.white_scaley;
            break;
    }

    return icon;
};

export const getDarkTypeIcon = (animalType: string) => {
    let icon = icons.paw;

    switch (animalType) {
        case "Dog":
            icon = darkIcons.dark_dog;
            break;
        case "Cat":
            icon = darkIcons.dark_cat;
            break;
        case "Bird":
            icon = darkIcons.dark_bird;
            break;
        case "Rabbit":
            icon = darkIcons.dark_rabbit;
            break;
        case "Horse":
            icon = darkIcons.dark_horse;
            break;
        case "Small & Furry":
            icon = darkIcons.dark_fuzzy;
            break;
        case "Barnyard":
            icon = darkIcons.dark_barn;
            break;
        case "Scales, Fins & Other":
            icon = darkIcons.dark_scaley;
            break;
    }

    return icon;
};

export const getScientificName = (animalType: string) => {
    let scientificName = "N/A";

    switch (animalType) {
        case "Dog":
            scientificName = "Canis lupus familiaris";

            break;
        case "Cat":
            scientificName = "Felis catus";
            break;
        case "Bird":
            scientificName = "Aves";
            break;
        case "Rabbit":
            scientificName = "Oryctolagus cuniculus";
            break;
        case "Horse":
            scientificName = "Equus caballus";
            break;
    }

    return scientificName;
};

export const getSocialMediaIconsAndLinks = async (
    socialMedias: SocialMedia
) => {
    try {
        const facebookIcon = socialMedias.facebook ? icons.facebook : null;
        const instagramIcon = socialMedias.instagram ? icons.instagram : null;
        const pinteristIcon = socialMedias.pinterest ? icons.pinterest : null;
        const twitterIcon = socialMedias.twitter ? icons.twitter : null;
        const youtubeIcon = socialMedias.youtube ? icons.youtube : null;

        const facebookLink = socialMedias.facebook ?? null;
        const twitterLink = socialMedias.twitter ?? null;
        const instagramLink = socialMedias.instagram ?? null;
        const youtubeLink = socialMedias.youtube ?? null;
        const pinterestLink = socialMedias.pinterest ?? null;

        return {
            icons: [
                facebookIcon,
                instagramIcon,
                pinteristIcon,
                twitterIcon,
                youtubeIcon,
            ],
            links: [
                facebookLink,
                twitterLink,
                instagramLink,
                youtubeLink,
                pinterestLink,
            ],
        };
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const openWebsiteLink = async (url: string) => {
    try {
        if (!url) return;

        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                Linking.openURL(url);
            } else {
                console.warn(`Don't know how to open URL: ${url}`);
            }

            await Linking.openURL(url);
        } catch (e) {
            console.warn(`Failed to open ${url}`, e);
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const checkHours = async (hours: Hours) => {
    try {
        const mondayHours = hours.monday !== null ? hours.monday : "N/A";
        const tuesdayHours = hours.tuesday !== null ? hours.tuesday : "N/A";
        const wednesdayHours =
            hours.wednesday !== null ? hours.wednesday : "N/A";
        const thursdayHours = hours.thursday !== null ? hours.thursday : "N/A";
        const fridayHours = hours.friday !== null ? hours.friday : "N/A";
        const saturdayHours = hours.saturday !== null ? hours.saturday : "N/A";
        const sundayHours = hours.sunday !== null ? hours.sunday : "N/A";

        return {
            mondayHours,
            tuesdayHours,
            wednesdayHours,
            thursdayHours,
            fridayHours,
            saturdayHours,
            sundayHours,
        } as const;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export function formatDate(isoString: string): string {
    const date = new Date(isoString);

    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${month}/${day}/${year}`;
}
