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

