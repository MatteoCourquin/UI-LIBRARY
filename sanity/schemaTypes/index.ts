import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import soundType from "./soundType";
import categoryType from "./categoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, soundType, categoryType],
};
