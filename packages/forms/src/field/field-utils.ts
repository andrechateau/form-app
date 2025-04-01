import { nanoid } from "nanoid";
import { FieldDefinition } from "./field.metadata";

const defaultConfig: (id: string) => FieldDefinition = (id) => ({
  id: `Field_${id}`,
  name: `Field_${id}`,
  key: `Field_${id}`,
  label: "Field",
  question: "Field",
  default: "",
  description: "",
  placeholder: "",
  type: "text",
  required: false,
  row: 0,
  col: 0,
  span: 6,
  size: 6,
});

export const fieldTemplates = {
  default: () => fieldTemplates.text(),
  text: (currentConfig?: FieldDefinition) =>
    ({
      ...(currentConfig ?? defaultConfig(nanoid())),
      type: "text",
    }),
  textArea: (currentConfig?: FieldDefinition) =>
    ({
      ...(currentConfig ?? defaultConfig(nanoid())),
      type: "textarea",
    } as FieldDefinition),
  date: (currentConfig?: FieldDefinition) =>
    ({
      ...(currentConfig ?? defaultConfig(nanoid())),
      type: "date",
    } as FieldDefinition),
} as const;