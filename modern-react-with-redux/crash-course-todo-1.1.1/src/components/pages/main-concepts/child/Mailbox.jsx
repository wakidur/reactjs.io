import React from 'react';
import PropTypes from 'prop-types';

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h2>Hello!</h2>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
      <ul>
        {props.unreadMessages.map((item, i) => 
          <li key={i}>{item}</li>
        )}
      </ul>
    </div>
  );
}

Mailbox.propTypes = {
  unreadMessages: PropTypes.array.isRequired,
};

export default Mailbox;
