/*
 * Ranges
 * famid: 1-10000
 * personid: 10001 -
 * */

export const numerals = {
  famid: 0,
  personId: 10000,
};

/*
Parent — somebody’s father or mother
Mother — somebody’s female parent
Father — somebody’s male parent
Daughter — somebody’s female child
Son — somebody’s male child
Sibling — a brother or sister
Sister — a girl or woman who has the same parents as another person
Brother — a boy or man who has the same parents as another person
Spouse — somebody married to another person; husband or wife
Wife — the woman who a man is married to
Husband — the man who a woman is married to
Elder brother/sister — a brother/sister who is older than you
Younger brother/sister — brother/sister who is younger than you
Grandparent — somebody’s parent’s parent
Grandmother — somebody’s parent’s mother
Grandfather — somebody’s parent’s father
Great grandfather — a father of your grandparent
Great grandmother — a mother of your grandparent
Grandchild — somebody’s son’s or daughter’s child
Granddaughter — somebody’s son’s or daughter’s daughter
Grandson — somebody’s son’s or daughter’s son
Nephew — your husband’s or wife’s brother’s or sister’s son
Niece — your husband’s or wife’s brother’s or sister’s daughter
Aunt — somebody’s mother’s or father’s sister; your uncle’s wife
Uncle — somebody’s mother’s or father’s brother; your aunt’s husband
Mother-in-law — your spouse’s mother
Father-in-law — your spouse’s father
Bachelor — a man who has never been married
Spinster — a woman who has never been married
Widower — a man whose wife has died
Widow — a woman whose husband has died
Cousin — somebody’s aunt’s or uncle’s child.com; somebody’s parent’s brother’s or sister’s child.
Stepmother — your father’s wife but not your real mother
Stepfather — your mother’s husband but not your real father
Stepson — your husband’s/wife’s son but not your
Stepdaughter — your husband’s/wife’s daughter but not your
Brother-in-law — your spouse’s brother
Sister-in-law — your spouse’s sister
Stepsister — your stepfather’s or stepmother’s daughter
Stepbrother — your stepfather’s or stepmother’s son
Daughter-in-law — your son’s wife
Son-in-law — your daughter’s husband
*/

export const Relations = [
  { fa: "father", mo: "mother" },
  { da: "daughter", so: "son" },
];

export const people = {};

export const families = {
  10001: {
    famid: 10001,
    hus: 10022,
    wife: 10035,
    children: [10012, 10031, 10023, 10026],
  },
};

export const famtree = [
  {
    famid: 10001,
    nexfams: [
      { famid: 2, nexfams: [] },
      {
        famid: 3,
        nexfams: [
          {
            famid: 4,
            nexfams: [
              { famid: 6, nexfams: [] },
              { famid: 7, nexfams: [] },
              { famid: 8, nexfams: [] },
            ],
          },
          { famid: 5, nexfams: [] },
        ],
      },
    ],
    links: [
      [10012, 2],
      [10023, 3],
    ],
  },
];
