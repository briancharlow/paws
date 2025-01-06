// pages/login.js
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema for login
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (values) => {
    console.log(values);
    // Implement login logic here
  };

  return (
    <div className="p-8 min-h-screen flex items-center justify-between bg-light-lavender">
      <div className="flex-row items-center justify-between p-12 max-w-2xl ">
        <h1 className="text-5xl font-bold text-center text-reddish mb-8">Welcome Back to Paws.com!</h1>
        <p className="text-center text-5xl text-light-coral">
          Log in to continue connecting with your furry friends.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-light-purple mb-6">Log In</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-light-purple"
                />
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-light-purple"
                />
                <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
              </div>
              <button
                type="submit"
                className="w-full bg-light-purple hover:bg-light-coral text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Log In
              </button>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
              <Link href="/signup" className="text-light-purple hover:text-light-coral">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
