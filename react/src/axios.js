import axios from 'axios';

const axiosClient = axios.create({
  // baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
  baseURL: `http://127.0.0.1:8000/api`
});

axiosClient.interceptors.request.use((config) => {
  const token = '123'; //TODO
  config.headers.Authorization = `Bearer ${token}`
  return config;
});

axiosClient.interceptors.request.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    router.navigate('/login');
    return error;
  }

  throw error;
});

export default axiosClient;


// import axios from "axios";
// import router from "./router";

// const axiosClient = axios.create({
//   // baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
//   baseURL: "http://127.0.0.1:8000/api"
// });

// axiosClient.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`
//   return config
// });

// axiosClient.interceptors.response.use(response => {
//   return response;
// }, error => {
//   if (error.response && error.response.status === 401) {
//     localStorage.removeItem('TOKEN')
//     window.location.reload();
//     // router.navigate('/login')
//     return error;
//   }
//   throw error;
// })

// export default axiosClient;
