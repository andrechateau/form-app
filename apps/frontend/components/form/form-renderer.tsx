import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import React from "react";
import { Datepicker } from "@/components/ui/datepicker";
import { Popover } from "../ui/popover";
import { EditorPopoverContent, isPopoverOpen, isSelectedEditorField } from '@/components/form/field-editor';
import { PopoverAnchor } from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { UseFormBuilderReturn } from "@/lib/form/hooks/useFormBuilder";
import { nanoid } from 'nanoid'
import { Separator } from "../ui/separator";
import { FieldDefinition, ID } from "@/lib/form/form.metadata";

const defaultConfig: (id: string) => FieldDefinition = (id) => ({
  id: `Field_${id}`,
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

export interface OptionalFieldAndBuilder {
  formBuilder: UseFormBuilderReturn
  field?: FieldDefinition,
}

export interface FieldAndBuilder {
  formBuilder: UseFormBuilderReturn
  field: FieldDefinition,
}

const openEditorEventProps = ({ formBuilder, field }: FieldAndBuilder) => {
  
  let update = false;
  const state = { ...formBuilder.builderState, editorOpen: true };

  if(!formBuilder.builderState.editorOpen) {
    state.editorOpen = true;
    update = true;
  }

  if (formBuilder.builderState.selectedField !== field.key) {
    state.selectedField = field.key as ID;
    update = true;
  }

  if(update) {
    formBuilder.setBuilderState(state);
  }
}

export const getFieldIndex = (fb: FieldAndBuilder) => fb.formBuilder.fields.findIndex((f) => f.id == fb.field.id)

const getMaxWidthBySpan = (span: number) => {
  switch (span) {
    case 0: return "w-[13rem]";
    case 1: return "w-[13rem]";
    case 2: return "w-[13rem]";
    case 3: return "w-[13rem]";
    case 4: return "w-[13rem]";
    case 5: return "w-[13rem]";
    // case 6: return "m-w-[26rem]";
    // case 7: return "m-w-[26rem]";
    // case 8: return "m-w-[26rem]";
    // case 9: return "m-w-[26rem]";
    // case 10: return "m-w-[39rem]";
    // case 11: return "m-w-[39rem]";
    // case 12: return "m-w-[39rem]";
    // default: return "m-w-[13rem]";

    case 6: return  "w-[13rem]";
    case 7: return  "w-[13rem]";
    case 8: return  "w-[13rem]";
    case 9: return  "w-[13rem]";
    case 10: return "w-[13rem]";
    case 11: return "w-[13rem]";
    case 12: return "w-[13rem]";
    default: return "w-[13rem]";
  }
}

const getWidthBySpanAndSize = (span: number, size: number) => {
  return getMaxWidthBySpan(span >size ? span : size);
}

const fieldValue = (field: FieldDefinition, fieldProps: ControllerRenderProps<FieldValues, `dynamicFields.${number}.value`>): string => {
  const value = fieldProps?.value;
  if (value === false) return "No";
  if (value === true) return "Yes";
  if (field.type == "date") return (value as Date).toLocaleString();
  return `${fieldProps?.value.toString()}`
}
export interface FieldComponentProps {
  field: FieldDefinition,
  formBuilder: UseFormBuilderReturn
  fieldProps: ControllerRenderProps<FieldValues, `dynamicFields.${number}.value`>
}
export const FieldComponent: React.FC<FieldComponentProps> = ({
  formBuilder,
  field,
  fieldProps,
}) => (<div className={cn("mt-2 indicator", formBuilder.get(field.key)?.type === "separator" ? "w-full" : getWidthBySpanAndSize(formBuilder.get(field.key)?.span ?? 0, formBuilder.get(field.key)?.size ?? 3))}>
    { (isReadMode({formBuilder, field})) ? <div className={cn("placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/10 border-input flex h-9 w-full min-w-0 rounded-none border-b-1 bg-transparent px-3 py-3 text-base transition-[color,box-shadow] outline-none  pointer-events-none md:text-sm",)}> {fieldValue(field, fieldProps)}</div> : null }
    { (!isReadMode({formBuilder, field}) && formBuilder.get(field.key)?.type === "text")     ? <Input      {...fieldProps}                placeholder={formBuilder.get(field.key)?.placeholder} required={formBuilder.get(field.key)?.required}    /> : null }
    { (!isReadMode({formBuilder, field}) && formBuilder.get(field.key)?.type === "number")   ? <Input      {...fieldProps}  type="number" placeholder={formBuilder.get(field.key)?.placeholder} required={formBuilder.get(field.key)?.required}    /> : null }
    { (!isReadMode({formBuilder, field}) && formBuilder.get(field.key)?.type === "textarea") ? <Textarea   {...fieldProps}                placeholder={formBuilder.get(field.key)?.placeholder} required={formBuilder.get(field.key)?.required}    /> : null }
    { (!isReadMode({formBuilder, field}) && formBuilder.get(field.key)?.type === "date")     ? <Datepicker {...fieldProps} ></Datepicker> : null }
    { (!isReadMode({formBuilder, field}) && formBuilder.get(field.key)?.type === "separator")   ? <Separator className="my-1 w-full" {...fieldProps}></Separator> : null }
    { (!isReadMode({formBuilder, field}) && formBuilder.get(field.key)?.type === "blank")    ? <div className="my-1 w-full" {...fieldProps}></div> : null }
    {/* { (field.type === "select")   ? <Datepicker {...fieldProps}></Datepicker>: null } */}
    {/* { (field.type === "checkbox") ? <Datepicker {...fieldProps}></Datepicker> : null } */}
 </div>);

const DEFAULT_SPAN = 6;
const resolveClassFieldSpan = ({ field, formBuilder}: FieldAndBuilder) => {
  switch(formBuilder.get(field.key)?.span){
    case undefined: return `col-span-${4}`
    case 0: return `col-span-${3}`
    case 1: return `col-span-${3}`
    case 2: return `col-span-${3}`
    case 3: return `col-span-${3}`
    case 4: return `col-span-${6}`
    case 5: return `col-span-${6}`
    case 6: return `col-span-${6}`
    case 7: return `col-span-${6}`
    case 8: return `col-span-${6}`
    case 9: return `col-span-${6}`
    case 10: return `col-span-${12}`
    case 11: return `col-span-${12}`
    case 12: return `col-span-${12}`
    default: return `col-span-${DEFAULT_SPAN}`
  } 
}

const resolveClassFieldBuilderModeSelectedBox = (fb: FieldAndBuilder) => isPopoverOpen(fb.formBuilder) && isSelectedEditorField(fb)
? "selected-field-item outline-(--primary) outline-2 outline-offset-1 hover:outline-offset-2 outline-dashed" :  "";

const resolveClassSelectedFieldBoxHoverBox = (fb: FieldAndBuilder) => isBuilderMode(fb)
? "cursor-pointer hover:outline-2 hover:outline-offset-1 hover:outline-dashed"
: ""

const resolveClassFieldBuilderMode = (fb: FieldAndBuilder) => isBuilderMode(fb)
? [resolveClassFieldBuilderModeSelectedBox(fb), resolveClassSelectedFieldBoxHoverBox(fb)]
: []

const fieldItemClasses = (fb: FieldAndBuilder) => [
  "indicator rounded-sm col-span-6 w-full p-4",
  resolveClassFieldBuilderMode(fb),
  resolveClassFieldSpan(fb)
]

export interface FieldComponentProps {
  formBuilder: UseFormBuilderReturn
  field: FieldDefinition,
}
export const FormFieldElement: React.FC<{ fb: FieldAndBuilder }> = ({fb}) => {
  return (
  <div
    key={fb.field.id}
    className={cn(fieldItemClasses(fb))}
    onClick={isBuilderMode(fb) ? () => openEditorEventProps(fb) : () => {}}
  >
      <FormItemComponent fb={fb} />
    { isSelectedEditorField(fb) ? <PopoverAnchor className="indicator-item indicator-center indicator-bottom"> </PopoverAnchor> :  null }
  </div>
)};

export const isBuilderMode = (fb: OptionalFieldAndBuilder) => fb.formBuilder.builderState.mode === "builder";
export const isInputMode = (fb: OptionalFieldAndBuilder) => fb.formBuilder.builderState.mode === "input";
export const isReadMode = (fb: OptionalFieldAndBuilder) => fb.formBuilder.builderState.mode === "view";

export const FormFieldControl: React.FC<{ fb: FieldAndBuilder }> =({ fb }) => (
  <FormControl>
    <Controller
      key={fb.field.id}
      control={fb.formBuilder.form.control}
      name={`dynamicFields.${getFieldIndex(fb)}.value`}
      render={({ field }) => <FieldComponent formBuilder={fb.formBuilder} field={fb.field} fieldProps={field} />}
    />
  </FormControl>
);

export const FormItemComponent: React.FC<{ fb: FieldAndBuilder }> =({ fb }) => (
  <FormItem className={cn("w-full", isBuilderMode(fb) ? "pointer-events-none" : "")} key={fb.field.id}>
    <FormLabel className="capitalize">
      {fb.formBuilder.get(fb.field.key)?.question ?? fb.formBuilder.get(fb.field.key)?.label}
      {fb.formBuilder.get(fb.field.key)?.required ? <span className="text-error">*</span>: null } </FormLabel>
    <FormFieldControl fb={fb} />
    <FormDescription>{fb.formBuilder.get(fb.field.key)?.description}</FormDescription>
    <FormMessage />
  </FormItem>
);

export const FormSubmitButtonComponent: React.FC<{ formBuilder: UseFormBuilderReturn }> =({ formBuilder}) => (
  <Button type="submit" onClick={() => formBuilder.submit()}> Submit </Button>
);

export const FormHeaderComponent: React.FC<{ formBuilder: UseFormBuilderReturn }> =({ formBuilder}) => (<>
  <FormLabel className="text-base/7 capitalize">{formBuilder.form.name || 'Form'}</FormLabel>
  <FormDescription></FormDescription>
</>);

export const FormFieldsGridComponent: React.FC<{ formBuilder: UseFormBuilderReturn }> =({ formBuilder}) => {
  return (<>
    <div className="mt-10 grid grid-cols-12 gap-2">
      <Separator className="w-full grid col-span-12" />
      { formBuilder.fields.map((field) => (<FormFieldElement key={field.id} fb={{ formBuilder, field }}/> )) }
      { isBuilderMode({ formBuilder }) ? <div className="flex col-span-9 h-20 gap-2  justify-center items-center">
          <Button onClick={() => formBuilder.insert(fieldTemplates.text())}>+</Button>
        </div> : null
      }
    </div>
</>)
};

export interface FormRendererProps {
  name: string;
  form: UseFormReturn;
  formBuilder: UseFormBuilderReturn;
}
const FormRenderer: React.FC<FormRendererProps> = ({ formBuilder }) => {
  return (
    <Popover open={formBuilder.builderState.editorOpen} onOpenChange={(open: boolean) => formBuilder.setBuilderState({...formBuilder.builderState, editorOpen: open})}>

      <Form {...(formBuilder.form)}>
        <div className="space-y-12">
          <div className="pb-12">
            <FormHeaderComponent formBuilder={formBuilder} />
            <FormFieldsGridComponent formBuilder={formBuilder} />
          </div>
        </div>
      </Form>
      <EditorPopoverContent formBuilder={formBuilder}/>
    </Popover>
  );
};

export { FormRenderer };
