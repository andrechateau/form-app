import React, { ChangeEventHandler } from "react";
import { Input } from "@/components/ui/input";
import { BuilderProps, FormBuilder } from "@/lib/form/form.metadata";


export const FormNameEditor = ({ formBuilder }: BuilderProps)=> {
  const onchange: ChangeEventHandler<HTMLInputElement> = (event) => {
    formBuilder.setName(event.target.value)
  }

  return (
    <Input className={cn("appearance-none !text-2xl w-full")} value={formBuilder.name} onChange={onchange}></Input>
  )
};

