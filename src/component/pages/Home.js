import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/about/header-bg.jpg';
import Service from '../common/Service';

class Home extends Component {


    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="It's Nice To Meet You"
                    buttonText="Tell Me More"
                    link="/#services"
                    showbutton={true}
                    images={image}
                />
                <Service />
            </div>
        );
    }
}

export default Home;
