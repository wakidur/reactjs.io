import { ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class contextMain extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props) {
        super(props)
    
        this.state = {
             theme: themes.light
        }
    }
    toggleTheme = () => {
        this.setState(state => ({ theme: state.theme === themes.dark ? themes.light : themes.dark, }));
      };
    

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <Page>
            <ThemeContext.Provider value={this.state.theme}>
              <Toolbar changeTheme={this.toggleTheme} />
            </ThemeContext.Provider>
            <Section>
              <ThemedButton />
            </Section>
          </Page>
        )
    }
}
