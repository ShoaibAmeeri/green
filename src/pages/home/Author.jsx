import React from 'react'

function Author() {
  return (
    <div className=" mx-auto text-center mt-10 " >
    <h1 className="text-2xl font-bold mx-auto my-5"> THE AUTHOR </h1>
    <div className="grid md:grid-cols-2 gap-8">
    <div>
      <p className="text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Molestias ex quis earum officia repudiandae quibusdam a explicabo
        eius exercitationem incidunt fugit, accusamus tempore? Aut enim
        dolor et neque facere nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptates maiores velit quos corrupti iste labore ex veniam magni quia qui quaerat ducimus temporibus dolores at, accusamus debitis asperiores modi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum enim animi doloribus corporis praesentium sequi incidunt, accusamus aliquam soluta, blanditiis facilis aspernatur beatae nihil cumque nesciunt? Aut repellat ipsa consequuntur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias dicta veniam ratione itaque ullam explicabo officia ducimus, ex maiores odit optio! Maxime sed quisquam animi dolorem, explicabo perspiciatis adipisci.
      </p>
    </div>
    <div>
      {" "}
      <img
        
        src="https://thechildrengreenbook.net/assets/images/sec1.jpg"
        alt=""
      />
    </div>
    </div>
  </div>
  )
}

export default Author