import { FieldDefinition, FieldDefinitionProperties, ID } from "forms";
import { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import { FormBuilder, FormBuilderMode, FormBuilderState } from "../../form.metadata";
import { Dispatch, SetStateAction } from "react";
import { UUID } from "crypto";

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

export interface FormNameStateProps extends FieldMapOperations {
  name: string,
  setName: Dispatch<SetStateAction<string>>
}

export interface FormIdStateProps extends FieldMapOperations {
  id: string | undefined,
  setId: Dispatch<SetStateAction<string | undefined>>
}

export interface FormProps extends FieldMapOperations {
  form: UseFormBuilderForm,
  submit: () => void,
  setMode: (mode: FormBuilderMode) => void,
  cycleMode: () => void,
}
