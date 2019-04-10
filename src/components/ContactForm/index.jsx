import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "react-md/lib/Buttons";
import config from "../../../data/SiteConfig";
import { TextField } from 'react-md';
import "./ContactForm.scss";

class ContactForm extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
     } 
     handleValidation(){
         let fields = this.state.fields;
         let errors = {};
         let formIsValid = true;
 
         //Name
         if(!fields["Name"]){
            formIsValid = false;
            errors["Name"] = "Cannot be empty";
         }
 
         if(typeof fields["Name"] !== "undefined"){
            if(!fields["Name"].match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["Name"] = "Only letters";
            }        
         }
 
         //Email
         if(!fields["Email"]){
            formIsValid = false;
            errors["Email"] = "Cannot be empty";
         }
 
         if(typeof fields["Email"] !== "undefined"){
            let lastAtPos = fields["Email"].lastIndexOf('@');
            let lastDotPos = fields["Email"].lastIndexOf('.');
 
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["Email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["Email"].length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["Email"] = "Email is not valid";
             }
        }  
 
        this.setState({errors: errors});
        return formIsValid;
    }
 
    handleSubmit(e){
         e.preventDefault();
 
         if(this.handleValidation()){
            alert("Form submitted");
         }else{
            alert("Form has errors.")
         }

        /*const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);*/
 
     } 
     handleChange(field, e){         
         let fields = this.state.fields;
         fields[field] = e.target.value;        
         this.setState({fields});
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
                        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
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
                                    required
                                    />
                                    <span style={{color: "red"}}>{this.state.errors["Name"]}</span>
                                <TextField
                                    id="email"
                                    label="Email"
                                    name="Email"
                                    className="md-cell--12 md-cell--bottom"
                                    type="email"
                                    onChange={this.handleChange.bind(this, "Email")}
                                    value={this.state.fields["Email"]}
                                    ref="Email"
                                    required
                                    />
                                    <span style={{color: "red"}}>{this.state.errors["Email"]}</span>
                                <TextField
                                    id="message"
                                    label="Message"
                                    name="Message"
                                    rows={5}
                                    className="md-cell--12 md-cell--bottom"
                                    required
                                    />
                                <div className="md-cell--6">
                                    <br/>
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={config.recaptchaPublicKey} />
                                </div>
                                <div className="md-cell--6">
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