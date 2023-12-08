/* eslint-disable react/prop-types */
function OrderItem({ cartItem }) {
  return (
    <div>
      <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 mt-[20px] w-[1140px]">
        <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
          <div className="w-full md:w-40">
            <img
              className="w-full hidden md:block"
              src={cartItem.img}
              alt="dress"
            />
          </div>
          <div className="flex justify-between w-full flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                {cartItem.name}
              </h3>
              <p className="text-sm dark:text-white leading-none w-[600px] truncate text-gray-800">
                <span className="dark:text-black text-black">DESC :</span>{" "}
                {cartItem.desc}
              </p>
            </div>
            <div className="">
              <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                {cartItem.price.toLocaleString()}đ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
