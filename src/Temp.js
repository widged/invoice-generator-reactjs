/*import React, { useEffect, useState } from "react";
import "./App.scss";
import "./index.css";

function Temp() {
  return (
    <div>
      <div className="flex">
        <div className="w-5">
          <input
            type="text"
            className="fs-45 right bold"
            placeholder="invoice no."
          />
        </div>
        <div className="w-50">
          <input
            type="text"
            className="fs-45 right bold"
            placeholder="invoice"
          />
        </div>
      </div>

      <div className="flex mb-8 justify-between">
        <div className="w-2/4">
          <div className="mb-2 md:mb-1 md:flex items-center">
            <label className="w-32 text-gray-800 block font-bold text-sm uppercase tracking-wide">
              Invoice No.
            </label>
            <span className="mr-4 inline-block hidden md:block">:</span>

            <div className="flex-1">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="inline-full-name"
                type="text"
                placeholder=""
                x-model="invoiceNumber"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 justify-items-end">
            <div className="mb-2 md:mb-1 md:flex items-center">
              <label className="w-32 text-gray-800 block font-bold text-sm  tracking-wide">
                Date
              </label>

              <div className="flex-1">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 js-datepicker"
                  type="date"
                  id="datepicker1"
                  placeholder=""
                  x-model="invoiceDate"
                  autocomplete="off"
                  readonly
                />
              </div>
            </div>
            <div className="mb-2 md:mb-1 md:flex items-center">
              <label className="w-32 text-gray-800 block font-bold text-sm  tracking-wide">
                Payment Terms
              </label>

              <div className="flex-1">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 js-datepicker"
                  type="text"
                  id="datepicker1"
                  placeholder=""
                  x-model="invoiceDate"
                  autocomplete="off"
                  readonly
                />
              </div>
            </div>

            <div className="  flex flex-row justify-center items-end">
              <label className="w-32 text-gray-800 block font-bold text-sm  tracking-wide">
                Due Date
              </label>

              <div className="">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 
              rounded w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none
               focus:bg-white focus:border-blue-500 js-datepicker"
                  type="date"
                  id="datepicker1"
                  placeholder=""
                  x-model="invoiceDate"
                  autocomplete="off"
                  readonly
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mb-1 mr-3">
            <div className="w-full md:w-1/3 mb-2 md:mb-0">
              <label className="text-gray-800 block mb-1 font-bold text-sm  tracking-wide">
                From
              </label>
              <textarea
                className="w-7 px-3 py-2 text-gray-700 border focus:outline-none"
                placeholder="Billing company name"
                rows="2"
              ></textarea>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-wrap justify-between mb-1 mr-3">
              <div className="w-full md:w-1/3 mb-2 md:mb-0">
                <label className="text-gray-800 block mb-1 font-bold text-sm  tracking-wide">
                  Bill To
                </label>
                <textarea
                  className="w-7 px-3 py-2 text-gray-700 border  focus:outline-none"
                  placeholder="Billing company name"
                  rows="2"
                ></textarea>
              </div>
            </div>

            <div className="flex flex-wrap justify-between mb-1">
              <div className="w-full md:w-1/3 mb-2 md:mb-0">
                <label className="text-gray-800 block mb-1 font-bold text-sm  tracking-wide">
                  Ship To
                </label>
                <textarea
                  className="w-7 px-3 py-2 text-gray-700 border  focus:outline-none"
                  placeholder="Billing company name"
                  rows="2"
                ></textarea>
              </div>
            </div>
          </div>

         
          <div className="flex -mx-1 border-b py-2 items-start">
            <div className="flex-1 px-1">
              <p className="text-gray-800 uppercase tracking-wide text-sm font-bold">
                Description
              </p>
            </div>

            <div className="px-1 w-20 text-right">
              <p className="text-gray-800 uppercase tracking-wide text-sm font-bold">
                Units
              </p>
            </div>

            <div className="px-1 w-32 text-right">
              <p className="leading-none">
                <span className="block uppercase tracking-wide text-sm font-bold text-gray-800">
                  Unit Price
                </span>
                <span className="font-medium text-xs text-gray-500">
                  (Incl. GST)
                </span>
              </p>
            </div>

            <div className="px-1 w-32 text-right">
              <p className="leading-none">
                <span className="block uppercase tracking-wide text-sm font-bold text-gray-800">
                  Amount
                </span>
                <span className="font-medium text-xs text-gray-500">
                  (Incl. GST)
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between mb-1">
            <div className="w-full md:w-1/3 mb-2 md:mb-0">
              <label className="text-gray-800 block mb-1 font-bold text-sm  tracking-wide">
                Notes
              </label>
              <textarea
                className="w-7 px-3 py-2 text-gray-700 border  focus:outline-none"
                placeholder="Billing company name"
                rows="2"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mb-1">
            <div className="w-full md:w-1/3 mb-2 md:mb-0">
              <label className="text-gray-800 block mb-1 font-bold text-sm  tracking-wide">
                Terms
              </label>
              <textarea
                className="w-7 px-3 py-2 text-gray-700 border  focus:outline-none"
                placeholder="Billing company name"
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Temp;*/
