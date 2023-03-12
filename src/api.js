import axios from 'axios';

const api = axios.create({
  baseURL: "http://52.204.111.84:8080"
})

export default api;