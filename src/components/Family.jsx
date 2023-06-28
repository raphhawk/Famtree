import { useState } from "react";
import Xarrow from "react-xarrows";
import { Person } from "./Person";

export const Family = ({ family, setExpand, setIsExpanded, links }) => {
  const [childrens, setChildrens] = useState(false);
  const { famid, hus, wif, children } = family;

  return (
    <section className="flex flex-col items-center p-8">
      <div className="flex flex-row w-fit justify-between">
        <Person id={`${famid}.${hus}`} personID={10002} />
        <div
          id={`${famid}.m`}
          className="text-center text-3xl text-white relative top-10 font-bold bg-purple-600 hover:bg-purple-400 rounded-full w-10 h-10 hover:cursor-pointer"
          onClick={() => {
            setExpand(false);
            setIsExpanded(false);
          }}
        >
          {"~"}
        </div>
        <Person id={`${famid}.${wif}`} personID={10002} />
        <Xarrow
          start={`${famid}.m`}
          end={`${famid}.${hus}`}
          color="#cca785"
          curveness="0.3"
          headSize={3.5}
          animateDrawing={0.5}
        />
        <Xarrow
          start={`${famid}.m`}
          end={`${famid}.${wif}`}
          color="#cca785"
          curveness="0.3"
          headSize={3.5}
          animateDrawing={0.5}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold text-white">|</p>
        <hr
          id={`${famid}.mc`}
          className="bg-white h-2 w-20 bg-white border border-2 rounded-full mb-20 hover:border-teal-800 hover:bg-teal-800"
          onClick={() => setChildrens(!childrens)}
        />
        {links.map((l) => {
          return childrens ? (
            <Xarrow
              start={`${l[0]}`}
              end={`${l[1]}`}
              endAnchor="top"
              color="#c27ec1"
              curveness="0.2"
              headSize={3.5}
              animateDrawing={0.5}
            />
          ) : (
            <Xarrow
              start={`${famid}.mc`}
              end={`${l[1]}`}
              endAnchor="top"
              color="#c27ec1"
              curveness="0.2"
              headSize={3.5}
              animateDrawing={0.5}
            />
          );
        })}
      </div>
      <div className="flex flex-row">
        {childrens &&
          children.map((child) => {
            return (
              <>
                <Person id={`${child}`} personID={10002} />
                <Xarrow
                  end={`${child}`}
                  endAnchor="top"
                  start={`${famid}.mc`}
                  color="#87c4a9"
                  curveness="1"
                  headSize={3.5}
                  animateDrawing={0.5}
                />
              </>
            );
          })}
      </div>
    </section>
  );
};
