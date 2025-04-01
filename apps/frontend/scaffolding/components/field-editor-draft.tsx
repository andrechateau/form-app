// import {  ChangeEventHandler, RefObject, useEffect, useState } from "react";

// /**
//  * import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

// const ConditionalInput = ({ control, index, field }) => {
//   const value = useWatch({
//     name: "test",
//     control
//   });

//   return (
//     <Controller
//       control={control}
//       name={`test.${index}.firstName`}
//       render={({ field }) =>
//         value?.[index]?.checkbox === "on" ? <Input {...field} /> : null
//       }
//     />
//   );
// };

// function App() {
//   const { control, register } = useForm();
//   const { fields, append, prepend } = useFieldArray({
//     control,
//     name: "test"
//   });

//   return (
//     <form>
//       {fields.map((field, index) => (
//         <ConditionalInput key={field.id} {...{ control, index, field }} />
//       ))}
//     </form>
//   );
// }

//  */
// import { DynamicIcon } from "lucide-react/dynamic";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Separator } from "@/components/ui/separator";

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
// import {
//   CalendarDays,
//   LayoutTemplate,
//   ListTodo,
//   ChevronsUpDown,
//   Ruler,
//   TextCursorInput,
//   CopyCheck,
//   SquareCheck,
//   PenLine,
//   EyeOff,
//   PenOff,
//   Asterisk,
//   X,
// } from "lucide-react";
// // import { RefObject, useRef } from "react";
// // import { ThemeModeToggle } from "@/components/ui/themeModeToggle";
// import React from "react";
// import { Datepicker } from "@/components/ui/datepicker";
// // import { useAddFieldDialog } from "@/components/ui/dialog";
// import {
//   Card,
//   CardContent,
//   // CardDescription,
//   // CardFooter,
//   // CardHeader,
//   // CardTitle,
// } from "@/components/ui/card";
// import { Label } from "@radix-ui/react-label";
// import { Toggle } from "@/components/ui/toggle";
// import { ScrollArea } from "@/components/ui/scroll-area";
// // import { DropdownMenu } from "@/components/ui/dropdown-menu";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectGroup,
// //   SelectItem,
// //   SelectLabel,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// import { Slider } from "@/components/ui/slider";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   TEXTUAL,
//   ICategory,
//   TIME,
//   MEASURE,
//   CHOICE,
//   IType,
//   fieldTypes,
//   LAYOUT,
// } from "@/lib/schemasample";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
// import { UseFieldArrayReturn, useForm, UseFormReturn } from "react-hook-form";
// import { Form, FormControl, FormField, FormItem } from "../ui/form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { IFieldConfig } from "@/app/page";
// import { AddFieldCallbackFn } from "./field-editor-bar";

// export interface FieldEditorProps {
//   name: string;
//   fieldList: RefObject<IFieldConfig[]>;
//   fieldArray: UseFieldArrayReturn;
//   parentForm: UseFormReturn;
//   fieldConfig: IFieldConfig;
//   callbacks: {
//     onAddFieldCallback: AddFieldCallbackFn;
//     onRemoveFieldCallback: AddFieldCallbackFn;
//     onUpdateFieldCallback: AddFieldCallbackFn;
//   };
// }

// const FieldEditor: React.FC<FieldEditorProps> = ({
//   fieldList,
//   parentForm,
//   fieldArray,
//   callbacks,
//   fieldConfig
// }) => {
//   const [inputValue, setInputValue] = useState("");

//     // const formSchema = z.object(convertFieldsToZodSchema(fieldList.current));
  

  

//   function makeToggleGroupItem(type: IType, index: number) {
//     return (
//       <ToggleGroupItem key={`tab-${index}`} value={type.type}>
//         <DynamicIcon name={type.icon} className="h-4 w-4" />
//         {type.label}
//       </ToggleGroupItem>
//     );
//   }

//   function makeCategoryToggleGroup({ category }: ICategory) {
//     return (
//       <ToggleGroup type="single">
//         {Object.values(fieldTypes)
//           .filter(({ category: type }) => type.category == category)
//           .map(makeToggleGroupItem)}
//       </ToggleGroup>
//     );
//   }

//   function makeTabsContent(category: ICategory, index: number) {
//     return (
//       <TabsContent key={`tab-${index}`} value={category.category}>
//         {makeCategoryToggleGroup(category)}
//       </TabsContent>
//     );
//   }

//   function makeTabsTabsContentList(categories: ICategory[]) {
//     return categories.map(makeTabsContent);
//   }

//   function makeTabsTrigger({ category, icon }: ICategory, index: number) {
//     return (
//       <TabsTrigger key={`tab-${index}`} value={category}>
//         <DynamicIcon name={icon} />
//       </TabsTrigger>
//     );
//   }

//   function makeTabsTriggerList(categories: ICategory[]) {
//     return categories.map(makeTabsTrigger);
//   }

//   function makeFieldEditor() {
//     const categoriesToShow = [TEXTUAL, MEASURE, TIME, CHOICE, LAYOUT];
//     return (
//       <>
//         <Input
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         {/* 
//     SPAN

//     (INPUT SIZE?)

//     (Move operations <> ^ v)
//     (Add field <> ^ v)
//     */}
//         {makeCategoryTabs(categoriesToShow)}
//       </>
//     );
//   }

//   function makeCategoryTabs(categories: ICategory[]) {
//     return (
//       <Tabs
//         defaultValue={categories[0].category}
//         className="w-[400px]"
//         orientation="vertical"
//       >
//         <TabsList orientation="vertical">
//           {makeTabsTriggerList(categories)}
//         </TabsList>
//         {makeTabsTabsContentList(categories)}
//       </Tabs>
//     );
//   }
//   const formSchema = z.object({
//     label: z.string().min(2, {
//       message: "Username must be at least 2 characters.",
//     }),
//     required: z.boolean(),
//     size: z.enum(["text" , "textarea" , "select" , "date"]),
//     type: z.string(),
//   })
  
//   const form = useForm({
//       resolver: zodResolver(formSchema),
//       defaultValues: {
//         label: fieldConfig?.label ?? "Field",
//         required: false,
//         type: fieldConfig?.type ?? "text",
//       },
//     }
//   );

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values)
//   }

//   // const label = form.watch()
//   // React.useEffect(() => {
//   //   console.log('usefx', label)
//   //   // const subscription = form.watch((value, { name, type }) =>
//   //   //   console.log(value, name, type)
//   //   // )
//   //   // return () => subscription.unsubscribe()
//   // }, [])
//   // const myCallbackFunction = (values: any) => console.log('callback', values);

//   // const onChangeInput = (event: evt ) => { console.log('change', event.target.value); field.onChange(event) }
//   useEffect(() => {
//     const subscription = form.watch((values) => {
//       console.log("Form changed :", values, fieldConfig);
//       // myCallbackFunction(values); // Call your function with updated values
//       callbacks.onUpdateFieldCallback({
//         ...fieldConfig,
//         label: values.label ?? fieldConfig.label,
//         type: values.type ?? fieldConfig.type,
//         size: values.size ?? fieldConfig.size,
//       })
//     });
  
//     return () => subscription.unsubscribe(); // Cleanup on unmount
//   }, [form, form.watch]); // Depend on `watch` so it stays reactive
//     return <>
//   {/* <FormField
//     control={...}
//     name="..."
//     render={() => (
//       <FormItem>
//         <FormLabel />
//         <FormControl>
//         </FormControl>
//         <FormDescription />
//         <FormMessage />
//       </FormItem>
//     )}
//   />
// </Form> */}



//           <Collapsible>
//             <Form {...form}>
//               <Card className="w-96 p-0 gap-0 m-auto">
//                 <div className="grid grid-cols-12 p-2 gap-0 rounded-sm indicator">
//                   <div className="col-span-12 indicator">
//                     <div className="indicator">
//                     {/* <div className="indicator-item indicator-start w-0">Label </div> */}
//                       {/* < Toggle className="indicator-item indicator-center w-0" value="hidden"><EyeOff/></Toggle> */}
//                       <FormField
//                         control={form.control}
//                         name="label"
//                         render={({ field }) => (
//                             <FormItem>
//                               <FormControl>
//                                 <Input {...field} name="label" className="rounded-r-xs" placeholder="Label" />
//                               </FormControl>
//                             </FormItem>
//                           )}
//                         />
//                     </div>
//                     <FormField
//                         control={form.control}
//                         name="required"
//                         render={({ field }) => (
//                             <FormItem>
//                               <FormControl>
//                                 <Toggle {...field} name="required" pressed={field.value} onPressedChange={field.onChange} className="border rounded-xs"><Asterisk /></Toggle>
//                               </FormControl>
//                             </FormItem>
//                           )}
//                         />
//                       <FormField
//                         control={form.control}
//                         name="size"
//                         render={({ field }) => (
//                             <FormItem>
//                               <FormControl>
//                                 <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
//                                   <SelectTrigger className="rounded-l-xs rounded-r-none">
//                                     <SelectValue placeholder="md" />
//                                   </SelectTrigger>
//                                   <SelectContent>
//                                     <SelectGroup>
//                                       <SelectLabel>Input Size</SelectLabel>
//                                       <SelectItem value="apple">xs</SelectItem>
//                                       <SelectItem value="banana">sm</SelectItem>
//                                       <SelectItem value="blueberry">md</SelectItem>
//                                       <SelectItem value="grapes">lg</SelectItem>
//                                       <SelectItem value="pineapple">xl</SelectItem>
//                                     </SelectGroup>
//                                   </SelectContent>
//                                 </Select>
//                               </FormControl>
//                             </FormItem>
//                           )}
//                         />
//                       <FormField
//                         control={form.control}
//                         name="type"
//                         render={({ field }) => (
//                             <FormItem>
//                               <FormControl>
//                                 <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
//                                   <SelectTrigger className="rounded-l-none">
//                                     <SelectValue placeholder="" />
//                                   </SelectTrigger>
//                                   <SelectContent>
//                                     <SelectGroup>
//                                       <SelectLabel>Type</SelectLabel>
//                                       <SelectItem value="text"><TextCursorInput /></SelectItem>
//                                       <SelectItem value="number"><Ruler /></SelectItem>
//                                       <SelectItem value="date"><CalendarDays /></SelectItem>
//                                       <SelectItem value="choice"><ListTodo /></SelectItem>
//                                       <SelectItem value="layout"><LayoutTemplate /></SelectItem>
//                                     </SelectGroup>
//                                   </SelectContent>
//                               </Select>
//                               </FormControl>
//                             </FormItem>
//                           )}
//                         />
//                 </div>
    
//                   {/* <div className="col-span-1 flex flex-row">
//                     <Separator className="mx-1" orientation="vertical" />
//                   </div> */}
//                   <div className="indicator-item indicator-center indicator-bottom">
//                     <CollapsibleTrigger asChild>
//                       <Button variant="ghost" size="icon">
//                         <ChevronsUpDown className="rounded-full h-4 w-4" />
//                       </Button>
//                     </CollapsibleTrigger>
//                   </div>
//                   {/* <div className="indicator-item cursor-pointer"> <Button variant="ghost"><X /></Button></div> */}
//                 </div>
//                 <CollapsibleContent className="space-y-2">
//                   <Card className="flex p-0 gap-0 rounded-sm">
//                     <Tabs defaultValue="properties" orientation="vertical">
//                       <TabsList className="w-full" orientation="vertical">
//                         <TabsTrigger orientation="vertical" value="properties">Properties</TabsTrigger>
//                         <TabsTrigger orientation="vertical" value="rules">Constraints</TabsTrigger>
//                         <TabsTrigger orientation="vertical" value="type">Type</TabsTrigger>
//                         <TabsTrigger orientation="vertical" disabled value="options">Options</TabsTrigger>
//                         <TabsTrigger orientation="vertical" disabled value="options">Formulas</TabsTrigger>
//                       </TabsList>
//                       <div className="h-60 w-full">
//                         <TabsContent className="grid grid-cols-5 rounded-sm gap-1 p-1" value="properties">
//                             <div className="grid col-span-5 grid-cols-2 w-full">
//                               <div className="flex items-center space-x-2">
//                                 <ToggleGroup
//                                   className="col-span-3"
//                                   type="single"
//                                   size="sm"
//                                   disabled
//                                 >
//                                   <ToggleGroupItem value="normal"><PenLine /></ToggleGroupItem>
//                                   <ToggleGroupItem value="readonly"><PenOff  /></ToggleGroupItem>
//                                   <ToggleGroupItem value="hidden"><EyeOff/></ToggleGroupItem>
//                                 </ToggleGroup>
//                               </div>
//                               <div className="flex items-center space-x-2">
//                                 <Checkbox disabled id="terms" />
//                                 <label
//                                   htmlFor="terms"
//                                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                                 >
//                                   Submit Answer
//                                 </label>
//                               </div>
    
//                             </div>
                            
//                             <div className="col-span-5 grid grid-cols-2 my-2" >
//                               <Textarea disabled placeholder="Description" className="col-span-3 h-6"/>
//                             </div>
    
//                             <div className="col-span-5 grid gap-2 grid-cols-2 " >
//                                 <Input disabled className="col-span-1 h-7 w-full" placeholder="Placeholder" />
//                                 <Input disabled className="col-span-1 h-7" placeholder="Default" />
//                             </div>
//                             <Separator className="col-span-5  my-1" />
//                             <Label className="col-span-2">Input Size: </Label>
//                             <ToggleGroup
//                               className="col-span-3"
//                               type="single"
//                               size="sm"
//                               disabled
//                             >
//                               <ToggleGroupItem value="xs">xs</ToggleGroupItem>
//                               <ToggleGroupItem value="sm">sm</ToggleGroupItem>
//                               <ToggleGroupItem value="md">md</ToggleGroupItem>
//                               <ToggleGroupItem value="lg">lg</ToggleGroupItem>
//                               <ToggleGroupItem value="xl">xl</ToggleGroupItem>
//                             </ToggleGroup>
//                             <Label className="col-span-2">Field Span: </Label>
//                             <FormField
//                         control={form.control}
//                         name="size"
//                         render={({ field }) => (
//                             <FormItem>
//                               <FormControl>
//                                 <Slider
//                                   {...field }
//                                   disabled
//                                   onChange={field.onChange}
//                                   value={field?.value}
//                                   className="col-span-3"
//                                   defaultValue={[3]}
//                                   // minStepsBetweenThumbs={1}
//                                   min={0}
//                                   max={6}
//                                   // trackMin={0}
//                                   // trackMax={6}
//                                   step={1}
//                                 />
//                               </FormControl>
//                             </FormItem>
//                             )}
//                           />
//                         </TabsContent>
//                         <TabsContent className="grid grid-cols-5 rounded-sm gap-1 p-1" value="rules">
//                           <div className="col-span-5 grid gap-2 grid-cols-6" >
//                             <div className="flex items-center space-x-2">
//                                 <Checkbox id="terms" />
//                                 <label
//                                   htmlFor="terms"
//                                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                                 >
//                                   Required
//                                 </label>
//                               </div>
//                             </div>
//                             <Separator className="col-span-5  my-4" />
//                             <div className="col-span-5 grid gap-2 grid-cols-2 mb-2" >
//                                 <Input disabled className="col-span-1 h-7" placeholder="Min Value" />
//                                 <Input disabled className="col-span-1 h-7" placeholder="Max Value" />
//                             </div>
//                             <div className="col-span-5 grid gap-2 grid-cols-2" >
//                                 <Input disabled className="col-span-1 h-7" placeholder="Min Length" />
//                                 <Input disabled className="col-span-1 h-7" placeholder="Max Length" />
//                             </div>
//                             <Separator className="col-span-5  my-3" />
//                             <div className="col-span-5 grid gap-2 grid-cols-5" >
//                               <Label className="col-span-3">Regex Pattern: </Label>
//                               <Input className="col-span-2 h-7" placeholder="pattern" />
//                               <Label className="col-span-3">Increment Step: </Label>
//                               <Input className="col-span-2 h-7" placeholder="step" />
//                             </div>
//                         </TabsContent>
//                         <TabsContent value="options">
//                           <Card className=" rounded-sm">
//                             <div  className="col-span-1">
//                               <Label>choice </Label>
//                               <ToggleGroup className="col-span-3" type="single" size="sm" >
//                                 <ToggleGroupItem value="xs"><SquareCheck /> Single</ToggleGroupItem>
//                                 <ToggleGroupItem value="sm"><CopyCheck /> Multiple</ToggleGroupItem>
//                               </ToggleGroup>
//                             </div>
//                           </Card>
//                         </TabsContent>
//                         <TabsContent value="formulas">
//                           <Card className=" rounded-sm">
//                             <div  className="col-span-1">
//                               <Label>WIP </Label>
//                               <Label>field </Label>
//                               <ToggleGroup className="col-span-3" type="single" size="sm" >
//                                 <ToggleGroupItem value="xs"><SquareCheck /> Input </ToggleGroupItem>
//                                 <ToggleGroupItem value="sm"><CopyCheck /> Output </ToggleGroupItem>
//                               </ToggleGroup>
//                               <Label>variable </Label>
//                               <ToggleGroup className="col-span-3" type="single" size="sm" >
//                                 <ToggleGroupItem value="xs"><SquareCheck /> Input </ToggleGroupItem>
//                                 <ToggleGroupItem value="sm"><CopyCheck /> Output </ToggleGroupItem>
//                               </ToggleGroup>
//                               <Label>formulas </Label>
//                               <ToggleGroup className="col-span-3" type="single" size="sm" >
//                                 <ToggleGroupItem value="xs"><SquareCheck /> Input </ToggleGroupItem>
//                                 <ToggleGroupItem value="sm"><CopyCheck /> Output </ToggleGroupItem>
//                               </ToggleGroup>
//                             </div>
//                           </Card>
//                         </TabsContent>
//                         <TabsContent value="type">
//                           <Card className="flex p-0 gap-0 rounded-sm">
//                             <Card className="flex flex-row p-0 rounded-sm">
//                               <Toggle>
//                                 <TextCursorInput />
//                               </Toggle>
//                               <Toggle>
//                                 <Ruler />
//                               </Toggle>
//                               <Toggle>
//                                 <CalendarDays />
//                               </Toggle>
//                               <Toggle>
//                                 <ListTodo />
//                               </Toggle>
//                               <Toggle>
//                                 <LayoutTemplate />
//                               </Toggle>
//                             </Card>
//                             <Card className="p-0 gap-2  rounded-sm">
//                               <ScrollArea className="h-50 rounded-md border">
//                                 <Card className="p-0 gap-0 rounded-sm">
//                                   <CardContent>
//                                     <Label> Date Field</Label>
//                                     <Datepicker />
//                                   </CardContent>
//                                 </Card>
//                                 <Card className=" p-0 gap-0 rounded-sm">
//                                   <CardContent>
//                                     <Label> Text Field</Label>
//                                     <Input />
//                                   </CardContent>
//                                 </Card>
//                                 <Card className=" p-0 gap-0 rounded-sm">
//                                   {" "}
//                                   <Input />{" "}
//                                 </Card>
//                                 <Card className=" p-0 gap-0 rounded-sm">
//                                   {" "}
//                                   <Input type="checkbox" />{" "}
//                                 </Card>
//                                 <Card className=" p-0 gap-0 rounded-sm">
//                                   {" "}
//                                   <Input type="number" />{" "}
//                                 </Card>
//                               </ScrollArea>
//                             </Card>
//                           </Card>
//                         </TabsContent>
//                       </div>
//                     </Tabs>
//                   </Card>
//                 </CollapsibleContent>
    
//               </Card>
//             </Form>
//           </Collapsible>
//   </>;
// }

// export { FieldEditor };
