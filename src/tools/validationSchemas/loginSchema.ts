import * as yup from "yup";

const _username = yup.string().min(3).max(10).required("Username is required");

const _password = yup.string().min(3).max(10).required("Password is required");

export const logInSchema = yup.object({
  username: _username,
  password: _password,
});
