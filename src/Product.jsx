function Product(props) {
  const { data } = props;
  // const data = [
  //   {
  //     name: "Jane Doe",
  //     description: "Hey i want to make inquiries about your ...",
  //     icon: User1,
  //     time: "12:55am",
  //     status: "new",
  //   },
  //   {
  //     name: "Janet Adebayo",
  //     description: "Hey i want to make inquiries about your ...",
  //     icon: User1,
  //     time: "12:55am",
  //     status: "new",
  //   },
  //   {
  //     name: "Kunle Adekunle",
  //     description: "Hey i want to make inquiries about your ...",
  //     icon: User1,
  //     time: "12:55am",
  //     status: "new",
  //   },
  //   {
  //     name: "Jane Doe",
  //     description: "Hey i want to make inquiries about your ...",
  //     icon: User1,
  //     time: "12:55am",
  //   },
  //   {
  //     name: "Janet Adebayo",
  //     description: "Hey i want to make inquiries about your ...",
  //     icon: User1,
  //     time: "12:55am",
  //   },
  //   {
  //     name: "Kunle Adekunle",
  //     description: "Hey i want to make inquiries about your ...",
  //     icon: User1,
  //     time: "12:55am",
  //   },
  //   {
  //     name: "Jane Doe",
  //     description: "Hey i want to make inquiries about your ...",
  //     icon: User1,
  //     time: "12:55am",
  //   },
  //   {
  //     name: "Janet Adebayo",
  //     description: "Hey i want to make inquiries about your ...",
  //     icon: User1,
  //     time: "12:55am",
  //   },
  //   {
  //     name: "Kunle Adekunle",
  //     description: "Hey i want to make inquiries about your ...",
  //     icon: User1,
  //     time: "12:55am",
  //   },
  // ];
  return (
    <div className=" px-4 text-nowrap">
      {data?.map((el, i) => {
        return (
          <div className="bg-gray-100  mt-3 flex gap-0 " key={i}>
            <img src={el.icon} alt="" />
            <div className="text-nowrap text-xs">
              <p className="mt-1">{el.name}</p>
              <p>{el.description}</p>
            </div>
            <div className="text-xs">
              <p className="ms-1">{el.status}</p>
              <p className="mt-1">{el.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
