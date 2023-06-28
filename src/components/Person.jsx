import { useState } from "react";

import { people } from "../data/models";
import { InitForm } from "./Forms";

export const Person = ({ id, personId }) => {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <div className="flex flex-row mx-20 items-center group w-fit">
      <div
        id={id}
        className="flex flex-col bg-lime-300 text-gray-700 rounded-md w-fit px-6 py-2 "
      >
        <div className="flex flex-row">
          <h1 className="text-md">{people[personId].name}</h1>
          <p>
            (
            {new Date().getFullYear() -
              new Date(people[personId].dob).getFullYear()}
            )
          </p>
        </div>
        <p className="text-sm">{people[personId].email}</p>
      </div>
      <button
        onClick={() => setSideMenu(!sideMenu)}
        className="text-2xl text-white bg-gradient-to-r from-lime-300 to-stone-500 w-8 rounded-full relative right-4 invisible group-hover:visible hover:ring-4 "
      >
        +
      </button>
      {sideMenu && <InitForm personId={personId} setSideMenu={setSideMenu} />}
    </div>
  );
};
