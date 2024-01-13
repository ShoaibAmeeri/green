import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { signUpSchema } from "../../schema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  terms : ""
};

export default function Signup() {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(
          " ~ file: Registration.jsx ~ line 11 ~ Registration ~ values ",
          values
        );
      },
    });


  return (
    //   <div className="w-full bg-white mx-auto dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

    //       </div>
    //   </div>
    <>
      <div className=" sm:mx-auto sm:w-full sm:max-w-sm bg-white py-5 px-10 rounded-xl shadow-lg">
        <div className="flex items-center justify-between  md:block">
          <div className="logo w-64 mx-auto">
            <img
              src="https://thechildrengreenbook.net/assets/images/_logo.png"
              alt=""
            />
          </div>
        </div>
        <form
          className="space-y-2 md:space-y-3"
          onSubmit={handleSubmit}
          action="#"
        >
          <div>
            <label
              for="name"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <label
              for="email"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <label
              for="password"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.password && touched.password ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.password}{" "}
              </p>
            ) : null}
          </div>
          <div>
            <label
              for="confirm-password"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirm_password"
              id="confirm-password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.confirm_password}{" "}
              </p>
            ) : null}
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
                name="terms"
              />
              
            </div>
            <div className="ml-3 text-sm">
              <label
                for="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
              {errors.name && touched.name ? (
              <p className="form-error text-pink-600 font-medium">
                {" "}
                {errors.name}{" "}
              </p>
            ) : null}
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-green-500 hover:bg-greenz-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create an account
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login here{" "}
            </Link>
          </p>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="#"
            className="font-semibold leading-6 text-orange-500 hover:text-orange-600"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </>
  );
}
