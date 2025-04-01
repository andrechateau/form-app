import { FormBuilder } from "@/lib/form/form.metadata";
import { FormFieldElement } from "./form-item";
import { isBuilderMode } from "@/lib/form/hooks/useFormBuilder/useFormBuilder";
import { Button } from "@/components/ui/button";
import { fieldTemplates } from "forms";
import { Separator } from "@/components/ui/separator";

export const FormFieldsGridComponent: React.FC<{ formBuilder: FormBuilder }> =({ formBuilder}) => {
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
