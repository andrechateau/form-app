import React from "react";
import { Form } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Popover } from "../../ui/popover";
import { isInputMode, UseFormBuilderReturn } from "@/lib/form/hooks/useFormBuilder/useFormBuilder";
import { FieldAndBuilder, FormBuilder } from "@/lib/form/form.metadata";
import { EditorPopoverContent } from "../editor/field-editor";
import { FormHeaderComponent } from "./form-header";
import { FormFieldsGridComponent } from "./form-grid";
import { submit } from "@/app/server/record.service";
import { toast } from "sonner"

export const getFieldIndex = (fb: FieldAndBuilder) => fb.formBuilder.fields.findIndex((f) => f.id == fb.field.id)
export const submitForm = async (f: FormBuilder) => {
  await submit(f);
  toast('Form Submitted!')
}

export const FormSubmitButtonComponent: React.FC<{ formBuilder: UseFormBuilderReturn }> =({ formBuilder}) => {
  return (
  <Button type="submit" onClick={() => submit(formBuilder)}> Submit </Button>
)};

export interface FormBuilderComponent {
  name: string;
  form: UseFormReturn;
  formBuilder: UseFormBuilderReturn;
}
const FormBuilderComponent: React.FC<FormBuilderComponent> = ({ formBuilder }) => {
  return (
    <Popover open={formBuilder.builderState.editorOpen} onOpenChange={(open: boolean) => formBuilder.setBuilderState({...formBuilder.builderState, editorOpen: open})}>
      <Form {...(formBuilder.form)} >
        <div className="space-y-12 h-full relative">
          <div className="pb-12">
            <FormHeaderComponent formBuilder={formBuilder} />
            <FormFieldsGridComponent formBuilder={formBuilder} />
            <div className="flex justify-end content-end mt-auto absolute bottom-0 left-0 w-full  p-2 text-center">
              { isInputMode({formBuilder}) ? <FormSubmitButtonComponent formBuilder={formBuilder} /> : null }
            </div>
          </div>
        </div>
      </Form>
      <EditorPopoverContent formBuilder={formBuilder}/>
    </Popover>
  );
};

export { FormBuilderComponent };
