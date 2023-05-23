import { get } from ".";
import { AVATARS_URL } from "./consts";

export const getAvatars = () => 
  get(AVATARS_URL)

