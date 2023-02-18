import type { CatResolvers } from "./../../types.generated";
export const Cat: CatResolvers = {
  /* Implement Cat resolver logic here */
  age: () => {
    /* Cat.age resolver is required because Cat.age exists but CatMapper.age does not */
  },
  fullName: () => {
    /* Cat.fullName resolver is required because Cat.fullName exists but CatMapper.fullName does not */
  },
  isChipped: ({ isChipped }) => {
    /* Cat.isChipped resolver is required because Cat.isChipped and CatMapper.isChipped are not compatible */
    return isChipped;
  },
};
