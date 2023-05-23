import * as yup from "yup";
import { nameExpression } from "../../../regExp";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameExpression, " ")
    .required(" "),
  newName: yup
    .string()
    .matches(nameExpression, " ")
    .required(" "),
});