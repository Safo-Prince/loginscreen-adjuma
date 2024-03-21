import React, { FormEvent, useState } from "react";
import backgroundImage from "../assets/sign-in.png";
import logo from "../assets/logo.png";
import axios from "axios";

const Home = () => {
  const [buttonText, setButtonText] = useState("Sign in");

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  console.log(credentials);
  const onSubmit = (e: FormEvent) => {
    setButtonText("signing in...");
    e.preventDefault();
    axios
      .post("https://molidom.adjuma.io/api/v1/auth/signin-user", {
        email: credentials.username,
        password: credentials.password,
      })
      .then(() => {
        setButtonText("Sign in");
        alert("succesfully logged in");
      })
      .catch((error) => {
        setButtonText("Sign in");
        alert(error);
      });
  };

  return (
    <div className=" bg-my bg-cover h-screen w-screen relative flex items-center justify-center gap-x-14">
      <div className="bg-stone-700/20 space-y-3 p-6 rounded-md">
        <h1 className="text-white font-bold text-3xl px-4 bg-transparent">
          Kuku's hair
        </h1>
        <p className="text-white">
          This is the ofiicial page to mamage kuku's orders,respond to bookings
          and more Login to continue
        </p>
      </div>

      <div className=" z-2  bg-white rounded-md border pt-10 pb-16 px-20  h-[40%] w-[25%] flex flex-col items-center justify-center   ">
        <img src={logo} className="w-44 mx-auto pb-5 " />
        <p className="text-3xl font bold text-center ">Welcome Back</p>
        <p className="text-sm text-center  text-gray-600">
          Sign in to your account
        </p>
        <form className="space-y-6  mt-10   w-full " onSubmit={onSubmit}>
          <div>
            <label className="block">username</label>
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              className="px-2 py-1.5 block w-full"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block ">Password</label>
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              type="password"
              className="px-2 py-1.5 block w-full"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex justify-between gap-x-6 ">
            <div className="flex gap-x-1">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p className="text-pink-600">forgot password</p>
          </div>
          <button
            type="submit"
            className="px-4 py-2 w-full bg-pink-600 mt-3 text-white"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
