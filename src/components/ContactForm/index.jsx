import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import { TextField } from 'react-md';
import "./ContactForm.scss";

class ContactForm extends Component {
    render() {
        return (
            <div className="contact-container mobile-fix">
                <div className="contact-wrapper md-cell--center">
                    <div className="md-cell--12">
                        <h3>Contact</h3>
                        <p>If you want to contact me, leave me a message:</p>
                    </div>
                    <div id="form">                        
                        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="md-grid">
                                <TextField
                                    id="name"
                                    label="Name"
                                    className="md-cell--12 md-cell--bottom"
                                    required
                                    />
                                <TextField
                                    id="email"
                                    label="Email"
                                    className="md-cell--12 md-cell--bottom"
                                    type="email"
                                    required
                                    />
                                <TextField
                                    id="message"
                                    label="Message"
                                    rows={5}
                                    className="md-cell--12 md-cell--bottom"
                                    required
                                    />
                                <div className="md-cell--12">
                                    <div data-netlify-recaptcha="true"></div>
                                </div>
                                <div className="md-cell--12">
                                    <br/>
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