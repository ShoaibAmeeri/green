import React, { useEffect, useState } from 'react'

import NewsCard from '../../components/NewsCard'
import axios from 'axios';
function NewsPaper() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/news")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mx-auto text-center ">
    <h1 className="my-5 font-bold text-4xl text-orange-500">
      {" "}
      What Media Says About Us.
    </h1>

    <div className="imagesCard grid md:grid-cols-3 sm:grid-cols-2 gap-5 mx-auto ">
      {data.map((img, i) => (
        <NewsCard src={img.image} key={i} />
      ))}
    </div>
  </div>
  )
}

export default NewsPaper