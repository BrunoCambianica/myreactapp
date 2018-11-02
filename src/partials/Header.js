import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href=""> about </a>
                            </li><li>
                                <a href=""> users </a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;