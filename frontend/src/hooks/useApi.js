import { useState, useCallback } from "react";
import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;
console.log(`base url`, base_url);

const useApi = (url, method = "GET", headers = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const execute = useCallback(
    async (bodydata = null) => {
      console.log(`begin execute`);
      setIsLoading(true);
      setError(null);
      try {
        const config = {
          url: url,
          baseURL: base_url,
          method: method,
          data: bodydata,
        };
        console.log(`config`);
        console.log(config);
        const res = await axios(config);
        setResponse(res.data);
        setStatus(res.status);
      } catch (err) {
        console.log(`error`, err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [url, method]
  );

  return {
    response,
    error,
    isLoading,
    status,
    execute: () => execute().then(() => response),
  };
};

export default useApi;
