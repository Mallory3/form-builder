import Label from "../shared/Label"


const Input = ({
  label="",
  name,
  onKeyUp,
  required,
  type
}) => {

  //INPUT TYPES
  const text = (type === 'text')
  const tel = (type === 'tel')
  const email = (type === 'email')
  
  return (
    <div>
      <Label label={label} name={name} />
      {text && //Text Input
          <input
          type={type}
          name={name} //PDF input id
          onKeyUp={onKeyUp} //Updates hook state variable, formData
          required={required}
        />
      }
      {tel && //Telephone Input
          <input
          type={type}
          name={name} //PDF input id
          onKeyUp={onKeyUp} //Updates hook state variable, formData
          required={false}
        />
      }
       {email && //Email Input
          <input
          type={type}
          name={name} //PDF input id
          onKeyUp={onKeyUp} //Updates hook state variable, formData
          required={required}
        />
      }
    </div>
  )
}

export default Input;