import React from 'react'
import PropTypes from 'prop-types'

function WarningBanner(props) {
    if (!props.warn) return null;
    return (
        <div className="warning">
            Warning!
        </div>
    )
}

WarningBanner.propTypes = {
    warn: PropTypes.bool,
}

export default WarningBanner

