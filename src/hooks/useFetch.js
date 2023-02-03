import { useEffect, useState } from "react";
import * as API from "../services/request";

export function useFetch ({ url, doRequest = true, initialData = {} } = { }){
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {

    if(doRequest){
      const hasPreloadData = Object.keys(initialData).length !== 0
      setLoading(!hasPreloadData);

      API.request({ url })
        .then((data)=> {

          if(data.error){
            setError(data.error);
          }

          setData(data);
        })
        .catch(setError)
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
      
  }, [url]);

  return {
    data,
    loading,
    error
  }
}