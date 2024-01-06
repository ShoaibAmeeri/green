import React from "react";

function ChCard(props) {
  return (
    <div>
      <div className="card  p-3 border-2 hover:mx-0 hover:shadow-lg hover:my-0 mx-1 my-2">
       
        <img
          src={props.src}

          alt=""
        />

        <button className="hover:bg-green-500 text-center w-full mt-2 p-1 text-green-500 border-2 border-green-500 hover:text-white font-semibold text-lg rounded-md ">Read Now</button>
      </div>
    </div>
  );
}

export default ChCard;
