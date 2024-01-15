// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// // import "./script.js"


// // function Nav() {


// //   return (
   
// //   //       <div className=" grid grid-cols-3  ps-12 py-3  sticky top-0 bg-white shadow-lg mb-6 z-10 pe-12">
// //   //         <div className="logo w-64">
// //   //           <img
// //   //             src="https://thechildrengreenbook.net/assets/images/_logo.png"
// //   //             alt=""
// //   //           />
// //   //         </div>
// //   //         <div className="nav mt-5  flex">
// //   //           <ul className="md:flex gap-4 hidden ">
// //   //             <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
// //   //               <Link to={"/"}>
// //   //               HOME
// //   //               </Link>
// //   //             </li>
// //   //             <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
// //   //               <Link to={"/about"}>
// //   //               ABOUT
// //   //               </Link>
// //   //             </li>
// //   //             <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
// //   //               <Link to={"/review"}>
// //   //               REVIEW
// //   //               </Link>
// //   //             </li>
// //   //             <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
// //   //               <Link to={"/books"}>
// //   //                 Books
// //   //               </Link>
// //   //             </li>
// //   //             <li className="px-2 font-semibold hover:text-green-600 cursor-pointer">
// //   //               MIYAWAKI FOREST
// //   //             </li>

// //   //           </ul>

            

            

// //   //           <div className="md:hidden  absolute ms-[55%]">
// //   //           <a href="" className="font-semibold text-4xl" >
// //   //   {" "}
// //   //   &#8801;
// //   // </a>
// //   //           </div>
// //   //         </div>

// //   //         <div className='md:flex gap-3 mt-4 ms-24 hidden'>
// //   //             <button
// //   //                   className="hover:shadow-form  rounded-md bg-green-500 hover:bg-green-600  text-center text-base font-semibold text-white px-8 h-12 outline-none">
// //   //                  Sign in
// //   //               </button>
// //   //               <button
// //   //                   className="hover:shadow-form  rounded-md bg-green-500 hover:bg-green-600 px-8 h-12 text-center text-base font-semibold text-white outline-none">
// //   //                  Sign up
// //   //               </button>

// //   //           </div>


// //   //           <div className='sideNav' onClick={clickHandles} >
// //   //             <ul >
// //   //               <li>hello</li>
// //   //               <li>hello</li>
// //   //               <li>hello</li>
// //   //             </ul>
// //   //           </div>
// //   //       </div>






// // <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
// //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
// //     <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
// //         <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
// //         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
// //     </a>
// //     <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
// //         <span className="sr-only">Open main menu</span>
// //         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
// //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
// //         </svg>
// //     </button>
// //     <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
// //       <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
// //         <li>
// //           <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
// //         </li>
// //         <li>
// //             <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
// //     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
// //   </svg></button>
// //             {/* <!-- Dropdown menu --> */}
// //             <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
// //                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
// //                   <li>
// //                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
// //                   </li>
// //                   <li aria-labelledby="dropdownNavbarLink">
// //                     <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
// //     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
// //   </svg></button>
// //                     <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
// //                         <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
// //                           <li>
// //                             <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Overview</a>
// //                           </li>
// //                           <li>
// //                             <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My downloads</a>
// //                           </li>
// //                           <li>
// //                             <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Billing</a>
// //                           </li>
// //                           <li>
// //                             <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Rewards</a>
// //                           </li>
// //                         </ul>
// //                     </div>
// //                   </li>
// //                   <li>
// //                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
// //                   </li>
// //                 </ul>
// //                 <div className="py-1">
// //                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
// //                 </div>
// //             </div>
// //         </li>
// //         <li>
// //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
// //         </li>
// //         <li>
// //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
// //         </li>
// //         <li>
// //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
// //         </li>
// //       </ul>
// //     </div>
// //   </div>
// // </nav>


// //   )
// // }

// export default Nav


import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full ps-12 md:h-24 sticky top-0 bg-white shadow-lg mb-6 z-10 pe-12">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <div className="logo w-64">
                      <Link to={'/'}>
                      <img
                        src="https://thechildrengreenbook.net/assets/images/_logo.png"
                        alt=""
                      />
                      </Link>
          </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex lg:space-x-6 md:space-x-4 md:space-y-0 ">
                            <li className="text-black font-semibold text-lg   hover:text-green-500">
                                <Link to={"/"}  >HOME</Link>
                            </li>
                            <li className="text-black font-semibold text-lg hover:text-green-500">
                                <Link to={"/about"} >ABOUT US</Link>
                            </li>
                            <li className="text-black font-semibold text-lg hover:text-green-500">
                                <Link to={"/review"}  >REVIEW</Link>
                            </li>
                            <li className="text-black font-semibold text-lg hover:text-green-500">
                                <Link to={"/books"} >BOOKS</Link>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 md:hidden ">
                    <Link
                        to={"/login"}
                        className="inline-block w-full px-4 py-2 text-center text-white bg-green-500 rounded-md shadow hover:bg-green-600"
                    >
                        Sign in
                    </Link>
                    <Link
                      to={'/signup'}
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-gray-100 rounded-md shadow hover:bg-gray-300"
                    >
                        Sign up
                    </Link>
                </div>
                    </div>
                </div>
                <div className="hidden  md:flex gap-4">
                    <Link
                        to={"/login"}
                       
                        className="px-4 py-2  text-white bg-green-500 rounded-md  hover:bg-green-600"
                    >
                        Sign in
                    </Link>
                    <Link
                    to={'signup'}
                        
                        className="px-4 py-2 text-gray-800 bg-gray-100 rounded-md shadow hover:bg-gray-300"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </nav>
    );
}