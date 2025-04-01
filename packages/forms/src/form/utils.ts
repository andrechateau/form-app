import { Form } from "@prisma/client"
import { FormPayload } from "./form.metadata.types"
import { FieldDefinition, FieldDefinitionProperties } from "../field";
import { JsonValue } from "@prisma/client/runtime/library";
import { UUID } from "crypto";

export const convertFieldDefinitionArrayToObject = (fields: FieldDefinition[]): Record<string, FieldDefinition> => {
  const fieldsObject: Record<string, FieldDefinition> = {};
  fields
    .forEach((f) => (
      fieldsObject[f.key] = {
          id: f.id,
          key: f.key,
          question: f.question,
          label: f.label,
          type: f.type,
          required: f.required,
          description: f.description ?? "",
          placeholder: f.description ?? "",
          default: f.default ?? "",
          row: f.row,
          col: f.col,
          span: f.span,
          size: f.size,
          options: f.options ?? [],
    }));
    return fieldsObject;
}
export const convertFieldDefinitionsObjectToJsonValue = (fieldsObject: Record<string, FieldDefinition>): JsonValue => fieldsObject as unknown as JsonValue;
export const convertFieldDefinitionsArrayToJSONValue = (fields: FieldDefinition[]): JsonValue => convertFieldDefinitionsObjectToJsonValue(convertFieldDefinitionArrayToObject(fields));


export const convertFieldDefinitionsObjectToArray = (fieldsObject: Record<string, FieldDefinition>): FieldDefinition[]  => Object.values(fieldsObject);
export const convertFieldDefinitionsJSONToObject = (fieldsJson: JsonValue): Record<string, FieldDefinition> => 
  (typeof fieldsJson === "string" ?  JSON.parse(fieldsJson) : fieldsJson) as Record<string, FieldDefinition>

export const convertFieldDefinitionsJSONToArray = (fieldsJson: JsonValue): FieldDefinition[]  => convertFieldDefinitionsObjectToArray(convertFieldDefinitionsJSONToObject(fieldsJson));



export const convertFormPayloadToEntity = (payload: FormPayload): Form => ({
    id: payload.id,
    name: payload.name,
    fields: JSON.stringify(convertFieldDefinitionArrayToObject(payload.fields)),
  });

export const convertFormEntityToPayload = (entity: Form): FormPayload => {
  return {
    id: entity.id as UUID,
    name: entity.name,
    fields: entity.fields ? convertFieldDefinitionsJSONToArray(entity.fields) : [],
  }
}
