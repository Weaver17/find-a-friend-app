import { darkIcons } from "./dark-icons";
import { icons } from "./icons";
import { whiteIcons } from "./white-icons";

export function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/[ ,&]+/g, "-") // Replace space, comma, ampersand with -
        .replace(/(^-+)|(-+$)/g, ""); // Trim leading/trailing dashes
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
