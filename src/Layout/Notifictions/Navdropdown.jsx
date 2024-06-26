import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

function Navdropdown() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Nanny's Shop"
        className="w-full  mt-2  md:w-14rem px-3 h-10 border-none outline-none"
        checkmark={true}
        highlightOnSelect={false}
      />
    </div>
  );
}

export default Navdropdown;
