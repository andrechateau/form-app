import { UUID } from "crypto";
import { ID } from "../common";
export interface FieldDefinitionProperties {
  type?: FieldType | string
  key: ID
  label: string;
  question: string,
  required: boolean,
  description: string
  zodSchema?: string;
  default: string;
  placeholder: string;
  options?: { label: string; value: string }[]; 
  row?: number;
  col?: number;
  span: number;
  size: number;
}

export interface FieldDefinition extends FieldDefinitionProperties {
  id: ID,
}

export interface FieldDefinitionSchema {
  type: 'text',
  question: 'First Name?',
  required: true,
}

export interface FieldProperties extends FieldDefinitionSchema {
  id: ID,
}

export type FieldType = "text" | "textarea" | "select" | "date" | "separator" | "blank" | "choice";
