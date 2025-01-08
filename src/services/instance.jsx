import axios from "axios"; 
// import { selectCurrentToken } from "../Auth/authSlice";


const defaultOptions = {
    
  baseURL : import.meta.env.VITE_REACT_BACKEND_BASE_URL,
  
};


const token = JSON.parse(localStorage.getItem("token"))||null;
const instance = axios.create(defaultOptions);
instance.interceptors.request.use(function (config) {

  const token = JSON.parse(localStorage.getItem("admin"))?.token;
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

export default instance;