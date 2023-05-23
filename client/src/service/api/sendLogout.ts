import { post } from ".";
import { LOG_OUT } from "./consts";

export const sendLogout = () => 
  post(LOG_OUT)
