import { PopoverAnchor } from "@/components/ui/popover";
import { FieldAndBuilder } from "@/lib/form/form.metadata";
import { isPopoverOpen, isSelectedEditorField, openEditorEventProps } from "../editor/field-editor";
import { isBuilderMode } from "@/lib/form/hooks/useFormBuilder/useFormBuilder";
import { FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FormFieldControl } from "./form-field";
import { cn } from "@/lib/utils";

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
    default: return `col-span-${12}`
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

export const FormFieldElement: React.FC<{ fb: FieldAndBuilder }> = ({fb}) => (
  <div
    key={fb.field.id}
    className={cn(fieldItemClasses(fb))}
    onClick={isBuilderMode(fb) ? () => openEditorEventProps(fb) : () => {}}
  >
      <FormItemComponent fb={fb} />
    { isSelectedEditorField(fb) ? <PopoverAnchor className="indicator-item indicator-center indicator-bottom"> </PopoverAnchor> :  null }
  </div>
);

