import { Dispatch, SetStateAction, useState } from "react";
import { useFieldArray, UseFieldArrayReturn, useForm, UseFormReturn } from "react-hook-form";
import { UUID } from 'crypto'
import { z } from "zod";
import { useMap } from "ahooks";
import { nanoid } from 'nanoid'
import { get } from "http";
import { FieldDefinition, FieldDefinitionProperties, FormBuilderMode, FormBuilderState, ID } from "../form.metadata";

export type UseMapReturn<K, T> = readonly [
  Map<K, T>,
  {
    readonly set: (key: K, entry: T) => void;
    readonly setAll: (newMap: Iterable<readonly [K, T]>) => void;
    readonly remove: (key: K) => void;
    readonly reset: () => void;
    readonly get: (key: K) => T | undefined;
  }
];

export interface IUseMapHookOperations<K, T> {
  readonly set: (key: K, entry: T) => void;
  readonly setAll: (newMap: Iterable<readonly [K, T]>) => void;
  readonly remove: (key: K) => void;
  readonly reset: () => void;
  readonly get: (key: K) => T | undefined;
}

export interface IReactiveMap<K, T> {
  map: Map<K, T>;
  operations: IUseMapHookOperations<K, T>;
}

export const useReactiveMap = <K, T>(
  useMapReturn: UseMapReturn<K, T>
): IReactiveMap<K, T> => ({
  map: useMapReturn[0],
  operations: useMapReturn[1],
});



export type UseFieldMapRemove = (key: ID) => void;
export type UseFieldMapReset = () => void;
export type UseFieldMapSwap = (keyA: ID, keyB: ID) => void;
export type UseFieldMapMove = (keyA: ID, keyB: ID) => void;
export type UseFieldMapPrepend = (field: FieldDefinitionProperties) => void;
export type UseFieldMapAppend =  (field: FieldDefinitionProperties) => void;
export type UseFieldMapInsert =  (field: FieldDefinitionProperties) => void;
export type UseFieldMapUpdate =  (field: FieldDefinition) => void;
export type UseFieldMapReplace = (field: FieldDefinition) => void;
export type UseFieldMapGet = (key?: string) => FieldDefinition | undefined;
export type UseFieldMapLoad = (fields: FieldDefinitionProperties[], reset?: boolean) => void;

export type UseFieldMapRemoveFromArrayAndMap  = (fieldArray: UseFieldArrayReturn, fieldMap: IReactiveMap<ID, FieldDefinition>, key: ID) => void;
export type UseFieldMapResetFromArrayAndMap   = (fieldArray: UseFieldArrayReturn, fieldMap: IReactiveMap<ID, FieldDefinition>) => void;
export type UseFieldMapSwapFromArrayAndMap    = (fieldArray: UseFieldArrayReturn, fieldMap: IReactiveMap<ID, FieldDefinition>, keyA: ID, keyB: ID) => void;
export type UseFieldMapMoveFromArrayAndMap    = (fieldArray: UseFieldArrayReturn, fieldMap: IReactiveMap<ID, FieldDefinition>, keyA: ID, keyB: ID) => void;
export type UseFieldMapPrependFromArrayAndMap = (fieldArray: UseFieldArrayReturn, fieldMap: IReactiveMap<ID, FieldDefinition>, field: FieldDefinitionProperties) => void;
export type UseFieldMapAppendFromArrayAndMap  = (fieldArray: UseFieldArrayReturn, fieldMap: IReactiveMap<ID, FieldDefinition>, field: FieldDefinitionProperties) => void;
export type UseFieldMapInsertFromArrayAndMap  = (fieldArray: UseFieldArrayReturn, fieldMap: IReactiveMap<ID, FieldDefinition>, field: FieldDefinitionProperties) => void;
export type UseFieldMapUpdateFromArrayAndMap  = (fieldArray: UseFieldArrayReturn, fieldMap: IReactiveMap<ID, FieldDefinition>, field: FieldDefinition) => void;
export type UseFieldMapReplaceFromArrayAndMap = (fieldArray: UseFieldArrayReturn, fieldMap: IReactiveMap<ID, FieldDefinition>, field: FieldDefinition) => void;
export type UseFieldMapGetFromArrayAndMap     = (fieldArray: UseFieldArrayReturn, fieldMap: IReactiveMap<ID, FieldDefinition>, key?: string) => FieldDefinition | undefined;
export type UseFieldMapLoadFromArrayAndMap    = (fieldArray: UseFieldArrayReturn, fieldMap: IReactiveMap<ID, FieldDefinition>, fields: FieldDefinitionProperties[], reset?: boolean) => void;


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

export interface FieldMapOperations {
  readonly load: UseFieldMapLoad;
  readonly remove: UseFieldMapRemove;
  readonly reset: UseFieldMapReset;
  readonly get: UseFieldMapGet;
  readonly swap: UseFieldMapSwap;
  readonly move: UseFieldMapMove;
  readonly prepend: UseFieldMapPrepend;
  readonly append: UseFieldMapAppend;
  readonly insert: UseFieldMapInsert;
  readonly update: UseFieldMapUpdate;
  readonly replace: UseFieldMapReplace;
  readonly fields: FieldDefinition[];
}

export interface UseFormBuilderForm extends UseFormReturn {
  uuid?: UUID
  name?: string
}

export interface FormBuilderStateProps extends FieldMapOperations {
  builderState: FormBuilderState,
  setBuilderState: Dispatch<SetStateAction<FormBuilderState>>
}

export interface FormProps extends FieldMapOperations {
  form: UseFormBuilderForm,
  submit: () => void,
  saveConfig: () => void,
  loadConfig: () => void,
  setMode: (mode: FormBuilderMode) => void,
  cycleMode: () => void,
}

export interface UseFormBuilderReturn extends FieldMapOperations, FormBuilderStateProps, FormProps {
}

export const useFormBuilder = (schema?: z.ZodObject<never, never, never, never>): UseFormBuilderReturn => {
  const [builderState, setBuilderState] = useState<FormBuilderState>({
    selectedField: undefined,
    mode: "input",
    editorOpen: false,
  });
  console.log('schema', schema);

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
