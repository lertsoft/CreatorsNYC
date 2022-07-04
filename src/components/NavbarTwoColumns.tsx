import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div className="text-3xl font-bold text-gray-900">
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="first-child:mt-0 last-child:mr-5 navbar flex items-center text-xl font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { NavbarTwoColumns };
