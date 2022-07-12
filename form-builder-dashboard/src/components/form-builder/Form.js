import { useState } from 'react'
//INPUTS
import Field from "./Field"
import GetFormFields from "../../lib/data/get-form-fields"

export default function Form() {
  const [formData, setFormData] = useState({});
  const formFields = GetFormFields()
  console.log(formFields)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(inputValues => ({ ...inputValues, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields && formFields.map((field, index) => {
        return (
          <Field
            key={`${field}-${index}`}
            type={field.type}
            label={field.label}
            name={field.name} 
            required={field.required}
            rows={field.rows}
            onKeyUp={handleChange}
          />
        )
      })}
      <input type="Submit" />
    </form>
  )
}