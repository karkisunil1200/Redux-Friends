import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import {axiosWithAuth} from '../axiosAuth';

function FriendForm() {
  return (
    <div>
      <Form>
        <div className='form-group'>
          <label>Name</label>
          <Field className='form-control' placeholder='Enter Name' name='name' autoComplete='off' />
        </div>
        <div className='form-group'>
          <label>Age</label>
          <Field
            type='number'
            className='form-control'
            placeholder='age'
            name='age'
            autoComplete='off'
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <Field
            type='email'
            className='form-control'
            placeholder='email'
            name='email'
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
      name: '',
      age: '',
      email: ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),

    email: Yup.string().required()
  }),

  handleSubmit(values, formikBag) {
    const url = 'http://localhost:5000/api/friends';
    axiosWithAuth()
      .post(url, values)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(FriendForm);
