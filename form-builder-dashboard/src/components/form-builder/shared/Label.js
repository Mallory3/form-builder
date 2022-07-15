import styles from "../../../styles/Form.module.scss"

const Label = ({ label="", name, required=true }) => {
  //Accessibility
  const labelProvided = !!label
  if (!labelProvided) {
    label = `Label for ${name}`
  }

  return (
    <label 
      aria-hidden={!labelProvided} 
      htmlFor={name}
      hidden={!labelProvided}
    >
      {label}
      {required && 
        <span className={styles.required}>*</span>
      }
    </label>
  )
}

export default Label;