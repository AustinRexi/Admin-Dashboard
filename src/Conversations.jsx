import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import Product from "./Product";
import User1 from "./assets/User1.svg";
import Order from "./assets/Order.svg";
import { useState } from "react";
import { Button } from "primereact/button";
import Acquisition from "./assets/Acquisition.svg";
export default function Conversations() {
  const [search, setSearch] = useState("");
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleSearch = debounce((value) => {
    setSearch(value);
  }, 500);

  const data = [
    {
      name: "Jane Doe",
      description: "Hey i want to make inquiries about your ...",
      icon: User1,
      time: "12:55am",
      status: "New",
    },
    {
      name: "Janet Adebayo",
      description: "Hey i want to make inquiries about your ...",
      icon: User1,
      time: "12:55am",
      status: "New",
    },
    {
      name: "Kunle Adekunle",
      description: "Hey i want to make inquiries about your ...",
      icon: User1,
      time: "12:55am",
      status: "New",
    },
    {
      name: "Jane Doe",
      description: "Hey i want to make inquiries about your ...",
      icon: User1,
      time: "12:55am",
    },
    {
      name: "Janet Adebayo",
      description: "Hey i want to make inquiries about your ...",
      icon: User1,
      time: "12:55am",
    },
    {
      name: "Kunle Adekunle",
      description: "Hey i want to make inquiries about your ...",
      icon: User1,
      time: "12:55am",
    },
    {
      name: "Jane Doe",
      description: "Hey i want to make inquiries about your ...",
      icon: User1,
      time: "12:55am",
    },
    {
      name: "Janet Adebayo",
      description: "Hey i want to make inquiries about your ...",
      icon: User1,
      time: "12:55am",
    },
    {
      name: "Kunle Adekunle",
      description: "Hey i want to make inquiries about your ...",
      icon: User1,
      time: "12:55am",
    },
  ];
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="bg-stone-100 ">
      <div className="ms-4 font-medium leading-normal    flex relative">
        Conversations with customers
        <Button
          label="New messages"
          severity="info"
          raised
          className="mt-2 absolute top-0 right-0 h-8 pr-2"
        />
      </div>
      <div className="grid grid-rows-1 grid-flow-col bg-stone-100 mt-4 ms-2 p6s-2">
        <div className="col-span-1 bg-white  w-80 mt-2 ms-2 shadow-md rounded-lg  text-black  relative...">
          <div className="flex ">
            <div className="ms-2 font-medium font-sans">Contacts</div>
            <div className=" text-gray-400 ms-52">34</div>{" "}
          </div>
          <IconField iconPosition="left" className="ms-4  py-3">
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText
              v-model="search"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search"
              className="h-8"
            />
          </IconField>
          <Product data={filteredData} />
        </div>
        <div className="col-span-8  bg-white   mt-2 shadow-md rounded-lg relative pr-32 ">
          <div className="  ">
            <div className=" ms-2 mt-3 flex gap-0 ">
              <img src={User1} alt="" />
              <div className=" text-nowrap text-xs ms-1 ">
                <p className="ms-1">{data[0].name}</p>
                <div className="flex">
                  <img src={Acquisition} alt="" className="ms-1 mt-1" />{" "}
                  <span className="ms-1 mt-1 text-gray-500"> Online</span>{" "}
                  <span className="mt-1 ms-1 text-gray-400">
                    {data[0].time}
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 pr-4 mt-2">
              <div className="flex">
                <div> New customer </div>{" "}
                <div className="ms-2">
                  <a href="#" className="text-blue-700 hover:underline">
                    view profile
                  </a>
                  <div className="flex">
                    <img src={Order} alt="" className="py-1 pb-2" />
                    <p className="mt-1">orders</p>
                  </div>
                  <hr className="mt-1" />
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-6 w-full" />
          <p className="ms-72 mt-2 bg-gray-400 w-28 ps-1 text-sm text-nowrap ">
            12 August 2022{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
