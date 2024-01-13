import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email:Yup.string().email().required("enter your email"),
    password:Yup.string().min(6).required("please enter your password"),
    confirm_password:Yup.string().min(2)
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
    terms:Yup.boolean().oneOf([true],'please check the terms and condition')
})


export const orderSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    phone:Yup.string().min(11).max(25).required("Please Enter Your Phone num"),
    email:Yup.string().email().required("enter your email"),
    // date:Yup.date().min(6).required("please enter your password"),
    number:Yup.string().length(2).required("enter No. of counts"),
    address:Yup.string().min(20).max(250).required("Please Enter Your Address"),
    
})