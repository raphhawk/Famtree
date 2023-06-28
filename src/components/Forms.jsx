import { useState } from "react";
import { numerals, people } from "../data/models";

export const InitForm = ({ setSideMenu, personId }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState(new Date());
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [relation, setRelation] = useState("");
  const [relationsList, setRelationsList] = useState(
    people[personId] ? people[personId].relationsLeft : ["myself"]
  );

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDobChange = (e) => {
    setDob(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleRelationChange = (e) => {
    setRelation(e.target.value);
  };

  return (
    <div
      className={`min-h-screen w-1/3 fixed top-0 right-0 bg-slate-800 p-4 py-8 z-10`}
    >
      <h1 className="text-left text-2xl text-indigo-300 mb-8">
        Enter your Details
      </h1>
      <form className="flex flex-col w-fit text-left text-indigo-400">
        <div className="flex flex-row my-4">
          <label className="text-md mx-4 pr-5 py-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="rounded-md w-80 bg-slate-900 px-4 py-1 text-indigo-300 outline-none border border-2 border-transparent focus:border-indigo-300"
            required
            onChange={(e) => handleNameChange(e)}
          />
        </div>
        <div className="flex flex-row my-4">
          <label className="text-md mx-4 py-2 pr-8" htmlFor="dob">
            DOB
          </label>
          <input
            id="dob"
            name="dob"
            type="date"
            className="rounded-md w-80 bg-slate-900 px-4 py-1 text-indigo-300 outline-none border border-2 border-transparent focus:border-indigo-300"
            required
            onChange={(e) => handleDobChange(e)}
          />
        </div>
        <div className="flex flex-row my-4">
          <label className="text-md mx-4 py-2 pr-2" htmlFor="gender">
            Gender
          </label>
          <input
            id="gender"
            name="gender"
            list="genders"
            className="rounded-md w-80 bg-slate-900 px-4 py-1 text-indigo-300 outline-none border border-2 border-transparent focus:border-indigo-300"
            required
            onChange={(e) => handleGenderChange(e)}
            autoComplete="off"
          />
          <datalist id="genders">
            <option value="Male" />
            <option value="Female" />
            <option value="Others" />
          </datalist>
        </div>
        <div className="flex flex-row my-4">
          <label className="text-md mx-4 py-2 pr-1" htmlFor="relation">
            Relation
          </label>
          <input
            id="relation"
            name="relation"
            list="relations"
            className="rounded-md w-80 bg-slate-900 px-4 py-1 text-indigo-300 outline-none border border-2 border-transparent focus:border-indigo-300"
            required
            onChange={(e) => handleRelationChange(e)}
            autoComplete="off"
          />
          <datalist id="relations">
            {relationsList.map((r) => (
              <option className="text-5l" value={r} />
            ))}
          </datalist>
        </div>
        <div className="flex flex-row my-4">
          <label className="text-md mx-4 py-2 pr-6" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="rounded-md w-80 bg-slate-900 px-4 py-1 text-indigo-300 outline-none border border-2 border-transparent focus:border-indigo-300"
            required
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
        <button
          type="button"
          className="bg-slate-950 w-fit px-4 py-1 rounded-md hover:bg-slate-900"
          onClick={() => {
            setSideMenu(false);
            if (name && dob && gender && email) {
              numerals.personId += 1;
              people[numerals.personId] = {
                personId: numerals.personId,
                name: name,
                dob: dob,
                gender: gender,
                relation: relation,
                email: email,
                relationsLeft: ["parent", "child", "sibling", "spouse"],
              };
            }
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};