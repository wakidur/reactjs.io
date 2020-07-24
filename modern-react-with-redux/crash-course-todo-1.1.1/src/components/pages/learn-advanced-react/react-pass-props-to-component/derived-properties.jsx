import React, { Component } from 'react';

export default class DerivedProperties extends Component {
  render() {
    // derived props (derived properties).
    const greeting = {
      subject: 'React',
      description: 'Your component library for ...',
    };
    return (
      <div>
        <Greeting greeting={greeting} />
      </div>
    );
  }
}

const Greeting = ({ greeting }) => (
  <div>
    <Title title={`Welcom to ${greeting.subject}`} />
    <Description description={`Welcom to ${greeting.description}`} />
  </div>
);

const Title = ({ title }) => <h1>{title}</h1>;

const Description = ({ description }) => <p>{description}</p>;

// React props with default value
const Greeting = ({ subject, description }) => {
  subject = subject || 'Earth';

  return (
    <div>
      <Title title={`Welcome to ${subject}`} />
      <Description description={description} />
    </div>
  );
};

//   You can also inline it as prop:
const Greeting = ({ subject, description }) => (
  <div>
    <Title title={`Welcome to ${subject || 'Earth'}`} />
    <Description description={description} />
  </div>
);

// For instance JavaScript's default parameter for the default value of the prop:
const Greeting = ({ subject = 'Earth', description }) => (
    <div>
      <Title title={`Welcome to ${subject}`} />
      <Description description={description} />
    </div>
  );

//   in case you are using React's PropTypes, it's is also possible to pass default prop values the React way:
const Greeting = ({ subject, description }) => (
    <div>
      <Title title={`Welcome to ${subject}`} />
      <Description description={description} />
    </div>
  );
   
  Greeting.defaultProps = {
    subject: 'Earth',
  };
