import { Dispatch, SetStateAction, useState } from "react";
import { UUID } from 'crypto'
import { z } from "zod";
import { useMap } from "ahooks";
import { nanoid } from 'nanoid'
import { get } from "http";
import { useFieldArray, useForm } from "react-hook-form";
import { FormBuilderMode, FormBuilderState, OptionalFieldAndBuilder, BuilderProps } from '../../form.metadata';
import { FieldDefinition, FieldDefinitionProperties, ID, PackageFieldTest } from "forms";
import { FieldMapOperations, FormBuilderStateProps, FormNameStateProps, FormProps, UseFieldMapAppend, UseFieldMapAppendFromArrayAndMap, UseFieldMapGet, UseFieldMapGetFromArrayAndMap, UseFieldMapInsert, UseFieldMapInsertFromArrayAndMap, UseFieldMapLoad, UseFieldMapLoadFromArrayAndMap, UseFieldMapMove, UseFieldMapMoveFromArrayAndMap, UseFieldMapPrepend, UseFieldMapPrependFromArrayAndMap, UseFieldMapRemove, UseFieldMapRemoveFromArrayAndMap, UseFieldMapReplace, UseFieldMapReplaceFromArrayAndMap, UseFieldMapReset, UseFieldMapResetFromArrayAndMap, UseFieldMapSwap, UseFieldMapSwapFromArrayAndMap, UseFieldMapUpdate, UseFieldMapUpdateFromArrayAndMap, UseFormBuilderForm, useReactiveMap } from "./useFormBuilder.metadata";

// TODO: Remove test
const test: PackageFieldTest = { 
  test: 'test',
};


// TODO: Check reactivity fo multiple appends in a foreach!!! 
export const loadFromArrayAndMap: UseFieldMapLoadFromArrayAndMap     = (fieldArray, fieldMap, fields, reset = true) => {
  if (reset) resetFromArrayAndMap(fieldArray, fieldMap);
  fields.forEach((f) => insertFromArrayAndMap(fieldArray, fieldMap, f));
};

export const removeFromArrayAndMap: UseFieldMapRemoveFromArrayAndMap    = (fieldArray, fieldMap, key) => {
  fieldMap.operations.remove(key);
  fieldArray.remove(fieldArray.fields.findIndex(((f) => (f as FieldDefinition).key === key)));
};

export const resetFromArrayAndMap: UseFieldMapResetFromArrayAndMap      = (fieldArray, fieldMap, ) => {
  fieldMap.operations.reset();
  fieldArray.remove(fieldArray.fields.map((_, index) => index));
};


export const getFromArrayAndMap:  UseFieldMapGetFromArrayAndMap       = (_, fieldMap, key) => {
  return key ? fieldMap.operations.get(key) : undefined
};



export const insertFromArrayAndMap: UseFieldMapInsertFromArrayAndMap  = (fieldArray, fieldMap, field) => {
  console.log('insert', fieldArray, fieldMap, field)
  console.log('append', fieldArray)

  if (field && (field as FieldDefinition)?.id && getFromArrayAndMap(fieldArray, fieldMap, (field as FieldDefinition)?.id)) return updateFromArrayAndMap(fieldArray, fieldMap, field as FieldDefinition);
  const nano = nanoid();
  const nextField = {
      id: (field && (field as FieldDefinition)?.id) ?? nano,
      value: field.default,
      ...field
    }
  fieldArray.append(nextField);
  console.log('append', fieldArray)
  fieldMap.operations.set(nextField.key, nextField);
  return get(nextField.key);
};

export const updateFromArrayAndMap:  UseFieldMapUpdateFromArrayAndMap = (fieldArray, fieldMap, field: FieldDefinition) => {
  fieldArray.update(fieldArray.fields.findIndex(((f) => (f as FieldDefinition).key === field.key)), field);
  fieldMap.operations.set(field.key, field);
};

// Not implemented!
export const swapFromArrayAndMap: UseFieldMapSwapFromArrayAndMap        = (fieldArray, fieldMap, keyA, keyB) => {
  throw new Error(`Not implemented yet[${[fieldArray, fieldMap, keyA, keyB]}]`)
};

export const moveFromArrayAndMap: UseFieldMapMoveFromArrayAndMap        = (fieldArray, fieldMap, keyA, keyB) => {
  throw new Error(`Not implemented yet[${[fieldArray, fieldMap, keyA, keyB]}]`)
};

export const prependFromArrayAndMap: UseFieldMapPrependFromArrayAndMap  = (fieldArray, fieldMap, field: FieldDefinitionProperties) => {
  throw new Error(`Not implemented yet[${[fieldArray, fieldMap, field]}]`)
};

export const appendFromArrayAndMap: UseFieldMapAppendFromArrayAndMap    = (fieldArray, fieldMap, field: FieldDefinitionProperties) => {
  throw new Error(`Not implemented yet[${[fieldArray, fieldMap, field]}]`)
};

export const replaceFromArrayAndMap: UseFieldMapReplaceFromArrayAndMap  = (fieldArray, fieldMap, field: FieldDefinitionProperties) => {
  throw new Error(`Not implemented yet[${[fieldArray, fieldMap, field]}]`)
};

export type UseFormBuilderReturn = FieldMapOperations & FormBuilderStateProps & FormNameStateProps & FormProps;

export const isBuilderMode = (fb: OptionalFieldAndBuilder | BuilderProps) => fb.formBuilder.builderState.mode === "builder";
export const isInputMode = (fb: OptionalFieldAndBuilder | BuilderProps) => fb.formBuilder.builderState.mode === "input";
export const isReadMode = (fb: OptionalFieldAndBuilder | BuilderProps) => fb.formBuilder.builderState.mode === "view";

export const useFormBuilder = (schema?: z.ZodObject<never, never, never, never>): UseFormBuilderReturn => {
  const [builderState, setBuilderState] = useState<FormBuilderState>({
    selectedField: undefined,
    mode: "input",
    editorOpen: false,
  });
  const [name, setName] = useState<string>("Form");

  const form: UseFormBuilderForm = useForm();

  const fieldArray = useFieldArray({ control: form.control, name: "dynamicFields", });
  const fieldMap = useReactiveMap(useMap<ID, FieldDefinition>());
  
  const load: UseFieldMapLoad        = (fields, reset) => loadFromArrayAndMap(fieldArray, fieldMap, fields, reset);
  const remove: UseFieldMapRemove    = (key) => removeFromArrayAndMap(fieldArray, fieldMap, key);
  const reset: UseFieldMapReset      = () => resetFromArrayAndMap(fieldArray, fieldMap);
  const get: UseFieldMapGet          = (key?: ID) => getFromArrayAndMap(fieldArray, fieldMap, key);
  const swap: UseFieldMapSwap        = (keyA: ID, keyB: ID) => swapFromArrayAndMap(fieldArray, fieldMap, keyA, keyB);
  const move: UseFieldMapMove        = (keyA: ID, keyB: ID) => moveFromArrayAndMap(fieldArray, fieldMap, keyA, keyB);
  const prepend: UseFieldMapPrepend  = (field: FieldDefinitionProperties) => prependFromArrayAndMap(fieldArray, fieldMap, field);
  const append: UseFieldMapAppend    = (field: FieldDefinitionProperties) => appendFromArrayAndMap(fieldArray, fieldMap, field);
  const insert: UseFieldMapInsert    = (field: FieldDefinitionProperties) => insertFromArrayAndMap(fieldArray, fieldMap, field);
  const update: UseFieldMapUpdate    = (field: FieldDefinition) => updateFromArrayAndMap(fieldArray, fieldMap, field);
  const replace: UseFieldMapReplace  = (field: FieldDefinition) => replaceFromArrayAndMap(fieldArray, fieldMap, field);

  const submit = () => console.log('Submiting', form.getValues());
  const saveConfig = () => {
    console.log('Saving Config', form.getValues())
    const fieldSchemas: Record<string, FieldDefinitionProperties> = {};
    fields
    .map((f) => get(f.key))
    .filter((f) => f !== undefined)
    .forEach((f) => (
      fieldSchemas[f.key] = {
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
    
    const formSchema = {
      id: null,
      name: "name",
      fields: JSON.stringify(fieldSchemas)
    }
    console.log('Saving Config Schema:', formSchema)

  };

  const loadConfig = () => {
    const sample = {
      id: null,
      name: "name",
      fields: "{\"Field_o8Ecpiln8mvUu-JvFNfzN\":{\"key\":\"Field_o8Ecpiln8mvUu-JvFNfzN\",\"question\":\"One Field\",\"label\":\"One Field\",\"type\":\"text\",\"required\":false,\"description\":\"\",\"default\":\"\",\"row\":0,\"col\":0,\"span\":6,\"size\":0,\"options\":[]},\"Field_TULYdu7pbLbqecP975bZk\":{\"key\":\"Field_TULYdu7pbLbqecP975bZk\",\"question\":\"Even another\",\"label\":\"Even another\",\"type\":\"date\",\"required\":false,\"description\":\"\",\"default\":\"\",\"row\":0,\"col\":0,\"span\":6,\"size\":0,\"options\":[]},\"Field_BeDmjr-eCo8JjnoA6Jb7N\":{\"key\":\"Field_BeDmjr-eCo8JjnoA6Jb7N\",\"question\":\"More one Field\",\"label\":\"More one Field\",\"type\":\"date\",\"required\":false,\"description\":\"\",\"default\":\"\",\"row\":0,\"col\":0,\"span\":6,\"size\":0,\"options\":[]},\"Field_pIL42XjCc4UDxSUJdOcus\":{\"key\":\"Field_pIL42XjCc4UDxSUJdOcus\",\"question\":\"Other Field\",\"label\":\"Other Field\",\"type\":\"date\",\"required\":false,\"description\":\"\",\"default\":\"\",\"row\":0,\"col\":0,\"span\":6,\"size\":0,\"options\":[]}}"
    };
    const fieldSchema = JSON.parse(sample.fields) as Record<string, FieldDefinitionProperties>;

    form.name = sample.name;
    load(Object.values(fieldSchema));
  }

  const setMode = (mode: FormBuilderMode) => setBuilderState({...builderState, mode});
  const cycleMode = () => {
    switch (builderState.mode) {
      case "builder": setBuilderState({...builderState, mode: "view"}); break;
      case "input": setBuilderState({...builderState, mode: "builder"}); break;
      case "view": setBuilderState({...builderState, mode: "input"}); break;
      default:  setBuilderState({...builderState, mode: "builder"}); break;
    }    
  }
  
  const fields: FieldDefinition[] = fieldArray.fields as FieldDefinition[];

  return {
    form,
    name,
    setName,
    submit,
    saveConfig,
    loadConfig,
    setMode,
    cycleMode,
    fields,
    get,
    insert,
    update,
    remove,
    reset,
    swap,
    move,
    prepend,
    append,
    replace,
    load,
    builderState,
    setBuilderState,
  };
};
