import React from 'react';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

import { FaqPage } from '../components/faq';

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
      {
        <div className="grid gap-20 bg-white">
          <FaqPage />
        </div>
      }
    </Main>
  );
}
