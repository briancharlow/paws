// pages/signup.js
"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const texts = [
  "Welcome to Paws.com! Join our community of pet lovers and help your furry friends find their perfect companions."
];

// Validation schema
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignupPage = () => {
   const [currentTextIndex, setCurrentTextIndex] = useState(0);

   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
     }, 4000); // Change text every 4 seconds

     return () => clearInterval(interval); // Clear interval on component unmount
   }, []);

   return (
    <div className="p-8 min-h-screen flex items-center justify-between bg-light-lavender">
      <div className="flex-row items-center justify-between p-12 max-w-2xl ">
        <h1 className="text-5xl font-bold text-center text-reddish mb-8">Heaven for your furry friends!!</h1>
        <div className="mb-6">
          <p className="text-center text-5xl text-light-coral">
            {texts[currentTextIndex]}
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-light-purple mb-6">Create an Account</h2>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            // Implement signup logic here
          }}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
                <Field 
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-light-purple"
                />
                <ErrorMessage name="username" component="div" className="text-red-600 text-sm" />
              </div>
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
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
       <Link href="/login" className="text-light-purple hover:text-light-coral">Log In</Link>
        </p>
      </div>
    </div>
   );
};

export default SignupPage;
