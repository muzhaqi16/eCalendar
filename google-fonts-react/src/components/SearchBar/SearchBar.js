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
    handleFontChange = e => {
        this.props.changeFont(e.target.value);
    }
    handleTextChange = e => {
        this.props.changeText(e.target.value)
    }
    render() {
        const { toggleTheme } = this.context;
        return (
            <form className="search-bar">
                <input type="text" id="search-input" placeholder="Search fonts" name="font" onChange={(e) => this.props.search(e.target.value)} />
                <input type="text" placeholder="Type Something" name="text" onChange={this.handleTextChange} />
                <select name="font-size" onChange={this.handleFontChange}>
                    <option value="20">20px</option>
                    <option value="24">24px</option>
                    <option value="32">32px</option>
                    <option value="40">40px</option>
                </select>
                <input type="radio" name="color" value="white" id="white" onChange={toggleTheme} />W
                <input type="radio" name="color" id="black" value="black" onChange={toggleTheme} />B
                <label>D</label>
                <label>R</label>

            </form>
        )
    }
}

export default SearchBar
