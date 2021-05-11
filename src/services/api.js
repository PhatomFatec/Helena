import axios from 'axios';

////Base URL: https://free.currencyconverterapi.com/api/v5/
// > convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad
const api = axios.create({
  baseURL:'https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad'
});

export default api;