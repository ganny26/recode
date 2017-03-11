import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse bg-primary">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Pricing</a>
                </div>
            </nav>
        );
    }
}