import { useEffect, useState } from 'react'


const GetAPIData = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAPIData = async () => {
      if (!apiData) {
        setLoading(true);
        // TODO: replace with API Data
        const apiUrl = "./testData.json"
        await fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => {
          setApiData(json)
        });
      }
    }
    fetchAPIData().catch(console.error);
  })

  if (!loading) <div>Loading...</div>

  return apiData;
};

export default GetAPIData;
