import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://capparishealth.herokuapp.com'
});

export default instance;

