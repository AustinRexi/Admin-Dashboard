import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import Product from "./Product";
import User1 from "./assets/User1.svg";
import { useState } from "react";

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
      status: "new",
    },
    {
      name: "Janet Adebayo",
      description: "Hey i want to make inquiries about your ...",
      icon: User1,
      time: "12:55am",
      status: "new",
    },
    {
      name: "Kunle Adekunle",
      description: "Hey i want to make inquiries about your ...",
      icon: User1,
      time: "12:55am",
      status: "new",
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
    <div className="bg-stone-100">
      <div className="ms-3 font-medium leading-normal mt-2 flex">
        Conversations with customers{" "}
      </div>
      <div className="grid grid-rows-3 grid-flow-col bg-stone-100 gap-2 ">
        <div className="row-span-3 bg-white  w-80 mt-2 ms-4 shadow-md rounded-lg  text-black  relative...">
          <div className="flex mt-1">
            {" "}
            <div className="ms-2 font-medium font-sans">Contacts</div>{" "}
            <div className=" text-gray-400 ms-52">34</div>{" "}
          </div>
          <IconField iconPosition="left" className="ms-4 mt-2 py-2">
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText
              v-model="search"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search"
            />
          </IconField>
          <Product data={filteredData} />
        </div>
        <div className="col-span-2 ...">02</div>
      </div>
    </div>
  );
}
