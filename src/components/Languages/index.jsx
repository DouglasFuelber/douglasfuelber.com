import React from "react";
import { SelectField } from 'react-md';
import { useIntl, changeLocale } from "gatsby-plugin-intl";
import { languages } from "../../../data/SiteConfig";

export default () => {
    const intl = useIntl();
    return <SelectField
            id="select-field-default-value"
            label="Language"
            defaultValue={intl.locale}
            onChange={() => changeLocale(this.value())}
            menuItems={languages}
            itemLabel="label"
            itemValue="value"
            className="md-cell"
            position={SelectField.Positions.BELOW}
            
            />
}

