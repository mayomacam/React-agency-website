import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div class="portfolio-modal modal fade" id={`portfolioModal${this.props.index}`} tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <div class="modal-body">
                                    <h2 class="text-uppercase">{this.props.name}</h2>
                                        <p class="item-intro text-muted">{this.props.subtitle}</p>
                                        <img class="img-fluid d-block mx-auto" src={this.props.images} alt="" />
                                        <p>{this.props.details}</p>
                                        <ul class="list-inline">
                                            <li>{this.props.dat}</li>
                                            <li>{this.props.client}</li>
                                            <li>{this.props.category}</li>
                                        </ul>
                                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                                            <i class="fas fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;