import React, { useState } from 'react';

import Image from 'next/image';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

// import { Facebook, GitHub, Google } from '@mui/icons-material';

export default function login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLogin, setIsLogin] = useState(true);

  // const [loginEmail, setLoginEmail] = useState('');
  // const [loginPassword, setLoginPassword] = useState('');

  // const [registerEmail, setRegisterEmail] = useState('');
  // const [registerPassword, setRegisterPassword] = useState('');
  // const [registerName, setRegisterName] = useState('');
  // const [registerAvatar, setRegisterAvatar] = useState('');

  const LoginForm = () => {
    return (
      <div className="flex w-full max-w-4xl flex-col items-center rounded-2xl bg-white shadow-2xl transition duration-1000 ease-out md:w-1/3">
        <h2 className="p-3 text-3xl font-bold text-green-700">Lifecycle</h2>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-blue-400"></div>
        <h3 className="pt-2 text-xl font-semibold text-blue-400">Sign In!</h3>
        <div className="m-4 flex items-center justify-center space-x-2">
          <div className="">
            <Image
              src="/recycling.png"
              alt="Facebook Login"
              width={30}
              height={30}
            />
          </div>
          <div className="">
            <Image
              src="/recycling.png"
              alt="Facebook Login"
              width={30}
              height={30}
            />
          </div>
          <div className="">
            <Image
              src="/recycling.png"
              alt="Facebook Login"
              width={30}
              height={30}
            />
          </div>
        </div>
        {/* Inputs */}
        <div className="flex flex-col items-center justify-center">
          <input
            type="email"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder="Password"
          ></input>
          <button className="m-2 w-2/5 rounded-2xl bg-green-400 px-4 py-2 text-white shadow-md transition duration-200 ease-in hover:bg-white hover:text-blue-400">
            Sign In
          </button>
        </div>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-blue-400"></div>
        <p className="mt-4 text-sm text-blue-400">Do not have an account?</p>
        <p
          className="mb-4 cursor-pointer text-sm font-medium text-green-600"
          onClick={() => setIsLogin(false)}
        >
          Create a New Account?
        </p>
      </div>
    );
  };

  const SignUpForm = () => {
    return (
      <div className="flex w-full max-w-4xl flex-col  items-center rounded-2xl bg-blue-400  text-white shadow-2xl transition duration-1000 ease-in md:w-1/3">
        <h2 className="p-3 text-3xl font-bold text-white">Lifecycle</h2>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-white"></div>
        <h3 className="pt-2 text-xl font-semibold text-white">
          Create Account!
        </h3>
        <div className="m-4 flex items-center justify-center space-x-2">
          <div className="border-white">
            <Image
              src="/recycling.png"
              alt="Facebook Login"
              className="text-white"
              width={30}
              height={30}
            />
          </div>
          <div className="border-white">
            <Image
              src="/recycling.png"
              className="text-white"
              alt="Amazon Login"
              width={30}
              height={30}
            />
          </div>
          <div className=" border-white">
            <Image
              src="/recycling.png"
              className="text-white"
              alt="Google Login"
              width={30}
              height={30}
            />
          </div>
        </div>
        {/* Inputs */}
        <div className="mt-2 flex flex-col items-center justify-center">
          <input
            type="password"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder="Name"
          ></input>
          <input
            type="email"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder="Password"
          ></input>
          <input
            type="password"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
            placeholder="Avatar URL"
          ></input>
          <button className="m-4 w-3/5 rounded-2xl bg-white px-4 py-2 text-blue-400 shadow-md transition duration-200 ease-in hover:bg-green-400 hover:text-white">
            Sign Up
          </button>
        </div>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-white"></div>
        <p className="mt-4 text-sm text-white">Already have an account?</p>
        <p
          className="mb-4 cursor-pointer text-sm font-medium text-white"
          onClick={() => setIsLogin(true)}
        >
          Sign In to your Account
        </p>
      </div>
    );
  };

  return (
    <Main
      meta={
        <Meta
          title="Lifecycle"
          description="The only recycling app that you will ever need!"
        />
      }
      logo={'Lifecycle'}
    >
      <div className="flex min-h-screen flex-col items-center justify-center md:py-2">
        <main className="flex w-full items-center px-2 md:px-20">
          <div className="hidden flex-1 flex-col space-y-1 md:inline-flex">
            <p className="text-6xl font-bold text-green-700">Lifecycle</p>
            <p className=" text-lg font-medium text-blue-400">
              The app with all your recycling needs!
            </p>
          </div>
          {isLogin ? <LoginForm /> : <SignUpForm />}
        </main>
      </div>
    </Main>
  );
}

export const getStaticProps = async () => ({
  props: {},
});
