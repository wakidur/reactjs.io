import React, { Component } from "react";
import PropTypes from "prop-types";

import { Field, reduxForm } from "redux-form";

export class StreamForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="invalid-feedback">{error}</div>;
    }
  }

  renderInput = ({ input, lable, meta }) => {
    console.log(meta);
    let validationClass = "form-control";
    if (meta.error && meta.touched) {
      validationClass += " is-invalid";
    } else if (meta.valid) {
      validationClass += " is-valid";
    }
    return (
      <div className="form-group">
        <label htmlFor={lable}>{lable}</label>
        <input
          type="text"
          className={validationClass}
          {...input}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          type="text"
          component={this.renderInput}
          lable="Enter Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          lable="Enter Description"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  // a unique name for the form
  form: "streamForm",
  validate,
})(StreamForm);
