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
    (data) => {
      return new Promise((res, rej) => {
        setIsLoading(true);
        setError(null);
        const config = {
          url: url,
          baseURL: base_url,
          method: method,
          data: data,
        };
        axios(config)
          .then((response) => {
            setResponse(response.data);
            setStatus(response.status);
            res(response);
          })
          .catch((err) => {
            setError(err);
            rej(err);
          })
          .finally(() => {
            setIsLoading(false);
          });
      });
    },
    [url, method]
  );

  return {
    response,
    error,
    isLoading,
    status,
    execute: (dt) => execute(dt),
  };
};

export default useApi;
