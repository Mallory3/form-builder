//INPUTS
import Textarea from "./inputs/Textarea"
import Input from "./inputs/Input"

const Field = (props) => {
  const {
    type //Define specific props needed
  } = props
  
  //FORM FIELD TYPES
  const textarea = (type === "textarea")
  const input = (
    type === "text" || 
    type === "tel"  ||
    type === "email"
  )
  
  //RENDER FORM FIELDS
  //...props gets all props that are defined when the component is called
  if (textarea) return <Textarea {...props} />
  if (input) return <Input {...props} />
  
  //Return nothing if type is not defined
  return null;
}

export default Field;
