import { families, people } from "../data/models";

export const getExactRelations = (relation, gender) => {
  if (relation === "parent" && gender === "Male") {
    return ["father", "child"];
  } else if (relation === "parent" && gender === "Female") {
    return ["mother", "child"];
  } else if (relation === "spouse" && gender === "Male") {
    return ["husband", "wife"];
  } else if (relation === "spouse" && gender === "Female") {
    return ["wife", "husband"];
  } else {
    return ["child", "parent"];
  }
};
export const createFamily = (
  personId,
  famid,
  currentRelation,
  previousRelation
) => {
  const family = families[famid];
  try {
    if (family.myself) {
      if (previousRelation === "child") {
        // add parent fam
        family.children.push(family.myself);
      }
      !family[previousRelation] && (family[previousRelation] = family.myself);
      delete family.myself;
    }
  } catch (err) {}
  exactRealtion === "child"
    ? family.children.push(personId)
    : (family[currentRelation] = personId);
  if (family.parent) {
    people[family.parent].gender === "Male"
      ? (family.husband = family.parent)
      : (family.wife = family.parent);
    delete family.parent;
  }
  return family;
};

export const setFamily = (famlyId, personId) => {
  families[famlyId] = { famid: famlyId, myself: personId, children: [] };
};
