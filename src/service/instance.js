import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://capparishealth.herokuapp.com'
  // baseURL: '/api/v1/'
});

export default instance;

