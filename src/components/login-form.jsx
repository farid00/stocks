import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username"> Username </label>
        <Field name="username" className="form-control" component="input" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="password"> Password </label>
        <Field name="password" className="form-control" component="input" type="text" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};


export default reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);

