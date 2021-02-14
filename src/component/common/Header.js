import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Header extends Component {


    render() {
        return (
            <header className="masthead" style={{backgroundImage: `url(${this.props.images}`}}>
                <div className="container">
                    <div className="masthead-subheading">{this.props.title}</div>
                    <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
                    {(this.props.showbutton && this.props.link !== "/#services") &&
                        <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={this.props.link}>{this.props.buttonText}</Link>
                    }
                    {(this.props.showbutton && this.props.link === "/#services") &&
                        <HashLink className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={this.props.link}>{this.props.buttonText}</HashLink>
                    }
                </div>
            </header>
        );
    }
}

export default Header;
