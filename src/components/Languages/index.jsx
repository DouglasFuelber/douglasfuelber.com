import React from "react";
import { ListItem } from 'react-md';
import { changeLocale } from "gatsby-plugin-intl";
import { languages } from "../../../data/SiteConfig";

export default () => {
    const LangLinks = [];
    languages.forEach(language => (
        LangLinks.push(
            <a key={language.id} onClick={() => changeLocale(language.id)}>
                <ListItem
                    leftIcon={<i className="fas">{language.id}</i>}
                    primaryText={language.lang} />
            </a>
        )
    ));
    return LangLinks;
}

