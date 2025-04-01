import { UseFormBuilderReturn } from "./hooks/useFormBuilder/useFormBuilder";
import { FieldDefinition, ID } from "forms";

export type FormBuilderMode = "builder" | "input" | "view";


export interface FormBuilderState {
  selectedField?: ID,
  mode: FormBuilderMode,
  editorOpen: boolean
}

export type FormBuilder = UseFormBuilderReturn;

export interface BuilderProps {
  formBuilder: FormBuilder
}
export interface OptionalFieldProps {
  field?: FieldDefinition,
}

export interface FieldProps {
  field: FieldDefinition,
}

export type OptionalFieldAndBuilder = BuilderProps & OptionalFieldProps;
export type FieldAndBuilder = BuilderProps & FieldProps;
