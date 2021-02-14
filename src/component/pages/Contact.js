import React, { Component } from 'react';
import image from '../assets/img/about/contact.jpg';
import Header from '../common/Header';
import Fields from '../common/Fields';
import { withFormik } from 'formik';
import * as Yup from 'yup';

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
                        <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={ this.props.handleSubmit}>
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
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={this.props.errors[field.name]}
                                                    />
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="text-center">
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

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'please give your real name.').required('Please tell us your name.'),
        email: Yup.string().email('Please provide a valid email').required('Please give your email address.'),
        phone: Yup.string()
            .min(10, 'Please provide your 10 digit phone number.')
            .max(15, 'Your phone number is too long.')
            .required('Please give us your contact number.'),
        message: Yup.string().min(500, 'You need to provide us more detailed information').required('Please provide your message to us.')
    }),
    handleSubmit: (values, { setSubmitting }) => {
        alert("You have submitted form.", JSON.stringify(values));
    }
})(Contact);