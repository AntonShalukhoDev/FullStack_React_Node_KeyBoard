import { post } from ".";
import { AuthResponse } from "../models/response/AuthResponse";
import { LOG_IN } from "./consts";
import { ILogIn } from "./types";

export const sendLogin = (body: ILogIn) => 
  post(LOG_IN, body)
