import React from "react";
import { Form } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Popover } from "../../ui/popover";
import { UseFormBuilderReturn } from "@/lib/form/hooks/useFormBuilder/useFormBuilder";
import { FieldAndBuilder } from "@/lib/form/form.metadata";
import { EditorPopoverContent } from "../editor/field-editor";
import { FormHeaderComponent } from "./form-header";
import { FormFieldsGridComponent } from "./form-grid";

export const getFieldIndex = (fb: FieldAndBuilder) => fb.formBuilder.fields.findIndex((f) => f.id == fb.field.id)

export const FormSubmitButtonComponent: React.FC<{ formBuilder: UseFormBuilderReturn }> =({ formBuilder}) => (
  <Button type="submit" onClick={() => formBuilder.submit()}> Submit </Button>
);

export interface FormBuilderComponent {
  name: string;
  form: UseFormReturn;
  formBuilder: UseFormBuilderReturn;
}
const FormBuilderComponent: React.FC<FormBuilderComponent> = ({ formBuilder }) => {
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

export { FormBuilderComponent };
