import { numerals, families } from "../data/models";

export const getExactRelations = (relation, gender) => {
  if (relation === "parent" && gender === "Male") {
    return ["father", "child"];
  } else if (relation === "parent" && gender === "Female") {
    return ["mother", "child"];
  } else if (relation === "spouse" && gender === "Male") {
    return ["husband", "wife"];
  } else if (relation === "spouse" && gender === "Female") {
    return ["wife", "husband"];
  }
  return [];
};

export const createFamily = (famid, exactRealtion, yourRelation) => {
  const family = families[famid];
  if (family.hasOwnProperty("myself")) {
    if (yourRelation === "child") {
      // add parent fam
      if (family.hasOwnProperty("children")) {
        family.children.push(family.myself);
      } else {
        family[children] = [family.myself];
      }
    } else if (!family[yourRelation]) {
      family[yourRelation] = family.myself;
    }
    delete family.myself;
  }
  family[exactRealtion] = numerals.personId;
  return family;
};

export const setFamily = () => {
  families[numerals.famid] = {};
  families[numerals.famid].famid = numerals.famid;
  families[numerals.famid].myself = numerals.personId;
};
