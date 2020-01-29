import * as axios from "axios";
import {authHeader} from "./helpers";

const instance = axios.create({
  baseURL: '/api/v1/'
})

export default instance;

