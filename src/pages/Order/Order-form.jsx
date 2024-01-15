import { useFormik } from "formik";
import React from "react";
import { orderSchema } from "../../schema";
import postData from "../../api/api";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  number: "",
  address: "",
 
};

function Order_form() {
  

   const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: orderSchema,
      onSubmit: (values) => {
        console.log(values);
        postData("http://localhost:8000/buyers", values ).then((data) => {
          alert("success")
          console.log(data); // JSON data parsed by `data.json()` call
        }).catch((error)=>{
          alert("heres some exception")
          console.log(error);
        })
      },
    });
    
  
    return (

    <div className="mx-auto w-full max-w-[550px] bg-orange-100 border p-3 px-5 rounded-lg mt-3 md:mt-0">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {errors.name && touched.name ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.name}{" "}
              </p>
            ) : null}
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {errors.phone && touched.phone ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.phone}{" "}
              </p>
            ) : null}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            
          />
            {errors.email && touched.email ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.email}{" "}
              </p>
            ) : null}
        </div>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="number"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                No. of Copies
              </label>
              <input
                type="number"
                name="number"
                id="number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={values.number < 0 ? 1 : values.number}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.number && touched.number ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.number}{" "}
              </p>
            ) : null}
            </div>
          </div>
        </div>

        <div className="mb-5 pt-3">
          <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
            Address Details
          </label>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <div className="mb-5 ">
                <input
                  type="text"
                  name="address"
                  id="area"
                  placeholder="Address"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
                {errors.address && touched.address ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.address}{" "}
              </p>
            ) : null}
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
          type="submit"
          className="hover:shadow-form w-full rounded-md bg-green-500 hover:bg-green-600 py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Buy a Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default Order_form;
