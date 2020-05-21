import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props) {
        super(props)
    
        this.state = {
             isShow: true,
        }
    }

    toggleShow = () => {
        this.setState(state => ({isShow: !state.isShow}));
    }
    
    render() {
        return (
            <div>
                <button onClick={this.toggleShow} type="button">Toggle Show</button>
            </div>
        )
    }
}
