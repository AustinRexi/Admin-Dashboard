import Sales from "./assets/Sales.svg";
import Week from "./Week";
import Customer2 from "./assets/Customer2.svg";
import Order2 from "./assets/Order2.svg";
import Acquisition from "./assets/Acquisition.svg";
import Purchase from "./assets/Purchase.svg";
import Retention from "./assets/Retention.svg";
import image1 from "./assets/image1.svg";
import image2 from "./assets/image2.svg";
import Inventory2 from "./assets/Inventory2.svg";
import Cart from "./assets/Cart.svg";
import DonutChartRace from "./Chart";
import pending from "./assets/pending.svg";
import completed from "./assets/completed.svg";

function Dashboard() {
  const data = [
    {
      icon: image1,
      phone: "Iphone 13",
      date: "17 sept 2022",
      status: pending,
      Amount: "#730,000.00 x 1",
    },
    {
      icon: image2,
      phone: "Iphone 13",
      date: "17 sept 2022",
      status: completed,
      Amount: "#730,000.00 x 1",
    },
    {
      icon: image1,
      phone: "Iphone 13",
      date: "17 sept 2022",
      status: pending,
      Amount: "#730,000.00 x 1",
    },
    {
      icon: image2,
      phone: "Iphone 13",
      date: "17 sept 2022",
      status: completed,
      Amount: "#730,000.00 x 1",
    },
    {
      icon: image2,
      phone: "Iphone 13",
      date: "17 sept 2022",
      status: completed,
      Amount: "#730,000.00 x 1",
    },
    {
      icon: image2,
      phone: "Iphone 13",
      date: "17 sept 2022",
      status: completed,
      Amount: "#730,000.00 x 1",
    },
    {
      icon: image1,
      phone: "Iphone 13",
      date: "17 sept 2022",
      status: pending,
      Amount: "#730,000.00 x 1",
    },
    {
      icon: image1,
      phone: "Iphone 13",
      date: "17 sept 2022",
      status: pending,
      Amount: "#730,000.00 x 1",
    },
    {
      icon: image1,
      phone: "Iphone 13",
      date: "17 sept 2022",
      status: pending,
      Amount: "#730,000.00 x 1",
    },
  ];
  return (
    <div className="ms-4 bg-stone-100 px-2 py-3">
      <div className="flex ms-2 gap-6">
        <div className="flex gap-16  ">
          <div className="bg-white w-72 h-40 shadow-md rounded-lg  text-black  relative">
            <div className="flex gap-x-6 ms-2 mt-2">
              <img src={Sales} alt=""></img>
              <Week />
            </div>
            <div className="flex gap-3 mx-1">
              {" "}
              <div className="ms-2 ">
                <p className="text-base font-sans  font-normal leading-relaxed text-gray-500 mt-4">
                  Sales
                </p>
                <p className="text-xl font-semibold  mb-6 mt-2">
                  {" "}
                  #4,000,000.00{" "}
                </p>
              </div>
              <div>
                <p className="text-base font-normal font-sans  text-gray-500 mt-4">
                  Volume
                </p>
                <p className="text-xl font-semibold mt-2  mb-6 ms-1 flex">
                  450{" "}
                  <span className="text-green-400 mx-2 text-sm mt-2 ">
                    +20.00%
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4  ">
          <div className="bg-white w-72 h-30 shadow-md rounded-lg  text-black  relative">
            <div className="flex gap-x-6 ms-2 mt-2">
              <img src={Customer2} alt=""></img>
              <Week />
            </div>
            <div className="flex gap-3 mx-1">
              <div className="ms-1">
                <p className="text-base font-normal font-sans  text-gray-500 mt-4">
                  Customer
                </p>
                <p className="text-xl font-semibold mt-1 ms-1 flex">
                  1,250
                  <span className="text-green-400 mx-2 text-sm mt-2 ">
                    +15.80%
                  </span>
                </p>
              </div>
              <div>
                <p className="text-base font-normal font-sans  text-gray-500 mt-4">
                  Active
                </p>
                <p className="text-xl font-semibold mt-1 ms-1 flex">
                  1,180
                  <span className="text-green-400 mx-2 text-sm mt-2 ">
                    +85.00%
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4  ">
          <div className="bg-white w-96 h-30 shadow-md rounded-lg  text-black  ms-6 relative">
            <div className="flex gap-28 ms-3 mt-2">
              <img src={Order2} alt=""></img>
              <Week />
            </div>
            <div className="flex gap-4 mx-1">
              <div className="ms-1">
                <p className="text-base font-normal font-sans  text-gray-500 mt-4">
                  All Order
                </p>
                <p className="text-xl font-semibold mt-1 ms-1 flex">450</p>
              </div>
              <div className="ms-1">
                <p className="text-base font-normal font-sans  text-gray-500 mt-4">
                  Pending
                </p>
                <p className="text-xl font-semibold mt-1 ms-1 flex">5</p>
              </div>
              <div>
                <p className="text-base font-normal font-sans  text-gray-500 mt-4">
                  Completed
                </p>
                <p className="text-xl font-semibold mt-1 ms-1 flex">445</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex ms-2 gap-6 mt-4 pb-2 ">
        <div className="bg-white w-72 h-80 shadow-md rounded-lg  text-black  relative">
          <div className="flex pl-1 mt-2">
            <h2 className="font-medium ">Marketting</h2>
            <Week />
          </div>
          <div className="flex  ">
            <div className="flex gap-2 text-base font-normal ms-1 leading-loose  text-gray-300">
              <img src={Acquisition} alt=""></img>Acquisition
              <img src={Purchase} alt=""></img>Purchase
              <img src={Retention} alt=""></img>Retention
            </div>
          </div>
          <div className=" size-56  ms-4 absolute inset-0 mb-8 mix-blend-multiply bg-blue-400">
            <DonutChartRace />
          </div>
        </div>
        <div>
          <div className="bg-blue-500 w-72 h-36 shadow-md rounded-lg  text-white  relative">
            <div className="flex gap-x-6 ms-2 mt-2">
              <img src={Inventory2} alt="" className="mt-1"></img>
            </div>
            <div className="flex gap-10 mx-1">
              <div className="ms-1">
                <p className="text-base font-normal  leading-relaxed mt-4">
                  All Products
                </p>
                <p className="text-xl font-semibold my-2"> 45 </p>
              </div>
              <div>
                <p className="text-base font-normal  mt-4">Active</p>
                <p className="text-xl font-semibold my-2 ms-1 flex">
                  32{" "}
                  <span className="text-green-400 mx-2 text-sm mt-2 ">
                    +24.00%
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2  ">
            <div className="bg-white w-72 h-40 shadow-md rounded-lg  text-black  relative">
              <div className="flex gap-x-6 ms-2 mt-1">
                <img src={Cart} alt=""></img>
                <Week />
              </div>
              <div className="flex gap-6 mx-1">
                <div className="ms-1 mb-6">
                  <p className="text-base font-normal font-sans leading-normal text-red-500 mt-4">
                    Abadoned Cart
                  </p>
                  <p className="text-xl font-semibold mt-2 ms-1 flex">
                    20%
                    <span className="text-green-400 mx-2 text-sm mt-2 ">
                      +00.00%
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-base font-normal text-gray-500 mt-4">
                    Customer
                  </p>
                  <p className="text-xl font-semibold mt-2 ms-1 flex">30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4  ">
          <div className="bg-white w-96  shadow-md rounded-lg  text-black  ms-6 relative">
            <div className=" ms-3 mt-2">
              <p className="font-semibold">Recent orders</p>{" "}
              <div>
                {data.map((el, index) => {
                  return (
                    <div key={index} className="flex gap-2 mt-2">
                      <img src={el.icon} alt="" />
                      <div className="">
                        <h2 className="text-gray-600 font-normal text-base ">
                          {el.phone}
                        </h2>{" "}
                        <p className="text-black text-nowrap">{el.Amount}</p>
                      </div>{" "}
                      <div className="ms-24 mt-1">
                        <p className="text-gray-300">{el.date}</p>
                        <p className="mt-2">
                          <img src={el.status} alt="" />{" "}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
