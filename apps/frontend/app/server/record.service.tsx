import { FormBuilder } from "@/lib/form/form.metadata";
import { RecordPayload, FieldDefinition } from "forms";

  export const submit = async (f: FormBuilder) => {
    const values = f.form.getValues();
    if(!f.id || !values) return null;
    
    const recordPayload: RecordPayload = {
      formId: f.id,
      data: values.dynamicFields.map((field: FieldDefinition) => ({
        id: null,
        question: field.question,
        answer: (field as any).value,
        sourceRecordId: null,
      }))
    } as RecordPayload;

    const data = await fetch('http://localhost:8080/record/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 
      JSON.stringify(recordPayload),  
    }
  )
  
  const response = (await data.json()).data;

  if (!f.id) {
    f.setId(response.id);
  }

  f.form.reset();
  
  return true;
}