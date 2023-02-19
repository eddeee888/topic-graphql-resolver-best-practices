import type { CatMapper } from "../schema/cat/schema.mappers";

const createCat = (id: number): CatMapper => {
  return {
    id: `${id}`,
    firstName: `firstName${id}`,
    lastName: `lastName${id}`,
    birthYear: 2020 + id,
    isChipped: true,
  };
};

export const data: {
  cats: Record<string, CatMapper>;
} = {
  cats: {
    "1": createCat(1),
    "2": createCat(2),
    "3": createCat(3),
    "4": createCat(4),
    "5": createCat(5),
  },
};
