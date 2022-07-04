import React from 'react';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

export default function about() {
  return (
    <Main
      meta={
        <Meta
          title="BUILDING TEAM"
          description="The Talented People Behind the Scenes"
        />
      }
      logo={'Lifecycle'}
    >
      <div>
        <div className="container mx-auto flex justify-center pt-16">
          <div>
            <p className="pb-3 text-center text-lg font-normal text-gray-500">
              BUILDING TEAM
            </p>
            <h1 className="mx-auto w-5/6 pb-6 text-center text-3xl font-extrabold text-gray-800 sm:w-4/6 xl:text-4xl">
              The Talented People Behind the Scenes
            </h1>
          </div>
        </div>
        <div className="w-full bg-green-100 px-10 pt-10">
          <div className="container mx-auto">
            <div className="flex-wrap items-center sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-around xl:justify-between">
              {/* Team Member Card */}
              <div className="relative mt-16 mb-32 sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
                <div className="overflow-hidden rounded bg-white shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="https://ronnycoste.com/rccolor.JPG"
                        alt="Ronny Coste photograph"
                        className="h-full w-full rounded-full object-cover shadow-md"
                      />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="pb-1 text-center text-3xl font-bold">
                      Ronny Coste
                    </div>
                    <p className="text-center text-sm text-gray-800">
                      Scrum Master | Lead Developer
                    </p>
                    <p className="pt-3 text-center text-base font-normal text-gray-600">
                      My role in the team was to be in charged of connecting the
                      google maps API to our website and making the search, and
                      location functions work. I used TypeScript, React, Node,
                      CSS, and countless of open source components.
                    </p>
                    <p> Senior, 2021. John Jay College</p>
                    <div className="flex w-full justify-center py-5">
                      <a href="https://github.com/lertsoft" className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            // className="feather  feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        </div>
                      </a>
                      <a href="https://twitter.com/costeronny" className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            // eslint-disable-next-line tailwindcss/no-custom-classname
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member Card */}
              <div className="relative mt-16 mb-32 sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
                <div className="overflow-hidden rounded bg-white shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="/recycling.png"
                        alt="Did not provide a photo | recycling photo as a placeholder."
                        className="h-full w-full rounded-full object-cover shadow-md"
                      />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="pb-1 text-center text-3xl font-bold">
                      Jaehoon Lim
                    </div>
                    <p className="text-center text-sm text-gray-800">
                      Amazon Cognito Developer
                    </p>
                    <p className="pt-3 text-center text-base font-normal text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed molestie erat et mi euismod placerat. Curabitur in
                      magna a nulla faucibus ullamcorper. Nam vel lorem at leo
                      ornare finibus ut ac odio. Donec facilisis eros id mauris
                      efficitur fringilla.
                    </p>
                    <p> Senior, 2021. John Jay College</p>
                  </div>
                </div>
              </div>

              {/* Team member card  */}
              <div className="relative mt-16 mb-32 sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
                <div className="overflow-hidden rounded bg-white shadow-md">
                  <div className="absolute -mt-20 flex w-full justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="/recycling.png"
                        alt="Did not provide a photo | recycling photo as a placeholder."
                        className="h-full w-full rounded-full object-cover shadow-md"
                      />
                    </div>
                  </div>
                  <div className="mt-16 px-6">
                    <div className="pb-1 text-center text-3xl font-bold">
                      Vince P
                    </div>
                    <p className="text-center text-sm text-gray-800">
                      Front-End Developer
                    </p>
                    <p className="pt-3 text-center text-base font-normal text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed molestie erat et mi euismod placerat. Curabitur in
                      magna a nulla faucibus ullamcorper. Nam vel lorem at leo
                      ornare finibus ut ac odio. Donec facilisis eros id mauris
                      efficitur fringilla.
                    </p>
                    <p>Junior, 2021. John Jay College</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member Card */}
            <div className="relative mt-16 mb-32 sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
              <div className="overflow-hidden rounded bg-white shadow-md">
                <div className="absolute -mt-20 flex w-full justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="/recycling.png"
                      alt="Did not provide a photo | recycling photo as a placeholder."
                      className="h-full w-full rounded-full object-cover shadow-md"
                    />
                  </div>
                </div>
                <div className="mt-16 px-6">
                  <div className="pb-1 text-center text-3xl font-bold">
                    Sopiko Svanidze
                  </div>
                  <p className="text-center text-sm text-gray-800">
                    Front-End Developer
                  </p>
                  <p className="pt-3 text-center text-base font-normal text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    molestie erat et mi euismod placerat. Curabitur in magna a
                    nulla faucibus ullamcorper. Nam vel lorem at leo ornare
                    finibus ut ac odio. Donec facilisis eros id mauris efficitur
                    fringilla.
                  </p>
                  <p>Junior, 2021. John Jay College</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
