/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import * as z from "zod";

type Field = {
  name: string;
  label: string;
  type: string;
  validation?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    min?: number;
    max?: number;
  };
};

export const generateZodSchema = (fields: Field[]) => {
  // const shape: Record<string, any> = {};

  // fields.forEach((field) => {
  //   let schema = z.any();

  //   switch (field.type) {
  //     case "text":
  //     case "email":
  //       schema = z.string();
  //       if (field.validation?.required) schema = schema.min(1, `${field.label} is required`);
  //       if (field.validation?.minLength) schema = schema.min(field.validation.minLength);
  //       if (field.validation?.maxLength) schema = schema.max(field.validation.maxLength);
  //       if (field.validation?.pattern) schema = schema.regex(new RegExp(field.validation.pattern));
  //       break;

  //     case "number":
  //       schema = z.number();
  //       if (field.validation?.min) schema = schema.min(field.validation.min);
  //       if (field.validation?.max) schema = schema.max(field.validation.max);
  //       break;
  //   }

  //   shape[field.name] = schema;
  // });

  // return z.object(shape);
  return z.object({});
};
