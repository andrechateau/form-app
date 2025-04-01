/**
 * --------------------------------------------------------
 * WIP! .
 * --------------------------------------------------------
 * This is functional but need to decouple from FieldConfig.
 * I added some functionality to enable you to call a dialog and get the
 * response as a promise that returns users dialog response (confirm/cancel/or any object).
 * But I make this first specific to the field config in an old approach.
 * Removing the IFieldConfig dependency and making it more generic will be nice,
 * as is a nice thing to have a easy to use confirm/cancel dialog.
 */

import { useBoolean } from "ahooks";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";


export function useAddFieldDialog(callback: () => void) {
  const [visible, { setTrue, setFalse }] = useBoolean(false);
  const [resolveFn, setResolveFn] = useState<(response: boolean) => void>(callback);
  // const [inputValue, setInputValue] = useState("");
  // const [field, setField] = useState<*IFieldConfig | null>();

  const openDialog = (
  ): Promise<boolean> => {
    return new Promise((resolve) => {
      setResolveFn(() => resolve);
      setTrue();
    });
  };

  const handleConfirm = () => {
    // const name = `${inputValue || "unnamed"}`;
    // const nextConfig: IFieldConfig = {
    //   type: "text",
    //   default: "",
    //   ...(field || {}),
    //   attribute: `${name}${getRandomInt(300)}`,
    //   label: name,
    // };

    resolveFn?.(true);
    closeDialog();
  };

  const handleCancel = () => {
    resolveFn?.(false);
    closeDialog();
  };

  const closeDialog = () => {
    setFalse();
    // setInputValue("");
    // setField(null);
  };

  // The Dialog itself
  const Dialog = 
    visible /** && field **/ ? (
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {/* Add Field */}
              </AlertDialogTitle>
            <AlertDialogDescription>
              {/* Add new {field.type} field */}
            </AlertDialogDescription>
          </AlertDialogHeader>
            {/* <FieldEditor /> */}
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm}>Add</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ) : null;


  return {
    openDialog,
    Dialog };
}
