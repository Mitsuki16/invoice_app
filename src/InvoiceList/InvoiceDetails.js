import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function InvoiceDetails(props) {
    let { id } = useParams();
  let items = props.data;
  let item = items.filter((item) => {
    return item.id == id;
  });
  item = item[0];
  let status_color_dot = " w-3 h-3 rounded-full ";
  let status_color = "capitalize ";
  let status_over =
    "flex w-[110px] text-[16px] justify-center gap-2 items-center px-4 py-3 ";
  if (item.status == "paid") {
    status_color_dot += "bg-green-400";
    status_color += "text-green-400";
    status_over += "bg-green-100/60 dark:bg-green-100/5";
  } else if (item.status == "pending") {
    status_color_dot += "bg-orange-400";
    status_color += "text-orange-400";
    status_over += "bg-orange-100/60 dark:bg-orange-100/5";
  } else if (item.status == "draft") {
    status_color_dot += "bg-gray-400";
    status_color += "text-gray-400";
    status_over += "bg-gray-100/60 dark:bg-gray-100/5";
  }

  const onStatusUpdate = () => {
    props.onStatusUpdate(item.id);
  };

  return (
    <div className=" flex justify-center">
      <div className=" text-white p-20 text-sm xl:w-[50%]  lg:w-[80%] w-[90%]">
        <div>
          <Link to={"/invoices"} className=" flex gap-1 h-10 items-center">
            <p className=" text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </p>
            <p> Go Back</p>
          </Link>
        </div>
        <div className=" flex justify-between items-center bg-[#1e2139] p-7 rounded-xl">
          <div className=" flex  gap-5 items-center">
            <p>Status</p>
            <div className=" flex items-center gap-5 ">
              <div className={status_over}>
                <div className={status_color_dot}></div>
                <span className={status_color}>{item.status}</span>
              </div>
            </div>
          </div>
          <div className=" flex  gap-5 items-center font-bold">
            <div onClick={() => {
    props.onInvoiceDelete(item.id);
  }} className=" bg-red-500 rounded-3xl p-4 px-8">
              <button>Delete</button>
            </div>
            {item.status == "pending" && (
              <div>
                <div onClick={onStatusUpdate} className=" bg-violet-500 rounded-3xl p-4 px-8">
                  <button >Mark as Paid</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" bg-[#1e2139] mt-10 p-8 rounded-xl">
          <div className=" mt-5 flex justify-between ">
            <div className="">
              <p className="  font-bold">
                <span className=" text-violet-400">#</span>
                {item.id}
              </p>
              <p>{item.description}</p>
            </div>
            <div>
              <p>{item.senderAddress.street}</p>
              <p>{item.senderAddress.city}</p>
              <p>{item.senderAddress.postCode}</p>
              <p>{item.senderAddress.country}</p>
            </div>
          </div>
          <div className=" flex justify-between mt-10 ">
            <div className=" flex flex-col gap-10">
              <div>
                <p>Invoice Date</p>
                <p className=" text-lg">{item.createdAt}</p>
              </div>
              <div>
                <p>Payment Due</p>
                <p className=" text-lg">{item.paymentDue}</p>
              </div>
            </div>
            <div>
              <p>Bill To</p>
              <p className=" text-lg font-bold">{item.clientName}</p>
              <div>
                <p>{item.senderAddress.street}</p>
                <p>{item.senderAddress.city}</p>
                <p>{item.senderAddress.postCode}</p>
                <p>{item.senderAddress.country}</p>
              </div>
            </div>
            <div>
              <p>Sent To</p>
              <p className=" text-lg font-bold">{item.clientEmail}</p>
            </div>
          </div>
          <div className="  mt-10 bg-[#252945] p-10">
            <div>
              <div className=" flex flex-row gap-10 justify-between">
                <div className=" w-[25%]">Item Name</div>
                <div>QTY.</div>
                <div>Price</div>
                <div>Total</div>
              </div>
              {item.items.map((item) => {
                return (
                  <div
                    key={item.name}
                    className=" pt-5 flex flex-row gap-10 justify-between"
                  >
                    <div className=" font-bold w-[30%]">{item.name}</div>
                    <div>{item.quantity}</div>
                    <div>${item.price.toFixed(2)}</div>
                    <div>${item.total.toFixed(2)}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" py-10 px-3 flex justify-between items-center bg-[#0c0e16]">
            <div> Amout Due</div>{" "}
            <div className=" text-3xl font-bold">${item.total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetails;
