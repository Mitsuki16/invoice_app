import React, { useEffect } from 'react';
import InvoiceItem from './InvoiceItem';

function InvoiceHomePage(props) {
    let data = props.data
    return (
        <div>
            <div className=" p-16 pt-10 ">
        <div className="">
          <div className=" flex flex-col items-center">
            <div className="w-full xl:w-[60%] ">
              <div className=" flex justify-between items-center pb-12">
                <div className=" dark:text-white">
                  <h1 className=" text-4xl font-bold">Invoices</h1>
                  <p className="  text-gray-400">There are 7 total invoices</p>
                </div>
                <div className="flex gap-5 items-center">
                  <button className=" font-bold flex gap-2 items-center">
                    <span className=' text-white'>Filter by status</span>
                    <span className=" text-violet-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                  <button className="text-[14px] gap-3 pl-2 pr-5 font-bold flex items-center bg-violet-500 text-white py-2 h-12 rounded-full">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>New Invoice</span>
                  </button>
                </div>
              </div>
              <div className=" text-sm flex gap-5 flex-col pb-6">
                {data.map((item) => {
                  return <InvoiceItem key={item.id} data={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default InvoiceHomePage;