import React from "react";
import { useIntl, changeLocale } from "gatsby-plugin-intl";
import { languages } from "../../data/site-data";

import "./LanguageSelector.scss";

export default () => {
    const intl = useIntl();

    return <div id="languagesSelector" >
        <i class="fas fa-globe-americas language-icon"></i>
        <div class="language-selector left-border-area light-border">
            {languages.map(
                language => <span className={`language-item ${intl.locale === language.value ? "active" : ""}`}
                    onClick={() => changeLocale(language.value)}>
                    {language.label}
                </span>
            )}
        </div>
    </div>
}