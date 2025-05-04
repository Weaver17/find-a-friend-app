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
