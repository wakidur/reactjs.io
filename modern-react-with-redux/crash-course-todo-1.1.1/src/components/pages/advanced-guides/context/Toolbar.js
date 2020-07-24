import React from 'react';
import PropTypes from 'prop-types';
import ThemedButton from './themed-button';

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}

Toolbar.propTypes = {
    changeTheme: PropTypes.string
}

export default Toolbar


