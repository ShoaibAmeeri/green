import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email:Yup.string().email().required("enter your email"),
    password:Yup.string().min(6).required("please enter your password"),
    confirm_password:Yup.string().min(2)
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
    terms:Yup.boolean().required('please check the terms and condition')
})


export const orderSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    phone:Yup.string().min(11).max(25).required("Please Enter Your Phone num"),
    email:Yup.string().email().required("enter your email"),
    number:Yup.number().min(1).max(100).required("enter No. of counts"),
    address:Yup.string().min(20).max(250).required("Please Enter Your Address"),
    
})


export const reviewSchema = Yup.object({
    Name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    Contact:Yup.string().min(11).max(25).required("Please Enter Your Phone num"),
    email:Yup.string().email().required("enter your email"),
    Profession:Yup.string().min(3).max(100).required("enter No. of Profession"),
    message:Yup.string().min(15).max(1250).required("Please Enter Your Address"),
    
})