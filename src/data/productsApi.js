import axios from 'axios'

const productsApi = axios.create({
  baseURL: 'https://my-json-server.typicode.com/nicojoaquin/productsApi/productos/'
});

export default productsApi;

