import { UUID } from "crypto";

export interface FormDefinitionProperties {
  id: UUID,
  name: string,
  parent?: UUID,
  fields: string,
}

