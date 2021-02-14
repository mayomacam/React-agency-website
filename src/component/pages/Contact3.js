import React, { Component } from 'react';
import image from '../assets/img/about/contact.jpg';
import Header from '../common/Header';
import Fields from '../common/Fields';
import { withFormik } from 'formik';

const field = {
    section: [
        [
            { tag: '' ,name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name *', mess: 'Please enter your name.' },
            { tag: '', name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email *', mess: 'Please enter your email address.' },
            { tag: 'mb-md-0', name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your Phone *', mess: 'Please enter your phone number.' }
        ],
        [
            { tag: 'form-group-textarea mb-md-0', name: 'message', elementName: 'textarea', placeholder: 'Your Message *', mess: 'Type your message.' }
        ]
    ]
}

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
    submitForm = (e) => {
        e.preventDefault();
        alert("Form submitted.");
    }
    render() {
        return (
            <div>
                <Header
                    title="Contact us"
                    subtitle="A way to contact us"
                    showbutton={false}
                    images={image}
                />
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={ e => this.submitForm(e) }>
                            <div className="row align-items-stretch mb-5">
                                {field.section.map((section, sectionIndex) => {
                                    return (
                                        <div className="col-md-6" key={sectionIndex}>
                                            {section.map((field, index) => {
                                                console.log(field);
                                                return (
                                                    <Fields
                                                        {...field}
                                                        key={index}
                                                        value={this.state[field.name]}
                                                        onChange={e => this.setState({ [field.name]: e.target.value })}
                                                    />
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="text-center">
                                <div id="success"></div>
                                <button
                                    className="btn btn-primary btn-xl text-uppercase"
                                    id="sendMessageButton"
                                    type="submit"
                                >Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;