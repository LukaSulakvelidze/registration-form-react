import * as yup from "yup"

export const validation = yup.object({
  firstname: yup.string().min(3).required("First Name cannot be empty"),
  lastname: yup.string().min(3).required("Last Name cannot be empty"),
  email: yup.string().matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/).required("Looks like this is not an email"),
  password: yup.string().min(8).required("Password cannot be empty")
})