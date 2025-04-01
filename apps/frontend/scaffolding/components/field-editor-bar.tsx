// import { Button } from "@/components/ui/button";
// import { useAddFieldDialog } from "@/components/ui/dialog";
// import React from "react";




// export async function onAddField(
//   config: FieldDefinition,
//   callback: AddFieldCallbackFn,
//   openDialog?: (fieldConfig: FieldDefinition) => Promise<FieldDefinition | null>,
// ) {
//   const name = `${config.label || "Field"}`;

//   const result: FieldDefinition = openDialog
//       ? (await openDialog(config)) as FieldDefinition
//       : ({
//           type: "text",
//           ...config,
//           id:  nanoid(),
//           key:`field_${nanoid()}`,
//           label: name,
//         });
//   if (!result) return;
//   await callback(result);
// }  

// export type AddFieldCallbackFn = (config: FieldDefinition) => never

// interface FormEditorBarProps {
//   callback: AddFieldCallbackFn;
// }

// const FormEditorBar: React.FC<FormEditorBarProps> = ({ callback }) => {
//   const { openDialog, Dialog } = useAddFieldDialog();

//   return (
//     <div className="flex justify-between flex-row">
//     <div>
//       <i data-lucide="x"></i>
//       <Button onClick={() => onAddField(fieldTemplates.text(), callback, openDialog)}>
//         +Text
//       </Button>
//       <Button onClick={() => onAddField(fieldTemplates.textArea(), callback, openDialog)}>
//         +Text Area
//       </Button>
//       <Button onClick={() => onAddField(fieldTemplates.date(), callback, openDialog)}>
//         +Date
//       </Button>
//       {Dialog}
//     </div>
//   </div>
// )
  
// }

// export { FormEditorBar }