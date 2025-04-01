import { FormControl } from "@/components/ui/form";
import { FieldAndBuilder, FormBuilder } from "@/lib/form/form.metadata";
import { Controller, ControllerRenderProps, FieldValues } from "react-hook-form";
import { getFieldIndex } from "./form-builder";
import { isReadMode } from "@/lib/form/hooks/useFormBuilder/useFormBuilder";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Datepicker } from "@/components/ui/datepicker";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { FieldDefinition } from "forms";

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

export const fieldValue = (field: FieldDefinition, fieldProps: ControllerRenderProps<FieldValues, `dynamicFields.${number}.value`>): string => {
  const value = fieldProps?.value;
  if (value === false) return "No";
  if (value === true) return "Yes";
  if (field.type == "date") return (value as Date).toLocaleString();
  return `${fieldProps?.value.toString()}`
}

export interface FieldComponentProps {
  field: FieldDefinition,
  formBuilder: FormBuilder
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