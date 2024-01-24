import React from "react";
import "./Review.css";
import { reviewSchema } from "../../schema";
import { useFormik } from "formik";
import postData from "../../api/api"

const initialValues = {
  name: "",
  contact: "",
  email: "",
  profession: "",
  message: "",
};

function Review() {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: reviewSchema,
      onSubmit: (values) => {
        console.log(values);
        if (!values) {

          {console.log("hello")}
<div class="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 opacity-20">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>

          
        }
        postData("http://localhost:8000/reviews", values)
          .then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
          })
          .catch((error) => {
            alert("heres some exception");
            // console.log(error);
          });
      },
    });

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
                name="name"
                className=" me-1 rounded border border-gray-300 bg-white py-1 px-3 pe-12 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
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
            <div>
              <input
                type="Contact"
                id="Contact"
                placeholder="Contact"
                name="contact"
                className=" pe-16 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.contact && touched.contact ? (
                <p className="form-error text-pink-600 font-medium">
                  {" "}
                  {errors.contact}{" "}
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
                name="profession"
                className="pe-16 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                value={values.profession}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.profession && touched.profession ? (
                <p className="form-error text-pink-600 font-medium">
                  {" "}
                  {errors.profession}{" "}
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
          <button className="rounded border-0 bg-green-500 py-2 px-6 text-lg text-white hover:bg-green-600 focus:outline-none"
                  type="submit"
          >
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
