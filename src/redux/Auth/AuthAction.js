import { authConstant } from "./AuthConstant";
import { AuthReducer } from "./AuthReducer";


export const loginRequest=(value)=>{
  return {
    action:authConstant.LOGIN_REQUEST,
    payload:value
  }
}
