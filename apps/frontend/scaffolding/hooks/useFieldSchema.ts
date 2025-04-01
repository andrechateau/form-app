/**
 * ---------------------------------------------------------------------------------
 *        WIP! This is a work in progress and not yet functional.
 * ---------------------------------------------------------------------------------
 * This hook should be responsible to managing the schemas,
 * validating them and providing the necessary methods
 * to manipulate them.
 * The logic to convert the persisted JSON schemas forth and back should be here.
 * The logic to convert the JSON schemas to Zod schemas should be here (in the future).
 */


// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { UUID } from 'crypto'
// import { FieldType, ID } from "./useFormBuilder";




// function convertFieldsToZodSchema(f: IFieldConfig[]): Record<string, ZodType> {
//   const schemaObject = f.reduce((acc, field) => {
//     if (field.zod) {
//       acc[field.attribute] = field.zod;
//     }
//     return acc;
//   }, {} as Record<string, z.ZodType>);

//   return schemaObject;
// }

// function convertFieldsToDefaults(f: IFieldConfig[]): Record<string, string> {
//   return f.reduce((acc, field) => {
//     acc[field.attribute] = field.default;
//     return acc;
//   }, {} as Record<string, string>);
// }

// export type FieldType = "text" | "textarea" | "select" | "date";
// export interface IFieldConfig {
//   attribute: string;
//   label: string;
//   zod?: z.ZodString ;
//   default: string;
//   type?: FieldType;
//   options?: { label: string; value: string }[]; // For select fields
//   span: number;
//   size: number;
// }


