import type { CatResolvers } from "./../../types.generated";
export const Cat: CatResolvers = {
  age: ({ birthYear }) => {
    return 2023 - birthYear;
  },
  fullName: ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
  },
  isChipped: ({ isChipped }) => {
    return isChipped ? "YES" : "NO";
  },
};
