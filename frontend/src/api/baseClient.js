import axios from "axios";

export const getInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  //   instance.interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       console.log(`found error in getInstance`, error);
  //       if (
  //         error.response &&
  //         (error.response.status === 401 || error.response.status === 403)
  //       ) {
  //         localStorage.removeItem(`token`);
  //         sessionStorage.removeItem(`token`);
  //         window.location.href = "/backoffice/login";
  //       }

  //       return Promise.reject(error);
  //     }
  //   );

  return instance;
};
