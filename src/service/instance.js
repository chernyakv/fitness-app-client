import * as axios from "axios";
import {authHeader} from "./helpers";

const instance = axios.create({
  baseURL: 'http://localhost:8082/api/v1/',
  //headers: authHeader()
});

export default instance;

