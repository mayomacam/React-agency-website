import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/about/service.jpg';
import SingleService from './SingleService';


const serv = [
    {icon:"fa-shopping-cart", title:"E-Commerce", details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
    {icon:"fa-laptop", title:"Responsive Design", details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
    {icon:"fa-lock", title:"Web Security", details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
]

class Home extends Component {


    render() {
        return (
            <div >
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row text-center">
                            {serv.map((service, index) => {
                                return <SingleService {...service} key={index} />
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
