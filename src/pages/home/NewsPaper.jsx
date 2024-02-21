import React from 'react'
// import news from '../../components/data/news'
import NewsCard from '../../components/NewsCard'
function NewsPaper() {
  return (
    <div className="mx-auto text-center ">
    <h1 className="my-5 font-bold text-4xl text-orange-500">
      {" "}
      What Media Says About Us.
    </h1>

    <div className="imagesCard grid md:grid-cols-3 sm:grid-cols-2 gap-5 mx-auto ">
      {/* {news.map((img, i) => (
        <NewsCard src={img.src} key={i} />
      ))} */}
    </div>
  </div>
  )
}

export default NewsPaper