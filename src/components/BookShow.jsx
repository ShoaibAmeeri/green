import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function BookShow() {
  // const [data, setData] = useState([])
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/books/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(data.name)

  return (
    <div className="bg-none dark:bg-gray-800 flex relative items-center overflow-hidden">
      <div className="container mx-auto px-6 md:flex gap-5 justify-center items-center relative py-16">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative">
          <Link to={'/'} className="w-20 py-2 rounded-md  text-center text-xl font-serif  bg-green-800 dark:bg-white text-white mb-12">Back</Link>
          <h1 className="font-bebas-neue uppercase text-4xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            {" "}
            {data.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            {data.description}
          </p>
          <div className="flex mt-8">
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-green-500 border-2 border-transparent text-white text-md mr-4 hover:bg-green-400"
            >
              Get started
            </a>
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-green-500 text-green-500 dark:text-white hover:bg-green-500 hover:text-white text-md"
            >
              Read more
            </a>
          </div>
        </div>
        <div className=" sm:block sm:w-[550px] lg:w-[580px] relative bg-green-300 py-5 ">
          <img src={data.image} className=" max-w-[400px] md:max-w-[700px] m-auto rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default BookShow;
