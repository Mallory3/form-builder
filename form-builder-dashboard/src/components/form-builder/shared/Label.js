const Label = ({ label="", name }) => {
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
    </label>
  )
}

export default Label;