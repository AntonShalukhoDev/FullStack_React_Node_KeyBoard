import * as yup from "yup";
import { nameExpression, passwordExpression, emailExpression } from "../../../regExp";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameExpression, " ")
    .required(" "),
  email: yup
    .string()
    .matches(emailExpression, " ")
    .required(" "),
  password: yup
    .string()
    .matches(passwordExpression, " ")
    .required(" "),
  repeatPassword: yup
    .string()
    .matches(passwordExpression, " ")
    .required(" "),
});