import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Nav() {
 const [menu, setMenu] = useState(true)

 const sideMenu = ()=>{
  if (menu) {
    return(
   null
      )

  setMenu(false)
  }else{

    return(
    <ul>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
    </ul>

)
setMenu(true)


  }
 }

  return (
   
        <div className=" grid grid-cols-3  ps-12 py-3  sticky top-0 bg-white shadow-lg mb-6 z-10 pe-12">
          <div className="logo w-64">
            <img
              src="https://thechildrengreenbook.net/assets/images/_logo.png"
              alt=""
            />
          </div>
          <div className="nav mt-5  flex">
            <ul className="md:flex gap-4 hidden ">
              <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
                <Link to={"/"}>
                HOME
                </Link>
              </li>
              <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
                <Link to={"/about"}>
                ABOUT
                </Link>
              </li>
              <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
                <Link to={"/review"}>
                REVIEW
                </Link>
              </li>
              <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
                <Link to={"/books"}>
                  Books
                </Link>
              </li>
              <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
                MIYAWAKI FOREST
              </li>

            </ul>

            

            

            <div className="md:hidden  absolute ms-[55%]">
            <a href="" className="font-semibold text-4xl" onClick={sideMenu}>
    {" "}
    &#8801;
  </a>
            </div>
          </div>

          <div className='md:flex gap-3 mt-4 ms-24 hidden'>
              <button
                    className="hover:shadow-form  rounded-md bg-green-500 hover:bg-green-600  text-center text-base font-semibold text-white px-8 h-12 outline-none">
                   Sign in
                </button>
                <button
                    className="hover:shadow-form  rounded-md bg-green-500 hover:bg-green-600 px-8 h-12 text-center text-base font-semibold text-white outline-none">
                   Sign up
                </button>

            </div>
        </div>


  )
}

export default Nav