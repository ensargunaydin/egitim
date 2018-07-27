import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isNavOpen : false
        }
    }

    buttonClicked() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light justify-between-content">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse" style={{ display: this.state.isNavOpen ? 'block' : 'none' }}>
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link to="/" activeClassName="active" className="nav-link link">Anasayfa</Link>


                                </li>

                                <li className="nav-item">

                                    <Link to="/hakkimda" activeClassName="active" className="nav-link link">Hakkımda</Link>


                                </li>


                                <li className="nav-item">

                                    <Link to="/iletisim" activeClassName="active" className="nav-link link">İletişim</Link>

                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </header>
        )
    }
}


export default Header;