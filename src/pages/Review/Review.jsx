import React from "react";
import "./Review.css";
import { reviewSchema } from "../../schema";
import { useFormik } from "formik";

const initialValues = {
  Name: "",
  Contact: "",
  email: "",
  Profession: "",
  message: "",
};

function Review() {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: reviewSchema,
      onSubmit: (values) => {
        console.log(
          " ~ file: Registration.jsx ~ line 11 ~ Registration ~ values ",
          values
        );
      },
    });
  console.log(errors);

  return (
    <div>
      <div className="review_hero relative w-[80%] mx-auto pt-24">
        <h1 className="font-semibold text-sm md:absolute ms-28">REVIEW</h1>
      </div>

      <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-green-100 p-8">
        <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
          Feedback
        </h2>
        <p className="mb-5 leading-relaxed text-gray-600">
          If you had any issues or you liked our product, please share with us!
        </p>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4 flex g-1 ">
           <div>
            <input
              type="Name"
              id="Name"
              placeholder="Name"
              name="Name"
              className=" me-1 rounded border border-gray-300 bg-white py-1 px-3 pe-12 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={values.Name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.Name && touched.Name ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.Name}{" "}
              </p>
            ) : null}
           </div>
           <div>
            <input
              type="Contact"
              id="Contact"
              placeholder="Contact"
              name="Contact"
              className=" pe-16 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={values.Contact}
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.Contact && touched.Contact ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.Contact}{" "}
              </p>
            ) : null}
           </div>
          </div>
          <div className="mb-4 flex g-1 ">
           <div>
           <input
              type="email"
              id="email"
              placeholder="E-mail"
              name="email"
              className="pe-12 me-1 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
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

           <div>
            <input
              type="Profession"
              id="Profession"
              placeholder="Profession"
              name="Profession"
              className="pe-16 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={values.Profession}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Profession && touched.Profession ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.Profession}{" "}
              </p>
            ) : null}
           </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.message && touched.message ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.message}{" "}
              </p>
            ) : null}
          </div>
          <button className="rounded border-0 bg-green-500 py-2 px-6 text-lg text-white hover:bg-green-600 focus:outline-none">
            Send
          </button>
          <p className="mt-3 text-xs text-gray-500">
            Feel free to connect with us on social media platforms.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Review;
