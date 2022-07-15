import Label from "../shared/Label"


const Input = ({
  className,
  label = "",
  placeholder = "",
  name,
  onKeyUp,
  required = true,
  type
}) => {

  //INPUT TYPES
  const text = (type === 'text')
  const tel = (type === 'tel')
  const email = (type === 'email')
  
  return (
    <div className={className}>
      <Label 
        label={label}
        name={name}
        required={required} 
      />
      {text && //Text Input
          <input
          type={type}
          placeholder={placeholder}
          name={name} //PDF input id
          onKeyUp={onKeyUp} //Updates hook state variable, formData
          required={required}
        />
      }
      {tel && //Telephone Input
          <input
          type={type}
          placeholder={placeholder}
          name={name} //PDF input id
          onKeyUp={onKeyUp} //Updates hook state variable, formData
          required={false}
        />
      }
       {email && //Email Input
          <input
          type={type}
          placeholder={placeholder}
          name={name} //PDF input id
          onKeyUp={onKeyUp} //Updates hook state variable, formData
          required={required}
        />
      }
    </div>
  )
}

export default Input;