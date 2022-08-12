/* eslint-disable no-console */
import React, { useState } from 'react';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useRouter } from 'next/router';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import auth from '@/utils/firebase';

import { useAuth } from '../components/Auth/authContext';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const loginFC = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signupFC = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const [loginEmail, setLoginEmail] = useState('');
  // const [loginPassword, setLoginPassword] = useState('');
  // const { setTimeActive } = useAuthValue();

  // const [registerEmail, setRegisterEmail] = useState('');
  // const [registerPassword, setRegisterPassword] = useState('');
  // const [registerName, setRegisterName] = useState('');

  // const [error, setError] = useState('');

  // const authentication = getAuth();

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  //   .then(() => {
  //     if (!auth.currentUser?.emailVerified) {
  //       sendEmailVerification(auth.currentUser)
  //         .then(() => {
  //           setTimeActive(true);
  //           // navigate('/');
  //         })
  //         // eslint-disable-next-line no-alert
  //         .catch((err) => alert(err.message));
  //     } else {
  //       // navigate('/');
  //     }

  //   const user = new {
  //     Username: email,
  //     Pool: UserPool,
  //   }();

  //   const authDetails = new AuthenticationDetails({
  //     Username: email,
  //     Password: password,
  //   });
  //   // Parameters needed to login
  //   user.authenticateUser(authDetails, {
  //     onSuccess: (data) => {
  //       console.log('onSuccess: ', data);
  //     },
  //     onFailure: (err) => {
  //       console.error('onFailure: ', err);
  //       setError(err.message);
  //     },
  //     newPasswordRequired: (data) => {
  //       console.log('newPasswordRequired: ', data);
  //     },
  //   });
  // };

  // e.preventDefault();
  // signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  //   .then(() => {
  //     if (!auth.currentUser?.emailVerified) {
  //       sendEmailVerification(auth.currentUser)
  //         .then(() => {
  //           setTimeActive(true);
  //           // navigate('/');
  //         })
  //         // eslint-disable-next-line no-alert
  //         .catch((err) => alert(err.message));
  //     } else {
  //       // navigate('/');
  //     }
  //   })
  //   .catch((err) => setError(err.message));

  // Login form output
  const LoginForm = () => {
    const { user } = useAuth();
    const [data, setData] = useState({
      email: '',
      password: '',
    });

    const handleLogin = async (e: any) => {
      e.preventDefault();

      console.log(user);
      try {
        await loginFC(data.email, data.password);
        router.push('/');
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <div className="flex w-full max-w-4xl flex-col items-center rounded-2xl bg-white shadow-2xl transition duration-1000 ease-out md:w-1/3">
        <h2 className="p-3 text-3xl font-bold text-green-700">Lifecycle</h2>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-blue-400"></div>
        <h3 className="pt-2 text-xl font-semibold text-blue-400">Sign In!</h3>

        {/* Inputs */}
        <form onSubmit={handleLogin} name="LoginForm">
          <div className="flex flex-col items-center justify-center">
            {/* To Do Error popup message */}
            {/* {error && <div className=" mb-5 bg-green-500 p-3  ">{error}</div>} */}

            <input
              type="email"
              value={data.email}
              required
              className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
              placeholder="Email Address"
              // setLoginEmail={setLoginEmail}
              onChange={(e: any) => setData({ ...data, email: e.target.value })}
            ></input>
            <input
              type="password"
              value={data.password}
              required
              className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
              placeholder="Password"
              // setLoginPassword={setLoginPassword}
              onChange={(e: any) =>
                setData({ ...data, password: e.target.value })
              }
            ></input>
            <button
              className="m-2 w-2/5 rounded-2xl bg-green-400 px-4 py-2 text-white shadow-md transition duration-200 ease-in hover:bg-white hover:text-blue-400"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
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

  // Singup form register form output.
  const SignUpForm = () => {
    const { user } = useAuth();
    console.log(user);

    const [data, setData] = useState({
      // username: '',
      email: '',
      password: '',
      // avatar: '',
    });

    const handleSignup = async (e: any) => {
      e.preventDefault();

      try {
        await signupFC(
          // data.username,
          data.email,
          data.password
          // data.avatar
        );
        router.push('/login');
      } catch (err) {
        console.log(err);
      }
      console.log(data);
    };
    return (
      <div className="flex w-full max-w-4xl flex-col  items-center rounded-2xl bg-blue-400  text-white shadow-2xl transition duration-1000 ease-in md:w-1/3">
        <h2 className="p-3 text-3xl font-bold text-white">Lifecycle</h2>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-white"></div>
        <h3 className="pt-2 text-xl font-semibold text-white">
          Create Account!
        </h3>

        {/* Inputs */}
        <form onSubmit={handleSignup} name="SignUpForm">
          <div className="mt-2 flex flex-col items-center justify-center">
            {/* <input
              type="username"
              className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
              placeholder="username"
              onChange={(e: any) =>
                setData({ ...data, username: e.target.value })
              }
            ></input> */}
            <input
              value={data.email}
              type="email"
              required
              className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
              placeholder="Enter Email"
              onChange={(e: any) => setData({ ...data, email: e.target.value })}
            ></input>
            <input
              type="password"
              value={data.password}
              className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
              placeholder="Enter a Password"
              required
              onChange={(e: any) =>
                setData({ ...data, password: e.target.value })
              }
            ></input>
            {/* <input
              type="avatar"
              className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-1 focus:border-green-400 focus:shadow-md focus:outline-none focus:ring-0 md:w-full"
              placeholder="Avatar URL"
              onChange={(e: any) =>
                setData({ ...data, avatar: e.target.value })
              }
            ></input> */}
            <button
              type="submit"
              className="m-4 w-3/5 rounded-2xl bg-white px-4 py-2 text-blue-400 shadow-md transition duration-200 ease-in hover:bg-green-400 hover:text-white"
            >
              Sign Up
            </button>
          </div>
        </form>
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

  // Seeing if the user has an account or not by asking.
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
