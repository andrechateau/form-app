// export interface FieldDefinition {
//   name: string;
//   type: string;
//   description: string;
//   validation?: object;
// }

import { FieldDefinition } from "./field.metadata";

export interface Form {
  id: string;
  name: string;
  fields: FieldDefinition[];
}

export interface PackageFieldTest {
  test: string;
}
