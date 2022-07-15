import Label from "../shared/Label"

const Textarea = ({ 
    label = "",
    placeholder = "",
    name,
    required,
    rows=1,
    onKeyUp
  }) => {

    return (
    <div>
      <Label label={label} name={name} />
      <textarea 
        name={name} //PDF input id
        placeholder={placeholder}
        required={required} //validation
        rows={rows} //Optional - defaults to 1
        onKeyUp={onKeyUp} //Updates hook state variable, formData
      >
      </textarea>
    </div>
  )
}

export default Textarea;