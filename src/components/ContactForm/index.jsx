import React, { useState } from "react";
import { TextField } from 'react-md';
import Button from "react-md/lib/Buttons";
import { useIntl } from "gatsby-plugin-intl"
import ReCAPTCHA from "react-google-recaptcha";

import config from "../../data/site-data";

import "./ContactForm.scss";

export default () => {

    const intl = useIntl();

    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});

    const handleValidation = () => {
        let validationFields = fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!validationFields["Name"]) {
            formIsValid = false;
            errors["Name"] = intl.formatMessage({ id: "components.contactForm.nameRequired" });
        }
        else {
            errors["Name"] = "";
        }

        //Email
        if (!validationFields["Email"]) {
            formIsValid = false;
            errors["Email"] = intl.formatMessage({ id: "components.contactForm.emailRequired" });
        }
        else if (typeof validationFields["Email"] !== "undefined") {
            let lastAtPos = validationFields["Email"].lastIndexOf('@');
            let lastDotPos = validationFields["Email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && validationFields["Email"].indexOf('@@') == -1 && lastDotPos > 2 && (validationFields["Email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["Email"] = intl.formatMessage({ id: "components.contactForm.emailInvalid" });
            }
        } else {
            errors["Email"] = "";
        }

        //Message
        if (!validationFields["Message"]) {
            formIsValid = false;
            errors["Message"] = intl.formatMessage({ id: "components.contactForm.messageRequired" });
        } else {
            errors["Message"] = "";
        }

        //Recaptcha
        if (!validationFields["Recaptcha"]) {
            formIsValid = false;
            errors["Recaptcha"] = intl.formatMessage({ id: "components.contactForm.recaptchaRequired" });
        } else {
            errors["Recaptcha"] = "";
        }

        setErrors(errors);
        return formIsValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (handleValidation()) {
            e.target.submit();
        }
    }

    const handleChange = (field, e) => {
        let validationFields = fields;
        validationFields[field] = e;
        setFields(validationFields);
    }

    return (
        <div className="contact-container mobile-fix">
            <div className="contact-wrapper md-cell--center md-cell--10">
                <div className="md-cell--12">
                    <p>{intl.formatMessage({ id: "components.contactForm.sentence" })}</p>
                </div>
                <div id="form">
                    <form action={`/${intl.locale}/success/`} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="md-grid">

                            <TextField
                                id="name"
                                label={intl.formatMessage({ id: "components.contactForm.nameLabel" })}
                                name="Name"
                                className="md-cell--12 md-cell--bottom"
                                onChange={handleChange.bind(this, "Name")}
                                value={fields["Name"]}
                                required />
                            <div class="md-text-field-message-container md-full-width md-text--error">{errors["Name"]}</div>

                            <TextField
                                id="email"
                                label={intl.formatMessage({ id: "components.contactForm.emailLabel" })}
                                name="Email"
                                className="md-cell--12 md-cell--bottom"
                                type="email"
                                onChange={handleChange.bind(this, "Email")}
                                value={fields["Email"]}
                                required />
                            <div class="md-text-field-message-container md-full-width md-text--error">{errors["Email"]}</div>

                            <TextField
                                id="message"
                                label={intl.formatMessage({ id: "components.contactForm.messageLabel" })}
                                name="Message"
                                rows={5}
                                className="md-cell--12 md-cell--bottom"
                                onChange={handleChange.bind(this, "Message")}
                                value={fields["Message"]}
                                required />
                            <div class="md-text-field-message-container md-full-width md-text--error">{errors["Message"]}</div>

                            <div className="md-cell--6">
                                <br />
                                <ReCAPTCHA
                                    sitekey={config.recaptchaPublicKey}
                                    onChange={handleChange.bind(this, "Recaptcha")}
                                    hl={intl.locale}/>
                                <div class="md-text-field-message-container md-full-width md-text--error">{errors["Recaptcha"]}</div>

                            </div>
                            <div className="md-cell--6">
                                <br />
                                <Button flat className="submit-button secondary-button" type="submit">{intl.formatMessage({ id: "components.contactForm.buttonLabel" })}</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}