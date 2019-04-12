import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "react-md/lib/Buttons";
import config from "../../../data/SiteConfig";
import { TextField } from 'react-md';
import "./ContactForm.scss";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["Name"]) {
            formIsValid = false;
            errors["Name"] = "This field is required";
        }
        else {
            errors["Name"] = "";
        }

        //Email
        if (!fields["Email"]) {
            formIsValid = false;
            errors["Email"] = "This field is required";
        }
        else if (typeof fields["Email"] !== "undefined") {
            let lastAtPos = fields["Email"].lastIndexOf('@');
            let lastDotPos = fields["Email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["Email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["Email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["Email"] = "Email is not valid";
            }
        } else {
            errors["Email"] = "";
        }

        //Message
        if (!fields["Message"]) {
            formIsValid = false;
            errors["Message"] = "This field is required";
        } else {
            errors["Message"] = "";
        }

        //Recaptcha
        if (!fields["Recaptcha"]) {
            formIsValid = false;
            errors["Recaptcha"] = "This field is required";
        } else {
            errors["Recaptcha"] = "";
        }        

        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            e.target.submit();
        }
    }
    handleChange(field, e) {
        let fields = this.state.fields;        
        fields[field] = e;
        this.setState({ fields });      
    }
    render() {
        const recaptchaRef = React.createRef();
        return (
            <div className="contact-container mobile-fix">
                <div className="contact-wrapper md-cell--center">
                    <div className="md-cell--12">
                        <h3>Contact</h3>
                        <p>If you want to contact me, leave me a message:</p>
                    </div>
                    <div id="form">
                        <form action="/success" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="md-grid">

                                <TextField
                                    id="name"
                                    label="Name"
                                    name="Name"
                                    ref="Name"
                                    className="md-cell--12 md-cell--bottom"
                                    onChange={this.handleChange.bind(this, "Name")}
                                    value={this.state.fields["Name"]}
                                    required />
                                <div class="md-text-field-message-container md-full-width md-text--error">{this.state.errors["Name"]}</div>

                                <TextField
                                    id="email"
                                    label="Email"
                                    name="Email"
                                    className="md-cell--12 md-cell--bottom"
                                    type="email"
                                    onChange={this.handleChange.bind(this, "Email")}
                                    value={this.state.fields["Email"]}
                                    ref="Email"
                                    required />
                                <div class="md-text-field-message-container md-full-width md-text--error">{this.state.errors["Email"]}</div>

                                <TextField
                                    id="message"
                                    label="Message"
                                    name="Message"
                                    rows={5}
                                    className="md-cell--12 md-cell--bottom"
                                    onChange={this.handleChange.bind(this, "Message")}
                                    value={this.state.fields["Message"]}
                                    ref="Message"
                                    required />
                                <div class="md-text-field-message-container md-full-width md-text--error">{this.state.errors["Message"]}</div>

                                <div className="md-cell--6">
                                    <br />
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={config.recaptchaPublicKey}
                                        onChange={this.handleChange.bind(this, "Recaptcha")} />
                                    <div class="md-text-field-message-container md-full-width md-text--error">{this.state.errors["Recaptcha"]}</div>
                                    
                                </div>
                                <div className="md-cell--6">
                                    <br />
                                    <Button flat className="submit-button" type="submit">Send</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;