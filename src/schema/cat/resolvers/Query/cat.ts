import type { QueryResolvers } from "./../../../types.generated";
export const cat: NonNullable<QueryResolvers["cat"]> = async (
  _parent,
  { id },
  { data }
) => {
  return data.cats[id];
};
