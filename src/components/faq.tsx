// npm install --save react-faq-component
import React, { useState } from 'react';

// import FAQ from "./FAQ";
import Faq from 'react-faq-component';

// Typescript types

// FAQ page template
export const FaqPage = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [rows, setRowsOption] = useState(null);
  const data = {
    title: 'Questions that you might get after finding this app',
    rows: [
      {
        title: 'What does this app do?',
        content: `LifeCycle is there to help the user recycle their garbage by providing an intuitive and easy to use user
         experience. The user can locate with ease recycling sites close to them. `,
      },
      {
        title: 'Where does this app gets it data?',
        content:
          "The recycling places data comes from openNYC, and OpenEARTH API's.",
      },
      {
        title: 'Who build this app?',
        content: `The App was build by a team of student and learners.
            The team is made of Ronny Coste, Jaehoon Lin, Vince P, Darius Southland, and Sopiko Svanidze. `,
      },
      {
        title: 'What are use cases for this aplication?',
        content: `The use cases are to simplify recycling to everybody.
            Ex. A controller battery just died, and you want to trash it. The person knows he/she shouldn't just put it in the trashcam so he/she check the app shearch for battery on the search bar and the maps display places where to take it too. `,
      },
      {
        title: 'Who is maintaining the app?',
        content: `Ronny Coste`,
      },
    ],
  };

  // Rendering of the FAQ template
  return (
    <>
      <div className="">
        <h2 className=" align-text-top text-lg font-bold" id="#FAQ">
          Frequently Ask Questions
        </h2>

        <div className=" text-lg ">
          <Faq data={data} getRows={rows} getRowOptions={setRowsOption} />
        </div>
      </div>
    </>
  );
};
