import React, { Component } from "react";
import { TextField } from 'react-md';
import "./ContactForm.scss";

class ContactForm extends Component {
    render() {
        return (
            <div className="contact-container mobile-fix">
                <div className="contact-wrapper md-cell--center">
                    <div className="md-grid md-cell--12">
                        <h3>Contact</h3>
                        <div id="form">                        
                            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                <input type="hidden" name="form-name" value="contact" />
                                <div className="md-grid">
                                    <TextField
                                        id="name"
                                        label="Name"
                                        lineDirection="center"
                                        className="md-cell--12 md-cell--bottom"
                                        />
                                    <TextField
                                        id="email"
                                        label="Email"
                                        lineDirection="center"
                                        className="md-cell--12 md-cell--bottom"
                                        type="email"
                                        />
                                    <TextField
                                        id="message"
                                        label="Message"
                                        lineDirection="center"
                                        rows={5}
                                        className="md-cell--12 md-cell--bottom"
                                        />
                                    </div>
                                <div data-netlify-recaptcha="true"></div>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;