import React, { useState, useEffect } from 'react';

const UseEffects = () => {
  const [incrementCount, setIncrementCount] = useState(0);
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${incrementCount} times`;
    console.log(`You clicked ${incrementCount} times`);

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // React would unsubscribe from our ChatAPI when the component unmounts,
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';

  return (
    <div>
      <p> You clickeddd ${incrementCount} times </p>
      <button onClick={() => setIncrementCount(incrementCount + 1)}>
        Click mev
      </button>
    </div>
  );
};

export default UseEffects;
