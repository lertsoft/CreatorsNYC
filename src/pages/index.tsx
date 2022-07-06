import React from 'react';

// import App from 'next/app';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

// eslint-disable-next-line import/extensions
import MyMaps from '../components/maps/maps';

export default function Index(): JSX.Element {
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
      {
        <div className="grid gap-20 bg-white">
          <div className=" display: inline-grid grid-rows-1 ">
            <MyMaps />
            {/* <FaqPage /> */}
          </div>
        </div>
      }
    </Main>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
