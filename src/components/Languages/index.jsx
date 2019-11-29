import React from "react";
import { SelectField } from 'react-md';
import { useIntl, changeLocale } from "gatsby-plugin-intl";
import { languages } from "../../data/site-data";

import "./Languages.scss";

export default () => {
    const intl = useIntl();

    const handleLanguageChange = (value) => {
        changeLocale(value);
    }

    return <div id="languagesSelector">
                <SelectField
                    id="languageSelector"
                    key="language"
                    dropdownIcon={<i class="fas fa-globe-americas language-icon"></i>}
                    placeholder="Objects button"
                    className="md-cell language-selector"
                    menuItems={languages}
                    onChange={handleLanguageChange}
                    defaultValue={intl.locale}
                    position={SelectField.Positions.BELOW}
                />
            </div>
}