import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios"


function LoginIn() {
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const handleSubmit = (e)=>{
      e.preventDefault()
      axios.post('http://localhost:8000/login', {email, password})
      .then(res => {
        console.log(result)
        if (res.data === "success") {
          Navigate('/home')
          }
    })
    .catch(err=> console.log(err.message))
  }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white py-10 px-5 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-5 md:block">
        <div className="logo w-64 mx-auto">
          <img
            src="https://thechildrengreenbook.net/assets/images/_logo.png"
            alt=""
          />
        </div>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
            autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-green-500 hover:text-green-600"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
            autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setPassword(e.target.value)}
           />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up{" "}
          </Link>
        </p>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a
          href="#"
          className="font-semibold leading-6 text-orange-500 hover:text-orange-600"
        >
          Start a 14 day free trial
        </a>
      </p>
    </div>
  );
}

export default LoginIn;
