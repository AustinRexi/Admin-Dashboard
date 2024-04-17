import User1 from "./assets/User1.svg";
function Product() {
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
  return (
    <div>
      {data.map((el, i) => {
        return (
          <div className="bg-red-100 ms-1 mt-6 flex gap-2 " key={i}>
            <img src={el.icon} alt="" />{" "}
            <div className="text-nowrap text-xs">
              <p className="mt-1">{el.name}</p>
              <p>{el.description}</p>
            </div>
            <div className="text-xs">
              <p>{el.status}</p> <p>{el.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
