import { useState, useEffect } from "react";

import { Nodules } from "./components/Nodules";
import { famtree } from "./data/models";
import { Person } from "./components/Person";
import { InitForm } from "./components/Forms";
import { people, families } from "./data/models";
/*{
  famtree.map((f) => (
    <ul className="flex flex-col items-center">
      <Nodules tree={f.nexfams} famid={f.famid} links={f.links} />
    </ul>
  ));
}*/

const SideMenu = ({ setSideMenu }) => {
  return <InitForm setSideMenu={setSideMenu} personId={0} />;
};

const App = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [peoples, setPeoples] = useState(people);

  useEffect(() => {
    setPeoples(people);
  }, [people.length]);
  return (
    <div className="bg-zinc-950 h-screen w-screen text-center">
      <button
        onClick={() => setSideMenu(!sideMenu)}
        className="w-10 h-10 my-20 bg-teal-400 rounded-full text-center text-2xl hover:ring-4"
      >
        +
      </button>
      {sideMenu && (
        <SideMenu
          className="transition-2 duration-150 ease-in"
          setSideMenu={setSideMenu}
        />
      )}
      {Object.values(peoples).map((p) => {
        console.log(families);
        return <Person id={p.personId} personId={p.personId} />;
      })}
    </div>
  );
};

export default App;
