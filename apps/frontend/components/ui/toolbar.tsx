"use client"

import * as React from "react"
import * as ToolbarPrimitive from "@radix-ui/react-toolbar"

import { cn } from "@/lib/utils"

function Toolbar({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Root>) {
  return (
    <ToolbarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )}
      {...props}
    />
  )
}

function ToolbarButton({ className, ...props }: React.ComponentProps<typeof ToolbarPrimitive.Button>) {
  return <ToolbarPrimitive.Button
    data-slot="toolbar-button" 
    className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
      className
    )}
{...props} /> }

function ToolbarSeparator({ ...props }: React.ComponentProps<typeof ToolbarPrimitive.Separator>) {  return <ToolbarPrimitive.Separator data-slot="toolbar-separator" {...props} /> }
function ToolbarLink({ ...props }: React.ComponentProps<typeof ToolbarPrimitive.Link>) {  return <ToolbarPrimitive.Link data-slot="toolbar-link" {...props} /> }
function ToolbarToggleGroup({ ...props }: React.ComponentProps<typeof ToolbarPrimitive.ToggleGroup>) {  return <ToolbarPrimitive.ToggleGroup data-slot="toolbar-toggle-group" {...props} /> }
function ToolbarToggleItem({ ...props }: React.ComponentProps<typeof ToolbarPrimitive.ToggleItem>) {  return <ToolbarPrimitive.ToggleItem data-slot="toolbar-toggle-item" {...props} /> }
function ToolbarRoot({ ...props }: React.ComponentProps<typeof ToolbarPrimitive.Root>) {  return <ToolbarPrimitive.Root data-slot="toolbar-root" {...props} /> }





export {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarRoot,
}
