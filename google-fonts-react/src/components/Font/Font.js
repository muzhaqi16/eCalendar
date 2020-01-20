import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Font.css';
class Font extends Component {
    render() {
        const { family, category } = this.props.value;
        const size = this.props.size;
        return (
            <div className="font-container" style={{ borderTopColor: this.props.color.foreground }}>
                <h1 className="font-family-name">{family}</h1>
                <style>
                    @import url({`https://fonts.googleapis.com/css?family=${family.replace(/ /g, '+')}`});
                </style>
                <p style={{ fontFamily: `${family}, ${category}`, fontSize: `${size}` }}>{this.props.text}</p>
            </div>
        )
    }
}
Font.defaultProps = {
    text: "Then came the night of the first falling star."
}
Font.propType = {
    family: PropTypes.string.isRequired,
    text: PropTypes.string
}
export default Font;