import type { CatMapper } from "../schema/cat/schema.mappers";

const createCat = (
  input: Partial<CatMapper> & Pick<CatMapper, "id">
): CatMapper => {
  return {
    id: `${input.id}`,
    firstName: input.firstName || `firstName${input.id}`,
    lastName: input.lastName || `lastName${input.id}`,
    birthYear: input.birthYear || 2021,
    isChipped: input.isChipped || true,
  };
};

export const data: {
  cats: Record<string, CatMapper>;
} = {
  cats: {
    "1": createCat({ id: "1", firstName: "Catty", lastName: "McCatface" }),
    "2": createCat({ id: "2", firstName: "single", lastName: "lonely_boi" }),
    "3": createCat({ id: "3" }),
    "4": createCat({ id: "4" }),
    "5": createCat({ id: "5" }),
  },
};
