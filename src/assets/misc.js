//const bfsTree = (root) => {
//  let q = [root];
//  const liobj = {
//    0: [<Node node={root} id={root.famid} />],
//  };
//  while (q.length !== 0) {
//    const children = q[0].nexfams;
//    if (children) {
//      liobj[q[0].famid] = [];
//      children.map((c) => {
//        q.push(c);
//        liobj[q[0].famid].push(<Node node={c} id={c.famid} />);
//      });
//    }
//    q.shift();
//  }
//  return liobj;
//};
/*<ul className="flex flex-col">
        {Object.values(liobj).map((l) => {
          return <ul className="flex flex-row items-center w-fit">{l}</ul>;
        })}
      </ul>*/
