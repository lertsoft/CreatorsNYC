import React from 'react';

// import App from 'next/app';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

import { FaqPage } from '../components/faq';
import Maps from '../components/maps/maps';

export default function Index() {
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
      <div className="inset-y-4 grid gap-10 bg-white">
        <></>
        <Maps />
        <FaqPage />
      </div>
    </Main>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
