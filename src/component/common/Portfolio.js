import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/about/portfolio.jpg';
import PortfolioItem from './PortfolioItem';
import Project from './Project';

const item = [
    {index:'1', title:'Threads', details:'Illustration', images:'assets/img/portfolio/01-thumbnail.jpg'},
    {index:'2', title:'Explore', details:'Graphic Design', images:'assets/img/portfolio/02-thumbnail.jpg'},
    {index:'3', title:'Finish', details:'Identity', images:'assets/img/portfolio/03-thumbnail.jpg'},
    {index:'4', title:'Lines', details:'Branding', images:'assets/img/portfolio/04-thumbnail.jpg'},
    {index:'5', title:'Southwest', details:'Website Design', images:'assets/img/portfolio/05-thumbnail.jpg'},
    {index:'6', title:'Window', details:'Photography', images:'assets/img/portfolio/06-thumbnail.jpg'}
]

const modal = [
    { name: 'Project Name', subtitle: 'Lorem ipsum dolor sit amet consectetur.', images: 'assets/img/portfolio/01-full.jpg', dat: 'Date: January 2020', client : 'Client: Threads', category: 'Category: Illustration', details: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', index: '1' },
    { name: 'Project Name', subtitle: 'Lorem ipsum dolor sit amet consectetur.', images: 'assets/img/portfolio/02-full.jpg', dat: 'Date: January 2020', client : 'Client: Explore', category: 'Category: Graphic Design', details: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', index: '2' },
    { name: 'Project Name', subtitle: 'Lorem ipsum dolor sit amet consectetur.', images: 'assets/img/portfolio/03-full.jpg', dat: 'Date: January 2020', client : 'Client: Finish', category: 'Category: Identity', details: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', index: '3' },
    { name: 'Project Name', subtitle: 'Lorem ipsum dolor sit amet consectetur.', images: 'assets/img/portfolio/04-full.jpg', dat: 'Date: January 2020', client : 'Client: Lines', category: 'Category: Branding', details: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', index: '4' },
    { name: 'Project Name', subtitle: 'Lorem ipsum dolor sit amet consectetur.', images: 'assets/img/portfolio/05-full.jpg', dat: 'Date: January 2020', client : 'Client: Southwest', category: 'Category: Website Design', details: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', index: '5' },
    { name: 'Project Name', subtitle: 'Lorem ipsum dolor sit amet consectetur.', images: 'assets/img/portfolio/06-full.jpg', dat: 'Date: January 2020', client : 'Client: Window', category: 'Category: Photography', details: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!', index: '6' }
]

class Portfolio extends Component {

    render() {
        return (
            <div>
                <Header
                    title="Portfolio"
                    subtitle="import Portfolio from website"
                    showbutton={false}
                    images={image}
                />
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {item.map((items, index) => {
                                return <PortfolioItem {...items} key={index} />
                            })}
                        </div>
                    </div>
                </section>
                {modal.map((modal, index) => {
                    return <Project {...modal} key={index} />
                })}
            </div>
        );
    }
}

export default Portfolio;