const saveConfig = () => {
  // console.log('Saving Config', form.getValues())
  // const fieldSchemas: Record<string, FieldDefinitionProperties> = {};
  // fields
  // .map((f) => get(f.key))
  // .filter((f) => f !== undefined)
  // .forEach((f) => (
  //   fieldSchemas[f.key] = {
  //   key: f.key,
  //   question: f.question,
  //   label: f.label,
  //   type: f.type,
  //   required: f.required,
  //   description: f.description ?? "",
  //   placeholder: f.description ?? "",
  //   default: f.default ?? "",
  //   row: f.row,
  //   col: f.col,
  //   span: f.span,
  //   size: f.size,
  //   options: f.options ?? [],
  // }));
  
  // const formSchema = {
  //   id: null,
  //   name: "name",
  //   fields: JSON.stringify(fieldSchemas)
  // }
  // console.log('Saving Config Schema:', formSchema)

};

const loadConfig = () => {
  // const sample = {
  //   id: null,
  //   name: "name",
  //   fields: "{\"Field_o8Ecpiln8mvUu-JvFNfzN\":{\"key\":\"Field_o8Ecpiln8mvUu-JvFNfzN\",\"question\":\"One Field\",\"label\":\"One Field\",\"type\":\"text\",\"required\":false,\"description\":\"\",\"default\":\"\",\"row\":0,\"col\":0,\"span\":6,\"size\":0,\"options\":[]},\"Field_TULYdu7pbLbqecP975bZk\":{\"key\":\"Field_TULYdu7pbLbqecP975bZk\",\"question\":\"Even another\",\"label\":\"Even another\",\"type\":\"date\",\"required\":false,\"description\":\"\",\"default\":\"\",\"row\":0,\"col\":0,\"span\":6,\"size\":0,\"options\":[]},\"Field_BeDmjr-eCo8JjnoA6Jb7N\":{\"key\":\"Field_BeDmjr-eCo8JjnoA6Jb7N\",\"question\":\"More one Field\",\"label\":\"More one Field\",\"type\":\"date\",\"required\":false,\"description\":\"\",\"default\":\"\",\"row\":0,\"col\":0,\"span\":6,\"size\":0,\"options\":[]},\"Field_pIL42XjCc4UDxSUJdOcus\":{\"key\":\"Field_pIL42XjCc4UDxSUJdOcus\",\"question\":\"Other Field\",\"label\":\"Other Field\",\"type\":\"date\",\"required\":false,\"description\":\"\",\"default\":\"\",\"row\":0,\"col\":0,\"span\":6,\"size\":0,\"options\":[]}}"
  // };
  // const fieldSchema = JSON.parse(sample.fields) as Record<string, FieldDefinitionProperties>;

  // form.name = sample.name;
  // load(Object.values(fieldSchema));
}


export const toJSONSchema = () => {}
// (form: Form): object => {
  // return {
  //   title: form.name,
  //   type: "object",
  //   properties: form.fields.reduce((properties, field) => {
  //     properties[field.name] = {
  //       type: field.type,
  //       ...(field.required ? { "minLength": 1 } : {})
  //     };
  //     return properties;
  //   }, {}),
  //   required: form.fields.filter(f => f.required).map(f => f.name)
  // };
// };

export const fromJSONSchema = () => {}
  // = (jsonSchema: object): Form => {
  // // A basic implementation; You may need to enhance this based on your needs
  // const { title, properties, required } = jsonSchema as any;
  // const fields: FormField[] = Object.keys(properties).map(name => ({
  //   name,
  //   type: properties[name].type,
  //   required: required.includes(name)
  // }));

  // return {
  //   id: "",  // You can enhance this based on your requirements
  //   name: title,
  //   fields
  // };
// };
