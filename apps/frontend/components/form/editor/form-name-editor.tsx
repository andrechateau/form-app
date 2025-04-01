import React, { ChangeEventHandler } from "react";
import { Input } from "@/components/ui/input";
import { BuilderProps, FormBuilder } from "@/lib/form/form.metadata";
import { cn } from "@/lib/utils";


export const FormNameEditor = ({ formBuilder }: BuilderProps)=> {
  const onchange: ChangeEventHandler<HTMLInputElement> = (event) => {
    formBuilder.setName(event.target.value)
  }

  return (
    <Input className={cn(
      "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30",
      "border-none hover:border hover:border-input focus:border focus:border-input",
      "bg-transparent hover:shadow-xs focus:hover:",
      "appearance-none !text-2xl w-full",
      ""
    )} value={formBuilder.name} onChange={onchange}></Input>
  )
};

