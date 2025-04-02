import { UUID } from "crypto";
import { FieldDefinition } from "../field";

export interface FormDefinitionProperties {
  id: UUID,
  name: string,
  fields: string,
}

export interface FormPayload {
  id: UUID,
  name: string,
  fields: FieldDefinition[],
}

export interface SourceDataPayload {
  id: UUID | string,
  question: string;
  answer: string;
  sourceRecordId: string;
}
export interface RecordPayload {
  id: UUID | string,
  formId: string;
  data: SourceDataPayload[]
}
