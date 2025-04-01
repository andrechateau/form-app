  // TODO: Create useFields Hook to manage fields config.
  // holds fields map for key-value operations and better reactivity
  // Context is a grouping for structure fields, container fields
  // will have their own context.
  // controls the nested structure via Context Path
  //    eg. sections have multiple fields nested inside of it
  //    we can use the hook to get the list of the fields nested inside of it.
  //    similar to context.
  // Context resolution:
  //    also the hook should be able to resolve the values accordingly to the context.
  //      eg. configs with inherit value, will look up in the context, until find a context
  //      with this value defined. Or until reaches the root - so uses the form default values.
  // Event Broker: It should also be able to work as a broker - providing events to be listened
  //      and emitted in different parts of the application.
  // What is the scope of this Hook? - Should it be used together with Context Provider?
  // Also provide information regarding the form builder state:
  //      the form is which mode?
  //       ->
  // The Field its modes:
  //       -> Slot ()
  //       -> Blank (for layout controlling purposes)
  //       -> Ephemeral (when drag n drop)
  //       ->
  //       ->
  //       ->
  //  (commited / uncommited)
  // The component also has its modes:
  //       -> Store mode (just a card) -> drag n drop compatible!
  //       -> Preview mode (un operational. May use mocked data)
  //       -> Input Mode
  //       -> Read Only Mode
  //       -> Disabled Mode
  //       ->

  /** Field Unwrap Structure:
   * The field layout is structured as a Matrix.
   * A Field Definition is an array of definitions representing the rows.
   * Each row (ie. array element) have a list of definitions representing the columns.
   * By default the fields are added one in each row, meaning a single column form.
   *     but if the user needs multiple columns for one or more rows, more fields can be added in a row.
   *  or a single Field Definition.
   * 
  // Fie
  // [
  // ]
   */
  /**
   * Form Container
   *  - Organizes elements in the form layout
   *     - They can be special container types:
   *        - groups, sections, etc.
   *        - They can have other grouping definitions.
   *        - They can be attached to a context.
   *        - They can have nested fields inside of them.
   *           - Thats how nesting works both for layout and context management.
   **/
  /**
   * Field Decorator
   *  Responsible to change default behavior
   *      - Change to edit mode
   *        - Change -swx Manage states on edit mode.
   *      - Change to read only mode
   *
   *
   *
   * Field Status
   *    Mode
   *    Input
   *    Edit
   *       - hover, etc.
   * Controller ?. extend to use the useForm stuff.
   * Field span x Input span
   * Layout:
   *    - Row: row num (seq index from the root)
   *    - Col: col num (seq index in the row)
   *    - Field Span:
   *    - Input Span:
   *
   * Field Span
   *    Organizes the spacing in the form layout
   *    Based on up to 12 columns division based on the overall form
   *    Can be defined by the user by any number of columns that follows these constraints:
   *        The span of a field cannot be less the the span of its elements
   *                - the child input span, if present
   *                - description min span
   *                     - resolve description span config in context (default, inherit, etc)
   *                           - if no description span config:
   *                           - resolve min description span config in context (default, inherit, etc)
   *                - the sum of all columns span cannot exceed the max form span division.
   *                - 0 Span Elements
   *                    - Some elements have their span 0.
   *                    - They will not use space, and are only visual cues
   *                    - eg. Separators, divide multiple columns
   *                        - They may have a span of 0 when added as a column,
   *                         - and span max when added as
   *
   *
   *
   *                - description min span (system or default), if present ()
   *
   */


    // const {
    //   fields,
    //   append,
    //   prepend,
    //   remove,
    //   swap,
    //   move,
    //   insert
    // } = useFieldArray({ control: form.control, name: "test", });
    // -> useMap to set the fields source of truth
  

      // const [fieldsMap, fieldsMapOp] = useMap<string | number, string>([
      //   ["msg", "hello world"],
      //   [123, "number type"],
      // ]);
    
      // const initFieldsMap = () => {
      //   fieldList.current.forEach(() => {});
      // };
function FormLayout() {
  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-[auto_auto_auto_auto]">
      <div className="col-span-3 row-span-4 grid grid-rows-subgrid gap-4">
        <div>Field 1 Label</div>
        <div>
          <p>1 multiple lines of description</p>
          <p>2 multiple lines of description</p>
          <p>3 multiple lines of description</p>
          <p>4 multiple lines of description</p>
          <p>5 multiple lines of description</p>
        </div>
        <div>Field 1 Input</div>
        <div>Field 1 Validation</div>
      </div>
      <div className="row-span-4 grid grid-rows-subgrid gap-4">
        <div>Field 2 Label</div>
        <div>Field 2 Description</div>
        <div>Field 2 Input</div>
        <div>Field 2 Validation</div>
      </div>
      <div className="row-span-4 grid grid-rows-subgrid gap-4">
        <div>Field 3 Label</div>
        <div>Field 3 Description</div>
        <div>Field 3 Input</div>
        <div>Field 3 Validation</div>
      </div>
      <div className="row-span-4 grid grid-rows-subgrid gap-4">
        <div>Field 4 Label</div>
        <div>Field 4 Description</div>
        <div>Field 4 Input</div>
        <div>Field 3 Validation</div>
      </div>
    </div>
  );
}

export { FormLayout };
