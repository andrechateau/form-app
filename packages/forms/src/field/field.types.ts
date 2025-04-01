export interface FieldDefinition {
  name: string;
  type: string;
  description: string;
  validation?: object;
}

export interface Form {
  id: string;
  name: string;
  fields: FieldDefinition[];
}

export interface PackageFieldTest {
  test: string;
}
