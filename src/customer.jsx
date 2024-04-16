// // import "primeicons/primeicons.css";

// // function customer() {
// //   return (
// //     <div className="bg-stone-300">
// //       <div className="flex gap-4">
// //         <div className="bg-cyan-200 w-72 h-80 shadow-md rounded-lg  text-black ">
// //           <div className="mt-2 ms-1 rounded shadow-2xl outline-cyan-500">
// //             <i className="pi pi-search"></i>
// //             <input
// //               type="text"
// //               placeholder="   Search"
// //               className="outline-none rounded"
// //             />
// //           </div>
// //         </div>

// //         <div className="bg-white  h-80 shadow-md rounded-lg  text-black ">
// //           09
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default customer;

// import { Button } from "primereact/button";

// export default function BasicDemo() {
//   return (
//     <div className="card flex justify-content-center">
//       <Button label="Check" icon="pi pi-check" />
//     </div>
//   );
// }

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
  return (
    <>
      <IconField iconPosition="left" className="ms-4">
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText v-model="value1" placeholder="Search" />
      </IconField>
    </>
  );
}
