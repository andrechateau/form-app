import { UUID } from "crypto";

export interface FormDefinitionProperties {
  id: UUID,
  name: string,
  parent?: UUID,
  fields: string,
}

export interface FieldDefinitionProperties {
  type?: FieldType | string // <- type?: FieldType;  //   type?: FieldType;
  key: ID
  label: string;  //   label: string;
  question: string, // default
  required: boolean, // default
  description: string
  zodSchema?: string;  //   zod?: z.ZodString ;
  default: string;  //   default: string;
  placeholder: string;  //   default: string;
  options?: { label: string; value: string }[];  //   options?: { label: string; value: string }[];
  row?: number;  //   span: number;
  col?: number;  //   span: number;
  span: number;  //   span: number;
  size: number;  //   size: number;
}

export interface FieldDefinition extends FieldDefinitionProperties {
  id: ID,
}

// type FieldsJSONSchema = Record<ID, FieldDefinitionSchema>

export interface FieldDefinitionSchema {
  type: 'text', // default
  question: 'First Name?', // default
  required: true, // default
}

export interface FieldProperties extends FieldDefinitionSchema {
  id: ID,
}


export type ID = string;

export interface FormDefinitionProperties {
  id: UUID,
  name: string,
  parent?: UUID,
  fields: string,
}

export type FormBuilderMode = "builder" | "input" | "view";
export interface FormBuilderState {
  selectedField?: ID,
  mode: FormBuilderMode,
  editorOpen: boolean
}

export type FieldType = "text" | "textarea" | "select" | "date" | "separator" | "blank" | "choice";


// export interface IFieldConfig {
//   attribute: string;
//   label: string;
//   zod?: z.ZodString ;
//   default: string;
//   type?: FieldType;
//   options?: { label: string; value: string }[];
//   span: number;
//   size: number;
// }