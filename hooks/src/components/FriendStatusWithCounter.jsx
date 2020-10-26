import React from 'react';
// you can use more than a single effect in a component
const FriendStatusWithCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [isOnline]);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  return <div>you can use more than a single effect in a component</div>;
};

export default FriendStatusWithCounter;
