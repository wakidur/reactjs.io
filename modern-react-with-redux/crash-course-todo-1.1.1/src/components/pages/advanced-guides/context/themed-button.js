import { ThemeContext } from './theme-context';

import React, { Component } from 'react'

export default class ThemedButton extends Component {
    render() {
        const  props = this.props;
        const  theme = this.context;
        return ( <button {...props} sstyle={{backgroundColor: theme.background}}/>) 
    }
}

ThemedButton.contextType = ThemeContext;