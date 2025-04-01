import { useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  CalendarDays,
  LayoutTemplate,
  ListTodo,
  ChevronsUpDown,
  Ruler,
  Text,
  TextCursorInput,
  CopyCheck,
  SquareCheck,
  PenLine,
  EyeOff,
  PenOff,
  Asterisk,
  TrashIcon,
  SquareDashed,
  SquareSplitVertical,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Toggle } from "@/components/ui/toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, UseFormReturn } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { UseFormBuilderReturn } from "@/lib/form/hooks/useFormBuilder/useFormBuilder";
import { PopoverContent } from "@/components/ui/popover";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BuilderProps, FieldAndBuilder } from "@/lib/form/form.metadata";
import { FieldType, ID } from "forms";

export const isPopoverOpen = (formBuilder: UseFormBuilderReturn) =>
  formBuilder.builderState.editorOpen;

export const isSelectedEditorField = ({
  formBuilder,
  field,
}: FieldAndBuilder) => formBuilder.builderState.selectedField === field?.key;

export const EditorPopoverContent: React.FC<{
  formBuilder: UseFormBuilderReturn;
}> = ({ formBuilder }) => {
  return (
    <PopoverContent className="flex w-min p-0 h-min ">
      <FieldEditor formBuilder={formBuilder} />
    </PopoverContent>
  );
};

export const openEditorEventProps = ({ formBuilder, field }: FieldAndBuilder) => {
  
  let update = false;
  const state = { ...formBuilder.builderState, editorOpen: true };

  if(!formBuilder.builderState.editorOpen) {
    state.editorOpen = true;
    update = true;
  }

  if (formBuilder.builderState.selectedField !== field.key) {
    state.selectedField = field.key as ID;
    update = true;
  }

  if(update) {
    formBuilder.setBuilderState(state);
  }
}


export const FieldEditorCollapsibleTrigger = () => (
  <div className="indicator-item indicator-center indicator-bottom">
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="icon">
        <ChevronsUpDown className="rounded-full h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>
);

export const FieldEditorBar: React.FC<{
  formBuilder: UseFormBuilderReturn;
  form: UseFormReturn;
}> = ({ form }) => {
  return (
      <div className="col-span-12 indicator">
        <div className="indicator">
          {/* <div className="indicator-item indicator-start w-0">Label </div> */}
          {/* < Toggle className="indicator-item indicator-center w-0" value="hidden"><EyeOff/></Toggle> */}
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => ( 
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    name="question"
                    className="rounded-r-xs"
                    placeholder="Question"
                  />
                </FormControl>
              </FormItem> 
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Toggle
                  {...field}
                  name="required"
                  pressed={field.value}
                  onPressedChange={field.onChange}
                  className="border rounded-xs"
                >
                  <Asterisk />
                </Toggle>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue="md"
                  {...field}
                  value="md"
                  disabled
                >
                  <SelectTrigger className="rounded-l-xs rounded-r-none">
                    <SelectValue placeholder="md" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Input Size</SelectLabel>
                      <SelectItem value="xs">xs</SelectItem>
                      <SelectItem value="sm">sm</SelectItem>
                      <SelectItem value="md">md</SelectItem>
                      <SelectItem value="lg">lg</SelectItem>
                      <SelectItem value="xl">xl</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <SelectTrigger className="rounded-l-none">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Type</SelectLabel>
                      <SelectItem value="text">
                        <TextCursorInput />
                      </SelectItem>
                      <SelectItem value="textarea">
                        <Text />
                      </SelectItem>
                      <SelectItem value="number">
                        <Ruler />
                      </SelectItem>
                      <SelectItem value="date">
                        <CalendarDays />
                      </SelectItem>
                      <SelectItem disabled value="choice">
                        <ListTodo />
                      </SelectItem>
                      <SelectItem value="separator">
                        <SquareSplitVertical  />
                      </SelectItem>
                      <SelectItem value="blank">
                        <SquareDashed />
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
      </div>

  );
};

const removeSelectedItem = ( formBuilder: UseFormBuilderReturn) => {
  const field = formBuilder.get(formBuilder.builderState.selectedField);

  if(field) {
    formBuilder.remove(field.key)
  }
}

export const FieldEditorDrawer: React.FC<{
  formBuilder: UseFormBuilderReturn;
  form: UseFormReturn;
}> = ({ formBuilder, form }) => {
  return (
    <CollapsibleContent className="space-y-2">
      <Card className="flex p-0 gap-0 rounded-sm">
        <Tabs defaultValue="properties" orientation="vertical">
          <TabsList className="w-full" orientation="vertical">
            <TabsTrigger orientation="vertical" value="properties">
              Properties
            </TabsTrigger>
            <TabsTrigger orientation="vertical" value="rules">
              Constraints
            </TabsTrigger>
            <TabsTrigger disabled orientation="vertical" value="type">
              Type
            </TabsTrigger>
            <TabsTrigger orientation="vertical" disabled value="options">
              Options
            </TabsTrigger>
            <TabsTrigger orientation="vertical" disabled value="options">
              Formulas
            </TabsTrigger>
          </TabsList>
          <div className="h-60 w-full">
            <TabsContent
              className="grid grid-cols-5 rounded-sm gap-1 p-1"
              value="properties"
            >
              <div className="grid col-span-5 grid-cols-2 w-full">
                <div className="flex items-center space-x-2">
                  <ToggleGroup
                    className="col-span-3"
                    type="single"
                    size="sm"
                    disabled
                  >
                    <ToggleGroupItem value="normal">
                      <PenLine />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="readonly">
                      <PenOff />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="hidden">
                      <EyeOff />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox disabled id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Submit Answer
                  </label>
                  <Button
                    className="text-error cursor-pointer"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSelectedItem(formBuilder)}
                    ><TrashIcon/></Button>
                </div>
              </div>

              <div className="col-span-5 grid grid-cols-2 my-2">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => ( 
                <FormItem className="col-span-3">
                  <FormControl>
                    <Textarea
                      className="h-6"
                      {...field}
                      placeholder="Description"
                      
                    />
                  </FormControl>
                </FormItem> 
                )}
                />
              </div>

              <div className="col-span-5 grid gap-2 grid-cols-2 ">
              <FormField
                control={form.control}
                name="placeholder"
                render={({ field }) => ( 
                <FormItem className="col-span-1">
                  <FormControl>
                    <Input
                      {...field}
                      className="h-7 w-full"
                      placeholder="Placeholder"
                    />
                  </FormControl>
                </FormItem> 
                )}
                />

                <Input
                  disabled
                  className="col-span-1 h-7"
                  placeholder="Default"
                />
              </div>
              <Separator className="col-span-5  my-1" />
              <Label className="col-span-2">Input Size: </Label>
              <ToggleGroup
                className="col-span-3"
                type="single"
                size="sm"
                disabled
              >
                <ToggleGroupItem value="xs">xs</ToggleGroupItem>
                <ToggleGroupItem value="sm">sm</ToggleGroupItem>
                <ToggleGroupItem value="md">md</ToggleGroupItem>
                <ToggleGroupItem value="lg">lg</ToggleGroupItem>
                <ToggleGroupItem value="xl">xl</ToggleGroupItem>
              </ToggleGroup>
              <Label className="col-span-2">Field Span: </Label>
              <FormField
                control={form.control}
                name="span"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormControl>
                      <Slider
                        {...field}
                        // disabled
                        onValueChange={(evt: unknown) => field.onChange(Array.isArray(evt) ? evt[0] : evt)}
                        // onChange={(evt: unknown) => { console.log(evt); field.onChange(evt); }}
                        value={[field.value ?? 3]}
                        defaultValue={[6]}
                        min={1}
                        max={12}
                        step={1}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </TabsContent>
            <TabsContent
              className="grid grid-cols-5 rounded-sm gap-1 p-1"
              value="rules"
            >
              <div className="col-span-5 grid gap-2 grid-cols-6">
                <div className="flex items-center space-x-2">
                  <FormField
                    control={form.control}
                    name="required"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div>
                            <Checkbox
                                {...field}
                                name="required"
                                checked={field.value}
                                onCheckedChange={field.onChange}

                            />
                            <label
                              htmlFor="terms"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >Required</label>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Separator className="col-span-5  my-4" />
              <div className="col-span-5 grid gap-2 grid-cols-2 mb-2">
                <Input
                  disabled
                  className="col-span-1 h-7"
                  placeholder="Min Value"
                />
                <Input
                  disabled
                  className="col-span-1 h-7"
                  placeholder="Max Value"
                />
              </div>
              <div className="col-span-5 grid gap-2 grid-cols-2">
                <Input
                  disabled
                  className="col-span-1 h-7"
                  placeholder="Min Length"
                />
                <Input
                  disabled
                  className="col-span-1 h-7"
                  placeholder="Max Length"
                />
              </div>
              <Separator className="col-span-5  my-3" />
              <div className="col-span-5 grid gap-2 grid-cols-5">
                <Label className="col-span-3">Regex Pattern: </Label>
                <Input disabled className="col-span-2 h-7" placeholder="pattern" />
                <Label className="col-span-3">Increment Step: </Label>
                <Input disabled className="col-span-2 h-7" placeholder="step" />
              </div>
            </TabsContent>
            <TabsContent value="options">
              <Card className=" rounded-sm">
                <div className="col-span-1">
                  <Label>choice </Label>
                  <ToggleGroup className="col-span-3" type="single" size="sm">
                    <ToggleGroupItem value="xs">
                      <SquareCheck /> Single
                    </ToggleGroupItem>
                    <ToggleGroupItem value="sm">
                      <CopyCheck /> Multiple
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="formulas">
              <Card className=" rounded-sm">
                <div className="col-span-1">
                  <Label>WIP </Label>
                  <Label>field </Label>
                  <ToggleGroup className="col-span-3" type="single" size="sm">
                    <ToggleGroupItem value="xs">
                      <SquareCheck /> Input{" "}
                    </ToggleGroupItem>
                    <ToggleGroupItem value="sm">
                      <CopyCheck /> Output{" "}
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <Label>variable </Label>
                  <ToggleGroup className="col-span-3" type="single" size="sm">
                    <ToggleGroupItem value="xs">
                      <SquareCheck /> Input{" "}
                    </ToggleGroupItem>
                    <ToggleGroupItem value="sm">
                      <CopyCheck /> Output{" "}
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <Label>formulas </Label>
                  <ToggleGroup className="col-span-3" type="single" size="sm">
                    <ToggleGroupItem value="xs">
                      <SquareCheck /> Input{" "}
                    </ToggleGroupItem>
                    <ToggleGroupItem value="sm">
                      <CopyCheck /> Output{" "}
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="type">
              <Card className="flex p-0 gap-0 rounded-sm">
                <Card className="flex flex-row p-0 rounded-sm">
                  <Toggle>
                    <TextCursorInput />
                  </Toggle>
                  <Toggle>
                    <Ruler />
                  </Toggle>
                  <Toggle>
                    <CalendarDays />
                  </Toggle>
                  <Toggle>
                    <ListTodo />
                  </Toggle>
                  <Toggle>
                    <LayoutTemplate />
                  </Toggle>
                </Card>
                <Card className="p-0 gap-2  rounded-sm">
                  <ScrollArea className="h-50 rounded-md border">
                    <Card className="p-0 gap-0 rounded-sm">
                      <CardContent>
                        <Label> Date Field</Label>
                        {/* <Datepicker /> */}
                        <Input type="date"></Input>
                      </CardContent>
                    </Card>
                    <Card className=" p-0 gap-0 rounded-sm">
                      <CardContent>
                        <Label> Text Field</Label>
                        <Input />
                      </CardContent>
                    </Card>
                    <Card className=" p-0 gap-0 rounded-sm">
                      {" "}
                      <Input />{" "}
                    </Card>
                    <Card className=" p-0 gap-0 rounded-sm">
                      {" "}
                      <Input type="checkbox" />{" "}
                    </Card>
                    <Card className=" p-0 gap-0 rounded-sm">
                      {" "}
                      <Input type="number" />{" "}
                    </Card>
                  </ScrollArea>
                </Card>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </Card>
    </CollapsibleContent>
  );
};

export const formSchema = z.object({
  label: z.string().optional(),
  required: z.boolean().optional(),
  type: z.string().optional(),
  question: z.string().optional(),
  description: z.string().optional(),
  default: z.string().optional(),
  placeholder: z.string().optional(),
  options: z.array(z.object({ label: z.string(), value: z.string()})).optional(), //   options?: { label: string; value: string }[];    
  row: z.number().optional(),
  col: z.number().optional(),
  span: z.number().optional(),
  size: z.number().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;

const FieldEditor: React.FC<{ formBuilder: UseFormBuilderReturn }> = ({
  formBuilder,
}) => {

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label:"Question",
      required: false,
      type: "text",
      question: "",
      description: "",
      options: [],
      row: 0,
      col: 0,
      span: 6,
      size: 0,
    },
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      const field = formBuilder.get(formBuilder.builderState.selectedField);
      console.log('values', values)
      if (field) {
        formBuilder.update({
          ...field,
          label: values.question ?? field.label,
          question: values.question ?? field.question,
          required: values.required ?? field.required ?? false,
          type: (values?.type ?? field?.type ?? "text") as FieldType,
          description: values.description ?? field.description ?? "",
          default: values.default ?? field.default ?? "",
          placeholder: values.placeholder ?? field.placeholder ?? "",
          row: values.row ?? field.row ?? 0,
          col: values.col ?? field.col ?? 0,
          span: values.span ?? field.span ?? 6,
          size: values.size ?? field.size ?? 0,
          // options: values.options ?? field.options ?? [],
          // zodSchema:
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [formBuilder, form, form.watch]);
  
  useEffect(() => {
      const field = formBuilder.get(formBuilder.builderState.selectedField);

      if (field) {
        form.setValue('question', field.question);
        form.setValue('label', field.label);
        form.setValue('required', field.required);
        form.setValue('type', field.type);
        form.setValue('description', field.description);
        form.setValue('default', field.default);
        form.setValue('placeholder', field.placeholder);
        form.setValue('row', field.row);
        form.setValue('col', field.col);
        form.setValue('span', field.span);
        form.setValue('size', field.size);
        // options: values.options ?? field.options ?? [],
        // zodSchema:
      };

  }, [formBuilder.builderState.selectedField]);
    
  return (
      <Collapsible>
        <Form {...form}>
          <Card className="w-96 p-0 gap-0 m-auto">
            <div className="grid grid-cols-12 p-2 gap-0 rounded-sm indicator">
              <FieldEditorBar formBuilder={formBuilder} form={form}/>
              <FieldEditorCollapsibleTrigger />
            </div>
            <FieldEditorDrawer formBuilder={formBuilder} form={form} />
          </Card>
        </Form>
      </Collapsible>
  );
};

export { FieldEditor };
