import { createContext, useContext } from "react";
import GetAPIData from "../data/get-api-form-data"

//CREATE API CONTEXT
const APIContext = createContext(false);
export default APIContext;

//HOOK TO USE API CONTEXT 
//TO USE: const apiData = useAPIContext();
export function useAPIContext() {
  const apiData = useContext(APIContext);
  if (apiData === undefined) {
    throw new Error("Can't find APIProvider forgetAPIContext")
  }
  return apiData;
}

//DATA PROVIDER
//Allows apiData to be accessed globally by any component
export function APIProvider({ children }) {
  const apiData = GetAPIData();
  if (!apiData) {
    return <div>Loading...</div>
  }
  return (
    <APIContext.Provider value={apiData}>
      {children}
    </APIContext.Provider>
  )
}
