import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/img/about/contact.jpg';
import Header from '../common/Header';
import Fields from '../common/Fields';
import {withFormik} from 'formik';

const field = [
    { tag: '', id: 'name', type: 'text', placeholder: 'Your Name *', mess: 'Please enter your name.', value: `${this.state.name}`, change: `{ e => this.setState({ name: e.target.value }) }` },
    { tag: '', id: 'email', type: 'email', placeholder: 'Your Email *', mess: 'Please enter your email address.', value: `${this.state.email}`, change: `{ e => this.setState({ email: e.target.value }) }` },
    { tag: 'mb-md-0', id: 'phone', type: 'tel', placeholder: 'Your Phone *', mess: 'Please enter your phone number.', value: `${this.state.phone}`, change: `{ e => this.setState({ phone: e.target.value }) }` }

]

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
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="row align-items-stretch mb-5">
                                <div className="col-md-6">
                                    {field.map((field, index) => {
                                        return <Fields {...field} key={index} />
                                    })}
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-textarea mb-md-0">
                                        <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."
                                            value={this.state.message}
                                            onChange={e => this.setState({ message: e.target.value })}
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div id="success"></div>
                                <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;