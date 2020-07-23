import React from 'react';
import PropTypes from 'prop-types';
import Amount from './Amount';

function CurrencyConverter({amount}) {
    const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
    const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;
    return (
        <Amount>
            {(amount) => (
            <div>
                <h1>My Currency Converter</h1>
                <Pound amount={amount} />
                <Euro amount={amount} />
            </div>
            )}
        </Amount>
    )
}

CurrencyConverter.propTypes = {
    amount: PropTypes.string,
}

export default CurrencyConverter


