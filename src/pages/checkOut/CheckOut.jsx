/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import SingleSelect from "../../components/Dropdown/SingleSelect";
import HomeLayout from "../../components/HomeLayout/HomeLayout";
import TestFieldCheckOut from "../../components/TestField/TestFlieldCheckOut";
import { useEffect, useState } from "react";
import {
  apiGetDistrict,
  apiGetProvinces,
  apiGetWard,
} from "../../services/api";
import { useFormik } from "formik";
import * as yup from "yup";
import { v4 as uuidv4 } from 'uuid'; 
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [wards, setWard] = useState([]);
  const navigate = useNavigate();
  const [formSate, setformSatte] = useState({
    province: 0,
    district: 0,
    ward: 0,
  });

  const history = JSON.parse(localStorage.getItem("history")) ?? []
  const { cartList } = useSelector((state) => state.cart);
  const tongsp = cartList.reduce((acc, curr) => acc + curr.price, 0);

  useEffect(() => {
    const fetchPublicProvince = async () => {
      const res = await apiGetProvinces();
      if (res.status == 200) {
        setProvinces(res.data.results);
      }
    };
    fetchPublicProvince();
  }, []);

  useEffect(() => {
    const fetchPublicDistrict = async () => {
      const res = await apiGetDistrict(formSate.province);
      if (res.status == 200) {
        setDistrict(res.data.results);
      }
    };
    formSate.province !== 0 && fetchPublicDistrict();
  }, [formSate.province]);

  useEffect(() => {
    const fetchPublicWard = async () => {
      const res = await apiGetWard(formSate.district);
      if (res.status == 200) {
        setWard(res.data.results);
      }
    };
    formSate.district !== 0 && fetchPublicWard();
  }, [formSate.district]);

  const convertProvince = (arr) => {
    const provinceList = arr.map((item) => ({
      value: item.province_id,
      label: item.province_name,
    }));
    return provinceList;
  };

  const convertDistrict = (arr) => {
    const districtList = arr.map((item) => ({
      value: item.district_id,
      label: item.district_name,
    }));
    return districtList;
  };

  const convertWard = (arr) => {
    const wardList = arr.map((item) => ({
      value: item.ward_id,
      label: item.ward_name,
    }));
    return wardList;
  };

  // formik validate
  const dispatch = useDispatch();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = yup.object({
    fullname: yup.string().required("Please enter username"),
    email: yup.string().required("Please enter email").email("Invalid Email"),
    phone: yup
      .string()
      .required("Please enter phone")
      .matches(phoneRegExp,'Phone number is not valid')
      .min(10, "Max phone is 10 characters")
      .max(10, "Max phone is 10 characters"),
    atm: yup
      .string()
      .required("Please enter atm")
      .min(17, "Minimun atm is 17 characters")
      .max(17, "Max atm is 17 characters"),
    mmyy: yup
      .string()
      .required("Please enter atm")
      .min(4, "Minimun atm is 4 characters")
      .max(4, "Max atm is 4 characters"),
    cvc: yup
      .string()
      .required("Please enter cvc")
      .min(3, "Minimun cvc is 3 characters")
      .max(3, "Max cvc is 3 characters"),
    address: yup.string().required("Please enter address"),
    nameatm: yup.string().required("Please enter name card"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      atm: "",
      mmyy: "",
      cvc: "",
      address:"",
      nameatm : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newData = {
        id : uuidv4(),
        fullname: values.fullname,
        email: values.email,
        phone: values.phone,
        atm: values.atm,
        mmyy: values.mmyy,
        cvc: values.cvc,
        address: values.address,
        nameatm: values.nameatm,
        province : provinces.filter(x => x.province_id == formSate.province)[0].province_name,
        district : districts.filter(x => x.district_id == formSate.district)[0].district_name,
        ward : wards.filter(x => x.ward_id == formSate.ward)[0].ward_name,
        cart : [...cartList],
        totalPrice : tongsp,
        dateplaced : moment()
      };
      localStorage.setItem("history",JSON.stringify([...history,newData]))
      localStorage.removeItem("cart")
      navigate('/')
      window.location.reload();
    },
  });

  
  return (
    <HomeLayout>
      <div>
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
          {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              {/* listsp */}

              <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                      Payment
                    </h3>
                    <div className="flex justify-between items-start w-full">
                      <div className="flex justify-center items-center space-x-4">
                        <div className="w-8 h-8">
                          <img
                            className="w-full h-full"
                            alt="logo"
                            src="https://i.ibb.co/L8KSdNQ/image-3.png"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-center">
                          <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                            DPD
                            <br />
                            <span className="font-normal">
                              Pay action with 24 Hours
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
                        0đ
                      </p>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                        View Carrier Details
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                      Summary
                    </h3>
                    <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                      <div className="flex justify-between w-full">
                        <p className="text-base dark:text-white leading-4 text-gray-800">
                          Subtotal
                        </p>
                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                          {tongsp.toLocaleString()}đ
                        </p>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <p className="text-base dark:text-white leading-4 text-gray-800">
                          Discount{" "}
                          <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
                            STUDENT
                          </span>
                        </p>
                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                          0đ
                        </p>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <p className="text-base dark:text-white leading-4 text-gray-800">
                          Shipping
                        </p>
                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                          0đ
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                        Total
                      </p>
                      <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                        {tongsp.toLocaleString()}đ
                      </p>
                    </div>
                  </div>
                </div>

                {cartList.length > 0 &&
                  cartList.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
                    >
                      <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                        <div className="w-full md:w-40">
                          <img
                            className="w-full hidden md:block"
                            src={item.img}
                            alt="dress"
                          />
                        </div>
                        <div className="flex justify-between w-full flex-col md:flex-row space-y-4 md:space-y-0">
                          <div className="w-full flex flex-col justify-start items-start space-y-8">
                            <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                              {item.name}
                            </h3>
                            <p className="text-sm dark:text-white leading-none text-gray-800">
                              <span className="dark:text-black text-black">
                                DESC :
                              </span>{" "}
                              {item.desc}
                            </p>
                          </div>
                          <div className="">
                            <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                              {item.price.toLocaleString()}đ
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <form
                onSubmit={formik.handleSubmit}
                className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5"
              >
                <button className="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                  <div>
                    <svg
                      className="fill-current"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base leading-4">Bank transder payment</p>
                  </div>
                </button>
                <div className="flex flex-row justify-center items-center mt-6">
                  <hr className="border w-full" />
                  <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
                    or pay with card
                  </p>
                  <hr className="border w-full" />
                </div>
                <div className="mt-2">
                  <TestFieldCheckOut
                    name={"Fullname"}
                    width="520px"
                    type="email"
                    placeholder="Fullname"
                    value={formik.values.fullname}
                    onChange={formik.handleChange("fullname")}
                    helperText={
                      formik.touched.fullname && formik.errors.fullname
                    }
                    error={
                      formik.touched.fullname && Boolean(formik.errors.fullname)
                    }
                  />
                  <TestFieldCheckOut
                    name={"Email"}
                    width="520px"
                    type="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    helperText={
                      formik.touched.email && formik.errors.email
                    }
                    error={
                      formik.touched.email && Boolean(formik.errors.email)
                    }
                  />
                  <TestFieldCheckOut
                    name={"Phone"}
                    width="520px"
                    type="text"
                    placeholder="Phone number"
                    value={formik.values.phone}
                    onChange={formik.handleChange("phone")}
                    helperText={
                      formik.touched.phone && formik.errors.phone
                    }
                    error={
                      formik.touched.phone && Boolean(formik.errors.phone)
                    }
                  />
                </div>
                <b className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                  Card details
                </b>
                <div className="mt-2 flex-col">
                  <div>
                    <TestFieldCheckOut
                      width="520px"
                      type="text"
                      placeholder="0000 1234 6549 15151"
                      value={formik.values.atm}
                      onChange={formik.handleChange("atm")}
                      helperText={
                        formik.touched.atm && formik.errors.atm
                      }
                      error={
                        formik.touched.atm &&
                        Boolean(formik.errors.atm)
                      }
                    />
                  </div>
                  <div className="flex-row gap-[1px] flex">
                    <TestFieldCheckOut
                      width="260px"
                      type="text"
                      placeholder="MM/YY"
                      value={formik.values.mmyy}
                      onChange={formik.handleChange("mmyy")}
                      helperText={
                        formik.touched.mmyy && formik.errors.mmyy
                      }
                      error={
                        formik.touched.mmyy &&
                        Boolean(formik.errors.mmyy)
                      }
                    />
                    <TestFieldCheckOut
                      width="260px"
                      type="text"
                      placeholder="CVC"
                      value={formik.values.cvc}
                      onChange={formik.handleChange("cvc")}
                      helperText={
                        formik.touched.cvc && formik.errors.cvc
                      }
                      error={
                        formik.touched.cvc &&
                        Boolean(formik.errors.cvc)
                      }
                    />
                  </div>
                </div>
                <b className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                  Name on card
                </b>
                <TestFieldCheckOut
                  width="520px"
                  type="text"
                  placeholder="Name card"
                  value={formik.values.nameatm}
                  onChange={formik.handleChange("nameatm")}
                  helperText={formik.touched.nameatm && formik.errors.nameatm}
                  error={
                    formik.touched.nameatm && Boolean(formik.errors.nameatm)
                  }
                />
                <div className="flex gap-[1px] mt-[20px]">
                  <SingleSelect
                    name={"Province"}
                    value={formSate.province}
                    options={convertProvince(provinces)}
                    onChange={(e) =>
                      setformSatte({ ...formSate, province: e.target.value })
                    }
                    width="260px"
                    type="text"
                  />
                  <SingleSelect
                    name={"District"}
                    width="260px"
                    type="text"
                    value={formSate.district}
                    options={convertDistrict(districts)}
                    onChange={(e) =>
                      setformSatte({ ...formSate, district: e.target.value })
                    }
                  />
                </div>
                <div className="flex gap-[1px]">
                  <SingleSelect
                    name={"Ward"}
                    width="260px"
                    type="text"
                    value={formSate.ward}
                    options={convertWard(wards)}
                    onChange={(e) =>
                      setformSatte({ ...formSate, ward: e.target.value })
                    }
                  />
                  <TestFieldCheckOut
                    name={"Address"}
                    width="260px"
                    type="text"
                    placeholder="Address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    helperText={
                      formik.touched.address && formik.errors.address
                    }
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
                >
                  <div>
                    <p className="text-base leading-4">Pay </p>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default CheckOut;
