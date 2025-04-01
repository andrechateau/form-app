import { FormDescription, FormLabel } from "@/components/ui/form";
import { BuilderProps } from "@/lib/form/form.metadata";
import { isBuilderMode, UseFormBuilderReturn } from "@/lib/form/hooks/useFormBuilder/useFormBuilder";
import { FormNameEditor } from "../editor/form-name-editor";

const FormHeaderLabelContent = ({ formBuilder }: BuilderProps) => isBuilderMode({formBuilder})
    ? <FormNameEditor formBuilder={formBuilder} />
    : formBuilder.name || 'New Form';

const FormHeaderLabel = ({ formBuilder }: BuilderProps) => (
  <FormLabel className="text-2xl capitalize">
    <FormHeaderLabelContent formBuilder={formBuilder} />
  </FormLabel>
);

export const FormHeaderComponent: React.FC<{ formBuilder: UseFormBuilderReturn }> = ({ formBuilder}) => (<>
  <FormHeaderLabel formBuilder={formBuilder} />
  <FormDescription></FormDescription>
</>);