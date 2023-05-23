import { post } from ".";
import { REGISTRATION } from "./consts";
import { ISignUp } from "./types";

export const sendSignUpRequest = (body: ISignUp) => 
  post(REGISTRATION, body)