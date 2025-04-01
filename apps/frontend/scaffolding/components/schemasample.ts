import { IconName } from "lucide-react/dynamic";
/*
* These are code from some explorations and other approaches during my scaffolding.
* Keeping it here as they might be useful in the future. They need to be adapted to
* some changes to be used in the current implementation, but they may have some useful logic,
* mostly on generating things dynamically according to the field type. These types used here
* are outdated, but the logic is still valid. 
* 
*/
export const sample = {}
export interface ICategory {
  category: string;
  label: string;
  icon: IconName;
}

export interface IType {
  type: string;
  label: string;
  category: ICategory;
  icon: IconName;
}

export const makeCategory = (
  name: string,
  cat: Partial<ICategory>
): ICategory => ({
  category: name,
  label: cat?.label ?? name,
  icon: cat.icon ?? "x",
});

export const makeType = (
  name: string,
  category: ICategory,
  type: Partial<IType>
): IType => ({
  category: category,
  type: name,
  label: type?.label ?? name,
  icon: type.icon ?? category.icon,
});

export const categories = {
  TEXTUAL: makeCategory("textual", { icon: "text-cursor-input" }),
  MEASURE: makeCategory("measure", { icon: "ruler" }),
  TIME: makeCategory("time", { icon: "calendar-days" }),
  CHOICE: makeCategory("choice", { icon: "list-todo" }),
  LAYOUT: makeCategory("layout", { icon: "layout-template" }),
} as const;

export const { TEXTUAL, MEASURE, TIME, CHOICE, LAYOUT } = categories;

export const fieldTypes = {
  text: makeType("text", TEXTUAL, { icon: "text-cursor-input" }),
  multiline: makeType("multiline", TEXTUAL, { icon: "text-cursor-input" }),
  richtext: makeType("richtext", TEXTUAL, { icon: "text-cursor-input" }),
  name: makeType("name", TEXTUAL, { icon: "text-cursor-input" }),
  address: makeType("address", TEXTUAL, { icon: "text-cursor-input" }),
  url: makeType("url", TEXTUAL, { icon: "text-cursor-input" }),
  tel: makeType("tel", TEXTUAL, { icon: "text-cursor-input" }),
  search: makeType("search", TEXTUAL, { icon: "text-cursor-input" }),
  number: makeType("number", MEASURE, { icon: "ruler" }),
  measure: makeType("measure", MEASURE, { icon: "ruler" }),
  quantity: makeType("quantity", MEASURE, { icon: "ruler" }),
  output: makeType("output", MEASURE, { icon: "ruler" }),
  date: makeType("date", TIME, { icon: "calendar-days" }),
  time: makeType("time", TIME, { icon: "calendar-days" }),
  datetime: makeType("datetime", TIME, { icon: "calendar-days" }),
  year: makeType("year", TIME, { icon: "calendar-days" }),
  month: makeType("month", TIME, { icon: "calendar-days" }),
  duration: makeType("duration", TIME, { icon: "calendar-days" }),
  interval: makeType("interval", TIME, { icon: "calendar-days" }),
  checkbox: makeType("checkbox", CHOICE, { icon: "list-todo" }),
  radio: makeType("radio", CHOICE, { icon: "list-todo" }),
  select: makeType("select", CHOICE, { icon: "list-todo" }),
  combobox: makeType("combobox", CHOICE, { icon: "list-todo" }),
  toggle: makeType("toggle", CHOICE, { icon: "list-todo" }),
  space: makeType("space", CHOICE, { icon: "layout-template" }),
  separator: makeType("separator", LAYOUT, { icon: "layout-template" }),
  section: makeType("section", LAYOUT, { icon: "layout-template" }),
} as const;
