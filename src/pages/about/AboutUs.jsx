import React from "react";
import "./style.css";
import Author from "../home/Author";
import ImgFrame from "./ImgFrame";

function AboutUs() {
  return (
    <div className="mx-auto w-[80%] flex flex-col gap-2">
      <div className="about_hero relative pt-24" >
        <h1 className="font-bold text-4xl md:absolute ms-36">About Us</h1>
      </div>

      <div className="bg-green-100 p-5">
       <Author/>
      </div>
    
      <ImgFrame/>
    </div>
  );
}

export default AboutUs;
