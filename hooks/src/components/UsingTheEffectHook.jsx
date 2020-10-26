import React, { useState, useEffect } from 'react';

const UsingTheEffectHook = () => {
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    return () => {};
  }, [document.title]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UsingTheEffectHook;
