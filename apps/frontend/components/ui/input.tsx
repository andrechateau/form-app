import * as React from "react"

import { cn } from "@/lib/utils"

{
  /*

:: Properties ::
Label	
Description

question?

placeholder	
default (string | number | date | boolean )
display: normal | disabled | hidden | readonly

(choice only) single | multiple | range
layout

:: Rules ::
min	
max	
minlength	
maxlength	
pattern
required
step

:: non things ::
autofocus
size	
src	

> ? autocomplete




	








checked         Specifies that an input field should be pre-selected when the page loads (for type="checkbox" or type="radio")
disabled	      Specifies that an input field should be disabled
max	            Specifies the maximum value for an input field
maxlength	      Specifies the maximum number of character for an input field
min	            Specifies the minimum value for an input field
pattern	        Specifies a regular expression to check the input value against
readonly	      Specifies that an input field is read only (cannot be changed)
required	      Specifies that an input field is required (must be filled out)
size	          Specifies the width (in characters) of an input field
step	          Specifies the legal number intervals for an input field
value	          Specifies the default value for an input field
  */
}

{/*

------ Output
<output>
---> https://www.w3schools.com/tags/tag_output.asp
------ Text
<input type="text">
  variations: <input type="url">  <input type="email">  <input type="password">  <input type="tel">  <input type="search">
  add variations : name, address
<textarea>

------ Numerical
<input type="number">
  -> measure
  -> unit?

------ Date & Time
<input type="date">
  <input type="datetime-local">
  <input type="month">
  <input type="week">
  <input type="time">

------ Choice
<input type="checkbox">
<input type="radio">
<input list="browsers">
  <datalist id="browsers">
    <option value="Edge">
<input>
<select>
  <option>
  <optgroup>
    <option>

------ Other Input Types
<input type="range"> (number, date, time, etc?)
<input type="file">
<input type="image">

<input type="color">
---- Layout
<label>
<fieldset>
  <legend>

---- Form 
<input type="submit">
<input type="reset">

----- Special
<button>
<input type="button">
<input type="hidden">






input size = input span
  Note: The size attribute works with the following input types: text, search, tel, url, email, and password.
*/}


function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (

      <input
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
        type={type}
        data-slot="input"
        {...props}
      />
  )
}

export { Input }
