import { getSocialMediaIconsAndLinks } from "@/lib/utils";
import { useEffect, useState } from "react";

export function useSocialIconFetch(socialMedias: SocialMedia) {
    const [facebookIcon, setFacebookIcon] = useState(null);
    const [twitterIcon, setTwitterIcon] = useState(null);
    const [instagramIcon, setInstagramIcon] = useState(null);
    const [youtubeIcon, setYoutubeIcon] = useState(null);
    const [pinterestIcon, setPinterestIcon] = useState(null);

    const [facebookLink, setFacebookLink] = useState<string | null>(null);
    const [twitterLink, setTwitterLink] = useState<string | null>(null);
    const [instagramLink, setInstagramLink] = useState<string | null>(null);
    const [youtubeLink, setYoutubeLink] = useState<string | null>(null);
    const [pinterestLink, setPinterestLink] = useState<string | null>(null);

    useEffect(() => {
        const fetchSocialIcons = async () => {
            await getSocialMediaIconsAndLinks(socialMedias).then((data) => {
                setFacebookIcon(data.icons[0]);
                setInstagramIcon(data.icons[1]);
                setPinterestIcon(data.icons[2]);
                setTwitterIcon(data.icons[3]);
                setYoutubeIcon(data.icons[4]);
                setFacebookLink(data.links[0]);
                setInstagramLink(data.links[1]);
                setPinterestLink(data.links[2]);
                setTwitterLink(data.links[3]);
                setYoutubeLink(data.links[4]);
            });
        };
        fetchSocialIcons();
    });

    return {
        facebookIcon,
        twitterIcon,
        instagramIcon,
        youtubeIcon,
        pinterestIcon,
        facebookLink,
        twitterLink,
        instagramLink,
        youtubeLink,
        pinterestLink,
    };
}
