import { useState } from "react";
import Xarrow from "react-xarrows";
import { Family } from "./Family";
import { families } from "../data/models";

const Node = ({ id, setIsExpanded, links }) => {
  const [expand, setExpand] = useState(false);
  if (expand) {
    return (
      <Family
        family={families[id]}
        setExpand={setExpand}
        id={id}
        setIsExpanded={setIsExpanded}
        links={links}
      />
    );
  }
  return (
    <li
      id={id}
      className="bg-gray-400 rounded-full w-10 h-10 text-center pt-2 m-10 mt-20 hover:border hover:border-2 hover:border-purple-600 z-10"
      onClick={() => {
        setExpand(true);
        setIsExpanded(true);
      }}
    >
      <h1>{id}</h1>
    </li>
  );
};

export const Nodules = ({ tree, famid, links }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let children = null;
  children = (
    <ul className="flex flex-row z-10">
      {tree.map((i) => {
        return (
          <>
            <Nodules tree={i.nexfams} famid={i.famid} links={i.links} />
            {!isExpanded && (
              <Xarrow
                start={`${famid}`}
                end={`${i.famid}`}
                curveness={0.3}
                zindex="0"
                headSize={3.5}
                animateDrawing={0.5}
              />
            )}
          </>
        );
      })}
    </ul>
  );
  return (
    <li className="flex flex-col items-center z-10">
      <Node
        node={tree}
        id={famid}
        setIsExpanded={setIsExpanded}
        links={links}
      />
      {children}
    </li>
  );
};
