import { object, string } from "yup";

export const OnboardSchema = object({
    Email:string().required().email()
})

export const LoginSchema = object({
    Email: string().required().email(),
    Password: string().required()
})
