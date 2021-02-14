import React, { Component } from 'react';
import Client from '../common/Client';
import TeamMember from '../common/TeamMember';
import image from '../assets/img/about/team.jpg';
import Header from '../common/Header';

const team = [
    {name: 'Kay Garland', role: 'Lead Designer', images: '../assets/img/team/1.jpg'},
    {name: 'Larry Parker', role: 'Lead Marketer', images: '../assets/img/team/2.jpg'},
    {name: 'Diana Petersen', role: 'Lead Developer', images: '../assets/img/team/3.jpg'}
]

const client = [
    { images: '../assets/img/logos/envato.jpg' },
    { images: '../assets/img/logos/designmodo.jpg' },
    { images: '../assets/img/logos/themeforest.jpg' },
    { images: '../assets/img/logos/creative-market.jpg' }
]

class Team extends Component {


    render() {
        return (
            <div >
                <section className="page-section bg-light" id="team">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {team.map((team, index) => {
                                return <TeamMember {...team} key={index} />
                            })}
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Clients</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="container">
                            <div className="row">
                                {client.map((client, index) => {
                                    return <Client {...client} key={index} />
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

export default Team;
