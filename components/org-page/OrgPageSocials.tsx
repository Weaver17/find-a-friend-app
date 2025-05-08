import { useOrgInfoFetch } from "@/hooks/useOrgInfoFetch";
import React from "react";
import { View } from "react-native";
import SocialLink from "../SocialLink";

const OrgPageSocials = (org: Orginization) => {
    const {
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
    } = useOrgInfoFetch(org);

    return (
        <View className="flex-row gap-4">
            {facebookIcon ? (
                <SocialLink link={facebookLink ?? ""} icon={facebookIcon} />
            ) : null}

            {instagramIcon ? (
                <SocialLink link={instagramLink ?? ""} icon={instagramIcon} />
            ) : null}

            {pinterestIcon ? (
                <SocialLink link={pinterestLink ?? ""} icon={pinterestIcon} />
            ) : null}

            {twitterIcon ? (
                <SocialLink link={twitterLink ?? ""} icon={twitterIcon} />
            ) : null}

            {youtubeIcon ? (
                <SocialLink link={youtubeLink ?? ""} icon={youtubeIcon} />
            ) : null}
        </View>
    );
};

export default OrgPageSocials;
