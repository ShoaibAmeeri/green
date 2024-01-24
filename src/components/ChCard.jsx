import React from "react";
import { Link } from "react-router-dom";

function ChCard(props) {

  return (
    <div>
      <div className="card  p-3 border-2 hover:mx-0 hover:shadow-lg hover:my-0 mx-1 my-2">
       
        <img
        className="mb-3"
          src={props.src}
          
          alt=""
          />

        <Link to={"/books/" + props.id} onClick={()=>console.log(props.id)} className="hover:bg-green-500 text-center  py-2 px-[118px] text-green-500 border-2 border-green-500 hover:text-white font-semibold text-lg rounded-md ">Read Now</Link>
      </div>
    </div>
  );
}

export default ChCard;
