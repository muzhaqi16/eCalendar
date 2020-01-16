import React, { Component } from 'react'
import { ThemeContext } from '../../context/themeContext';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            font: "",
            text: "",
            fontSize: "",
        }
    }
    static contextType = ThemeContext;
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { toggleTheme } = this.context;

        return (
            <form className="search-bar">
                <input type="text" placeholder="Search fonts" name="font" onChange={(e) => this.props.search(e.target.value)} />
                <input type="text" placeholder="Type Something" name="text" onChange={this.handleChange} />
                <select name="font-size" onChange={this.handleChange}>
                    <option value="32">32px</option>
                    <option value="40">40px</option>
                    <option value="48">48px</option>
                </select>
                <input type="radio" name="color" value="white" id="white" onChange={toggleTheme} />White
                <input type="radio" name="color" id="black" value="black" onChange={toggleTheme} />Black
            </form>
        )
    }
}

export default SearchBar
