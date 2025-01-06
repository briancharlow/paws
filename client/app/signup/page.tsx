// pages/signup.js
"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const texts = [
  "Welcome to Paws.com! Join our community of pet lovers and help your furry friends find their perfect companions.",
  "By signing up, you can:",
  " Connect with other pet owners in your area.",
  "• Find playdates and events for your pets.",
  "• Create a profile for your pet and showcase their personality.",
  "• Receive personalized recommendations based on your pet's traits.",
  "Your privacy is important to us. We will never share your information without your consent."
];

const Page = () => {
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
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
            <input 
              type="text"
              id="username"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-light-purple"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-light-purple"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-light-purple"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-light-purple hover:bg-light-coral text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-light-purple hover:text-light-coral">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Page;