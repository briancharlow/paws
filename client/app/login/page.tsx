// pages/login.js
"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Logging in with:', { email, password });
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
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-light-purple"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-light-purple"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-light-purple hover:bg-light-coral text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup">
            <a className="text-light-purple hover:text-light-coral">Sign Up</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
