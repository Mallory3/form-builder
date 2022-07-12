import { useEffect, useState } from 'react'

const GetFormFields = () => {

  //TODO: REPLACE WITH API DATA
  const data = {
    formFields: [
      {
        "type": "textarea", //required
        "name": "Input1", //required
        "label": "Textarea", //optional, defaults to hidden
        "rows": 2, //optional defaults to 1
        "required": true,
      },
      {
        "type": "textarea", //required
        "name": "Input12", //required
        "label": "Textarea2", //optional, defaults to hidden
        "rows": 2, //optional defaults to 1
        "required": true,
      },
      {
        "type": "text", //required
        "name": "Input2", //required
        "label": "Textinput", //optional, defaults to hidden
        "required": true,
      },
      {
        "type": "tel", //required
        "name": "Input3", //required
        "label": "Telinput", //optional, defaults to hidden
        "required": false,
      },
      {
        "type": "email", //required
        "name": "Input4", //required
        "label": "Emailinput", //optional, defaults to hidden
        "required": false,
      },
    ]
  };

  const [formFields, setFormFields] = useState([])
  const fields = data?.formFields

  useEffect(() => {
    const getAPIFormFields = async () => {
      setFormFields(fields);
    }
    getAPIFormFields().catch(console.error)
  }, [])

  return formFields;
}

export default GetFormFields;