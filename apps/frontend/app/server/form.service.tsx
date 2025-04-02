import { FormBuilder } from "@/lib/form/form.metadata";
import { UUID } from "crypto";
import { FormPayload } from "forms";


export const saveConfig = async (f: FormBuilder): Promise<boolean> => {  
  const payload: FormPayload = {
    id: f.id as (UUID),
    name: f.name,
    fields: f.fields.map((field) => f.get(field.key)).filter((field) => field !== undefined),
  }

  console.log('Saving Form:', payload);
  const data = await fetch('http://localhost:8080/form/save',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: 
    JSON.stringify(payload),  
  }
  )
  const response = (await data.json()).data;

  if (!f.id) {
    f.setId(response.id);
  }

  return true;
};

export const loadConfig = async (f: FormBuilder, id: string) => {
  const response = await fetch('http://localhost:8080/form/' + id);
  const json = await response.json()
  const payload = json.data as FormPayload;
  f.setId(payload.id);
  f.setName(payload.name);
  
  f.load(payload.fields);
  return payload;
}
