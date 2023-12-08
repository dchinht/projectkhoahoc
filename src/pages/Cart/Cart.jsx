import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../components/HomeLayout/HomeLayout";
import EmptyCart from "../../components/emptyCart/EmptyCart";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { deleteCart } from "../../redux/slices/cartSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Cart() {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const confirmModal = (item) => {
    Swal.fire({
      title: "Bạn có muốn xoá không?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Delete Success", "", "success").then(
          dispatch(deleteCart(item))
        );
      }
    });
  };

  const tongsp = cartList.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <HomeLayout>
      {cartList.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="w-full bg-gray-100 pt-20 pb-[100px]">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="flex justify-center gap-[50px]">
            <div className="w-[700px]">
              {cartList.length > 0 &&
                cartList.map((item, index) => (
                  <div key={index} className="rounded-lg">
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                      <img
                        src={item.img}
                        alt="product-image"
                        className="w-[300px] h-[100px] rounded-lg sm:w-40"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900">
                            {item.name}
                          </h2>
                          <p className="mt-1 text-xs text-gray-700">
                            36EU - 4US
                          </p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                              {" "}
                              -{" "}
                            </span>
                            <input
                              className="h-8 w-8 border bg-white text-center text-xs outline-none"
                              type="number"
                              defaultValue={1}
                              min={1}
                            />
                            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                              {" "}
                              +{" "}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm">
                              {item.price.toLocaleString()}đ
                            </p>
                            <button onClick={() => confirmModal(item)}>
                              <HighlightOffIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Sub total */}
            <div className="mt-6 w-[400px] h-full rounded-lg border bg-white p-6 shadow-md md:mt-0">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">$129.99</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className>
                  <p className="mb-1 text-lg font-bold">
                    {tongsp.toLocaleString()}đ
                  </p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <Link to="/checkout">
                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                  Check out
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </HomeLayout>
  );
}

export default Cart;
