/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./HeaderAdmin.css";
import { useDispatch } from "react-redux";
import { Avatar } from "@mui/material";
import { logout } from "../../../../redux/slices/signUpSlice";
import { notification } from "../../../../utils/helper";
import { useNavigate } from "react-router-dom";


function HeaderAdmin({ handleClickAbout, handleClickTeacher, handleClickCourse }) {
  const userInfor = JSON.parse(localStorage.getItem("userInfor")) ?? [];

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          </div>
          <div className=" justify-center items-center flex gap-[20px]">
            {/* <Link className="px-4 py-2 text-m font-bold border border-green-500 text-green-700 transition-all duration-150 bg-white rounded shadow outline-none hover:shadow-md focus:outline-none ease">
              Góc học tập
            </Link> */}
              <div className="flex justify-center items-center gap-[20px]">
                <Avatar src={userInfor.avatar} />
                <p>Hi, {userInfor.fullname}</p>

                <button
                  onClick={handleLogOut}
                  className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                >
                  Log out
                </button>
              </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderAdmin;
