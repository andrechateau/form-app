"use client";
import { ThemeModeToggle } from "@/components/ui/themeModeToggle";
import React from "react";
import { isBuilderMode, isInputMode, isReadMode, useFormBuilder } from "@/lib/form/hooks/useFormBuilder/useFormBuilder";
import { Card } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { NotebookPen, NotebookText, PencilRuler } from "lucide-react";
import { FormBuilderComponent } from "@/components/form/ui/form-builder";


export default function Home() {
  const formBuilder = useFormBuilder();
  
  return (
    <div className="flex justify-center h-screen w-full">
      <Card className="p-10 pt-2 mt-10 min-w-4xl max-w-5xl ">
        <div>
          <div className="grid grid-cols-12">
              <div className="flex gap-1 col-span-10">
                <Button onClick={() => formBuilder.saveConfig()}> Save Config</Button>
                <Button onClick={() => formBuilder.loadConfig()}> Load Config</Button>
              </div>
              <Button className="flex gap-1 col-span-1" variant="ghost" onClick={() => formBuilder.cycleMode()}>
                { isBuilderMode({ formBuilder }) ?  <PencilRuler /> : null }
                { isInputMode({ formBuilder }) ?  <NotebookPen /> : null }
                { isReadMode({ formBuilder }) ?  <NotebookText /> : null }
              </Button>
              <ThemeModeToggle ></ThemeModeToggle>
              <Separator className="col-span-12 bg-border min-w-4xl w-full  h-[1px] mb-3 mt-3"></Separator>

          </div>
            <FormBuilderComponent
              name="main-form"
              formBuilder={formBuilder}
              form={formBuilder.form}
            />
        </div>
        </Card>
    </div>
  );
}
