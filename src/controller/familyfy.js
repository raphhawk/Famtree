import { numerals, families, people } from "../data/models";

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

export const createFamily = (personId, famid, exactRealtion, yourRelation) => {
  const family = families[famid];
  try {
    if (family.myself) {
      if (yourRelation === "child") {
        // add parent fam
        family.children.push(family.myself);
      }
      !family[yourRelation] && (family[yourRelation] = family.myself);
      delete family.myself;
    }
  } catch (err) {}
  exactRealtion === "child"
    ? family.children.push(personId)
    : (family[exactRealtion] = personId);
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
