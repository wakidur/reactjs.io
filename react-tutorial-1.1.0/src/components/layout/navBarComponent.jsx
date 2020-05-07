import React from 'react';
/**
 * The only constraint for a functional component is to accept props as an argument and return valid JSX.
 *
 * The key thing that makes this type of component different from a class component is the lack of state and lifecycle methods.
 * This is why functional components are also commonly referred to as stateless components.
 *
 * const Hello = ({name}) => <div> Hello {name} </div>
 *
 * This snippet is a contradiction to the most basic rule.
 * If you ever have a class component with only a render method – you should always make it a functional component.
 */

// Function component
// Stateless Functional Components
const NavBar = ({ totalCounters }) => {
  console.log('NavBar - Rendered');
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
