/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { getListEduType } from "../../redux/slices/eduTypeList";
import { Avatar } from "@mui/material";
import { logout } from "../../redux/slices/signUpSlice";
import { notification } from "../../utils/helper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

function Header({ handleClickAbout, handleClickTeacher, handleClickCourse }) {
  const token = localStorage.getItem("token");
  const userInfor = JSON.parse(localStorage.getItem("userInfor")) ?? [];

  const [isHover, setIsHover] = useState(false);
  const active = "font-medium hover:text-green-900";
  const active1 = "font-semibold text-green-700 border-b-2 border-green-700";
  // const [eduType, setEduTye] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartList } = useSelector((state) => state.cart);

  const { eduTypeList } = useSelector((state) => state.eduType);
  useEffect(() => {
    dispatch(getListEduType());
  }, []);

  const handleLogOut = () => {
    navigate("/");
    dispatch(logout());
    notification("Logout success");
  };

  return (
    <div className="sticky top-0 z-50">
      <header
        style={{
          boxShadow: "5px 5px 5px 5px lightgrey",
          borderBottom: "2px solid black",
        }}
        className="w-full text-gray-700 bg-white border-t border-gray-900 body-font "
      >
        <div className="flex  items-center justify-between p-6 mx-auto md:flex-row ">
          <div className="flex gap-[20px]">
            <img
              style={{ width: "60px", height: "60px", marginLeft: "50px" }}
              src="../src/assets/logohome.png"
              alt=""
            />
            <nav className="flex flex-wrap items-center justify-center pl-6 text-base border-l gap-9 border-gray-200 ">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? active1 : active;
                }}
              >
                Home
              </NavLink>
              <NavLink
                onClick={handleClickCourse}
                className="font-medium hover:text-green-900"
              >
                Khoá Học
              </NavLink>
              <Link
                onClick={handleClickTeacher}
                className="font-medium hover:text-green-900"
              >
                Giáo viên
              </Link>
              <NavLink>
                <div
                  className="font-medium hover:text-green-900"
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
                >
                  <p className="relative">Education</p>
                  <ul
                    className={`${
                      isHover ? "visible" : "invisible"
                    } w-[250px] bg-white absolute p-2 rounded-md border border-gray-600`}
                  >
                    {eduTypeList.length > 0 &&
                      eduTypeList.map((item, index) => (
                        <Link
                          to={item.subdomain}
                          key={item.id}
                          className="hover:text-green-300 "
                        >
                          <li>{item.name}</li>
                        </Link>
                      ))}
                  </ul>
                </div>
              </NavLink>
              <Link
                onClick={handleClickAbout}
                className="font-medium hover:text-green-900"
              >
                About
              </Link>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? active1 : active;
                }}
              >
                Contacts
              </NavLink>
              <NavLink
                to="/history"
                className={({ isActive }) => {
                  return isActive ? active1 : active;
                }}
              >
                Order History
              </NavLink>
            </nav>
          </div>
          <div className=" justify-center items-center flex gap-[20px]">
            {/* <Link className="px-4 py-2 text-m font-bold border border-green-500 text-green-700 transition-all duration-150 bg-white rounded shadow outline-none hover:shadow-md focus:outline-none ease">
              Góc học tập
            </Link> */}
            {token ? (
              <div className="flex justify-center items-center gap-[20px]">
                <Avatar src={userInfor.avatar} />
                <p>Hi, {userInfor.fullname}</p>
                <Link to="/cart">
                  <div>
                    <ShoppingCartIcon
                      className="text-teal-600 "
                      style={{ fontSize: "30px" }}
                    />
                    <p
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "brown",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        color: "white",
                        position: "absolute",
                        marginTop: "-35px",
                        marginLeft: "15px",
                      }}
                    >
                      {cartList.length}
                    </p>
                  </div>
                </Link>
                {userInfor.isAdmin && (
                  <Link to="/admin">
                    <ManageAccountsIcon style={{ fontSize: "35px" }} />
                  </Link>
                )}

                <button
                  onClick={handleLogOut}
                  className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-[20px]">
                <Link to="/Login" className="font-medium hover:text-gray-900">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
