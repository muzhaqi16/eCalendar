import React, { Component } from 'react'

import './Header.css'

class Header extends Component {

    render() {

        return (
            <header>
                <h1>Google Fonts</h1>
                <nav>
                    <ul className="navigation-menu">
                        <li>Catalog</li>
                        <li>Featured</li>
                        <li>Articles</li>
                        <li>About</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
