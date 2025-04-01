// import {  useState } from "react";

// import { Input } from "@/components/ui/input";
// import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
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
// import { DynamicIcon } from "lucide-react/dynamic";

// function FieldEditorOld() {
//   const [inputValue, setInputValue] = useState("");

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

//   return <>{makeFieldEditor()}</>;
// }

// export { FieldEditor };
