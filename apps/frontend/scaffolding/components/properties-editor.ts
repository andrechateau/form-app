/*
* These are code from some explorations and other approaches during my scaffolding.
* Keeping it here as they might be useful in the future. They need to be adapted to
* some changes to be used in the current implementation, but they may have some useful logic,
* mostly on generating things dynamically according to the field type. These types used here
* are outdated, but the logic is still valid.
* 
*/
// function makeToggleGroup(category: ICategory) {
//   return (
//     <div>
//       type: {category.category}
//       <ToggleGroup type="single">
//         <ToggleGroupItem value="bold" aria-label="Toggle bold">
//           <TextCursorInput className="h-4 w-4" />
//           Text
//         </ToggleGroupItem>
//         <ToggleGroupItem value="italic" aria-label="Toggle italic">
//           <CalendarDays className="h-4 w-4" />
//           Date
//         </ToggleGroupItem>
//         <ToggleGroupItem
//           value="strikethrough"
//           aria-label="Toggle strikethrough"
//         >
//           <Ruler className="h-4 w-4" />
//           Number
//         </ToggleGroupItem>
//         <ToggleGroupItem value="LetterText" aria-label="Toggle LetterText">
//           <LetterText className="h-4 w-4" />
//           LetterText
//         </ToggleGroupItem>

//         {/*
//         <SquareDashed />
//         <TextCursor />
//         <Type />
//         <Asterisk />
//         <LetterText />
//          */}
//       </ToggleGroup>
//     </div>
//   );
// }

// function makeToggleGroupItem(type: IType, index: number) {
//   return (
//     <ToggleGroupItem key={`tab-${index}`} value={type.type}>
//       <DynamicIcon name={type.icon} className="h-4 w-4" />
//       {type.label}
//     </ToggleGroupItem>
//   );
// }

// function makeCategoryToggleGroup({ category }: ICategory) {
//   return (
//     <ToggleGroup type="single">
//       {Object.values(fieldTypes)
//         .filter(({ category: type }) => type.category == category)
//         .map(makeToggleGroupItem)}
//     </ToggleGroup>
//   );
// }

// function makeTabsContent(category: ICategory, index: number) {
//   return (
//     <TabsContent key={`tab-${index}`} value={category.category}>
//       {makeCategoryToggleGroup(category)}
//     </TabsContent>
//   );
// }

// function makeTabsTabsContentList(categories: ICategory[]) {
//   return categories.map(makeTabsContent);
// }

// function makeTabsTrigger({ category, icon }: ICategory, index: number) {
//   return (
//     <TabsTrigger key={`tab-${index}`} value={category}>
//       <DynamicIcon name={icon} />
//     </TabsTrigger>
//   );
// }

// function makeTabsTriggerList(categories: ICategory[]) {
//   return categories.map(makeTabsTrigger);
// }

// function makeFieldEditor() {
//   const categoriesToShow = [TEXTUAL, MEASURE, TIME, CHOICE, LAYOUT];
//   return (
//     <>
//       <Input
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       {/* 
//   SPAN

//   (INPUT SIZE?)

//   (Move operations <> ^ v)
//   (Add field <> ^ v)
//   */}
//       {makeCategoryTabs(categoriesToShow)}
//     </>
//   );
// }

// function makeCategoryTabs(categories: ICategory[]) {
//   return (
//     <Tabs
//       defaultValue={categories[0].category}
//       className="w-[400px]"
//       orientation="vertical"
//     >
//       <TabsList orientation="vertical">
//         {makeTabsTriggerList(categories)}
//       </TabsList>
//       {makeTabsTabsContentList(categories)}
//     </Tabs>
//   );
// }