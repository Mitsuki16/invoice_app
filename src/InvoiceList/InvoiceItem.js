import React from "react";
import { Link } from "react-router-dom";

function InvoiceItem(props) {
  let status_color_dot = " w-2 h-2 rounded-full "
  let status_color = "capitalize "
  let status_over ="flex w-[120px] text-[16px] justify-center gap-2 items-center  px-5 py-2 "
  if(props.data.status == "paid"){
    status_color_dot += "bg-green-400"
    status_color += "text-green-400"
    status_over += "bg-green-100/60 dark:bg-green-100/10"
  }
  else if(props.data.status == "pending")
  {
    status_color_dot += "bg-orange-400"
    status_color += "text-orange-400"
    status_over += "bg-orange-100/60 dark:bg-orange-100/10"
  }
  else if(props.data.status == "draft")
  {
    status_color_dot += "bg-gray-400"
    status_color += "text-gray-400"
    status_over += "bg-gray-100/60 dark:bg-gray-100/10"
  }
  return (
    <Link to={"/invoice/"+props.data.id}
      className=" bg-white border-2 border-white dark:border-[#1e2139]
       flex items-center justify-between p-5
                hover:border-purple-300 duration-150 rounded-lg
               dark:bg-[#1e2139] dark:text-white
                "
    >
      <div className=" font-bold text-gray-400">
        <span className=" text-gray-400 ">#</span>{props.data.id}</div>
      <div className=" text-gray-400 dark:text-white">{props.data.paymentDue}</div>
      <div className=" text-gray-400 dark:text-white w-[100px]">{props.data.clientName}</div>
      <div className=" font-bold text-lg w-[80px]">
        <span>$</span>{props.data.total.toFixed(2)}
      </div>
      <div className=" flex items-center gap-5 ">
      <div className={status_over}>
        <span className={status_color_dot}></span>
        <span className={status_color} >{props.data.status}</span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-violet-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      </div>
    </Link>
  );
}

export default InvoiceItem;
