import * as axios from "axios";

const instance = axios.create({
  //baseURL: 'https://capparishealth.herokuapp.com'
  baseURL: 'http://localhost:5000/'
});

export default instance;

