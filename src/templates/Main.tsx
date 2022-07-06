import { ReactNode } from 'react';

import Link from 'next/link';

import { Section } from '@/layout/Section';
import { AppConfig } from '@/utils/AppConfig';

import { NavbarTwoColumns } from '../components/NavbarTwoColumns';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  logo: 'Lifecycle';
};

// NAVBAR
const Main = (props: IMainProps) => (
  <div className="w-full bg-white px-1 text-green-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      {/* <div className="border-b border-gray-300">  */}
      {/* <div className="pt-16 pb-8">
        <div className="text-3xl font-bold text-gray-900">
          {AppConfig.title}
        </div>
        <div className="text-xl">{AppConfig.description}</div>
      </div> */}
      <div>
        <Section yPadding="py-6">
          <NavbarTwoColumns logo="Lifecycle">
            <li className="mt-0">
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/about">
                <a>About </a>
              </Link>
            </li>
            <li className="mr-5">
              <Link href="/login">
                <a>Join Us</a>
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
      </div>
      {/* </div> */}

      {/* Body of the App */}

      <div className=" inset-full">{props.children}</div>

      {/* FOOTER  */}
      <div>
        <div className=" justify-center text-center">
          {props.logo}

          <nav>
            <ul className=" mt-5 flex flex-row justify-center text-base  text-green-800">
              <li className="mx-4">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="mx-4">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className="mx-4">
                <Link href="/login">
                  <a>Join Us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" border-green-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Created with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          by the Lifecycle team.
        </div>
      </div>
    </div>
  </div>
);

export { Main };
