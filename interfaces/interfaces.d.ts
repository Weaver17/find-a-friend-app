interface Friend {
    id: number;
    orginization_id: string | null;
    url: string | null;
    type: string | null;
    species: string | null;
    breeds: {
        primary: string | null;
        secondary: string | null;
        mixed: boolean | null;
        unknown: boolean | null;
    };
    colors: {
        primary: string | null;
        secondary: string | null;
        tertiary: string | null;
    };
    age: string | null;
    gender: string | null;
    size: string | null;
    coat: string | null;
    attributes: {
        spayed_neutered: boolean | null;
        house_trained: boolean | null;
        declawed: boolean | null;
        special_needs: boolean | null;
        shots_current: boolean | null;
    };
    environment: {
        children: boolean | null;
        dogs: boolean | null;
        cats: boolean | null;
    };
    tags: string[] | null;
    name: string | null;
    description: string | null;
    organization_animal_id: string | null;
    photos: {
        small: string | null;
        medium: string | null;
        large: string | null;
        full: string | null;
    }[];
    primary_photo_cropped: {
        small: string | null;
        medium: string | null;
        large: string | null;
        full: string | null;
    } | null;
    videos:
        | {
              embed: string | null;
          }[]
        | null;
    status: string | null;
    status_changed_at: string | null;
    published_at: string | null;
    distance: number | null;
    contact: {
        email: string | null;
        phone: string | null;
        address: {
            address1: string | null;
            address2: string | null;
            city: string;
            state: string;
            postcode: string;
            country: string;
        };
    };
    _links: {
        self: {
            href: string | null;
        } | null;
        type: {
            href: string | null;
        } | null;
        organization: {
            href: string | null;
        } | null;
    };
}

interface AnimalType {
    name: string;
    coats: string[];
    colors: string[];
    genders: string[];
    _links: {
        self: {
            href: string;
        };
        breeds: {
            href: string;
        };
    };
}

interface Breeds {
    name: string;
    _links: {
        type: {
            href: string;
        };
    };
}

interface Orginization {
    id: string;
    name: string;
    email: string | null;
    phone: string | null;
    address: {
        address1: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        postcode: string | null;
        country: string | null;
    };
    hours: {
        monday: string | null;
        tuesday: string | null;
        wednesday: string | null;
        thursday: string | null;
        friday: string | null;
        saturday: string | null;
        sunday: string | null;
    };
    url: string | null;
    website: string | null;
    mission_statement: string | null;
    adoption: {
        policy: string | null;
        url: string | null;
    };
    social_media: {
        facebook: string | null;
        twitter: string | null;
        youtube: string | null;
        instagram: string | null;
        pinterest: string | null;
    };
    photos?:
        | {
              small: string | null;
              medium: string | null;
              large: string | null;
              full: string | null;
          }[]
        | null;
    distance: number | null;
}

interface SocialMedia {
    facebook: string | null;
    twitter: string | null;
    youtube: string | null;
    instagram: string | null;
    pinterest: string | null;
}
