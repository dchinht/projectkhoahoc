import moment from "moment/moment";
import HomeLayout from "../../components/HomeLayout/HomeLayout";
import OrderItem from "./OrderItem";

function OrderHistory() {
  const history = JSON.parse(localStorage.getItem("history")) ?? [];

  return (
    <HomeLayout>
      <div>
        {history.length > 0 &&
          history.reverse().map((item, index) => (
            <div
              key={index}
              style={{ border: "1px solid black" }}
              className="w-[1200px] ml-[300px] mt-[100px] mb-[100px] pb-[30px] pt-[30px] pl-[30px] pr-[30px]"
            >
              <div className="flex flex-col justify-start items-start w-full space-y-9">
                <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                  <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div
                      style={{ backgroundColor: "rgb(209, 209, 209)" }}
                      className="flex justify-between w-[1140px] pb-[30px] pt-[30px] pl-[30px] pr-[30px]"
                    >
                      <div className="flex gap-[5px] ">
                        <div className="flex gap-2">
                          <img
                            className="w-8 h-8"
                            alt="logo"
                            src="https://i.ibb.co/L8KSdNQ/image-3.png"
                          />
                          <div>
                            <h3 className="text-xl dark:text-white font-semibold w-[150px] text-gray-800">
                              Order number
                            </h3>
                            <h1>{item.id}</h1>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h3 className="text-xl dark:text-white font-semibold w-[150px] text-gray-800">
                              Date placed
                            </h3>
                            <h1>{moment(item.dateplaced).format('LL')}</h1>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h3 className="text-xl dark:text-white font-semibold w-[200px] text-gray-800">
                              Total amount
                            </h3>
                            <h1>{item.totalPrice.toLocaleString()}đ</h1>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center items-center gap-[20px]">
                        <button
                          style={{ borderRadius: "20px" }}
                          className=" w-[200px] hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96  bg-gray-800 text-base font-medium  text-white"
                        >
                          View Order
                        </button>
                        <button
                          style={{ borderRadius: "20px" }}
                          className=" w-[200px] hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96  bg-gray-800 text-base font-medium  text-white"
                        >
                          View Invoice
                        </button>
                      </div>
                    </div>
                    { item.cart.map((cartItem,index) => (
                           <OrderItem key={index} cartItem={cartItem} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </HomeLayout>
  );
}

export default OrderHistory;
