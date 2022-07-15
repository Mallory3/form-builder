import { useState } from "react"
import { useAPIContext } from "../../lib/context/APIContext"
import styles from "../../styles/Form.module.scss"
//INPUTS
import Field from "./Field"
import Fieldset from "./Fieldset"

export default function Form() {
  const [submitData, setSubmitData] = useState({});
  const apiData = useAPIContext();
  const pages = apiData?.pages;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSubmitData(inputValues => (
      { ...inputValues, [name]: value }
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submitData)
  }

  if (!pages) return <div>Loading Form...</div>;

  return (
      <form onSubmit={handleSubmit}>
        <h2 className={styles.title}>{apiData.name}</h2>
        <p className={styles.description}>{apiData.description}</p>
        <p className={styles.note}>
          <span className={styles.required}>*</span>
          &nbsp;Required field
        </p>
        {pages && pages.map((page, index) => {
          return (
            <Fieldset key={index} heading={page.heading}>
              {page.fields && page.fields.map((field, index) => {
                return (
                  <Field
                    key={`${field}-${index}`}
                    className={styles.field}
                    type={field.type}
                    label={field.label}
                    placeholder={field.placeholder}
                    name={field.name} 
                    required={field.required}
                    rows={field.rows}
                    onKeyUp={handleChange}
                  />
                )
              })}
            </Fieldset>
          )
        })}
        <input className={styles.submit} type="Submit" />
      </form>
  )
}