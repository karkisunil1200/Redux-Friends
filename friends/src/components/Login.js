import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Login() {
  return (
    <div>
      <Form>
        <div className='form-group'>
          <label>Username</label>
          <Field
            className='form-control'
            id='exampleInputEmail1'
            placeholder='Enter username'
            name='username'
            autoComplete='off'
            type='text'
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <Field
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Password'
            name='password'
            autoComplete='off'
          />
        </div>

        <button type='submit' className='btn btn-primary btn-lg'>
          Submit
        </button>
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(6)
      .required()
  }),
  handleSubmit(values, formikBag) {
    formikBag.resetForm();
    const url = 'http://localhost:5000/api/login';
    axios
      .post(url, values)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.payload);
        formikBag.props.history.push('/profile');
      })
      .catch(err => console.log(err));
  }
})(Login);
