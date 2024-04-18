import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import Product from "./Product";

export default function Conversations() {
  return (
    <div className="bg-stone-100">
      <div className="ms-3 leading-normal mt-2">
        conversations with customers{" "}
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
            <InputText v-model="value1" placeholder="Search" />
          </IconField>
          <Product />
        </div>
        <div className="col-span-2 ...">02</div>
      </div>
    </div>
  );
}
