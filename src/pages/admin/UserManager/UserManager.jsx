import TestFields from "../../../components/TestField/TestField";
import AdminLayout from "../AdminLayout/AdminLayout";
import SearchIcon from "@mui/icons-material/Search";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import UserTable from "./UserTable";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getListUser } from "../../../redux/slices/signUpSlice";
import * as React from "react";
import UserModal from "./UserModal";
import { useState } from "react";

function UserManager() {
  const [open, setOpen] = React.useState(0);
  const [isEdit, setIsEdit] = React.useState(0);
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleOpen = () => setOpen(1);

  const handleClose = () => {
    setIsEdit(0);
    setOpen(0);
    setUser({
      fullname: "",
      username: "",
      email: "",
      password: "",
    });
  };

  const handleEdit = (item) => {
    const newData = {
      fullname: item.fullname,
      username: item.username,
      email:  item.email,
      password:  item.password,
    }
    setOpen(1);
    setIsEdit(1);
    setUser(newData)
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListUser());
  }, []);

  return (
    <div>
      <AdminLayout>
        <div className="mt-[100px] flex justify-center items-center">
          <div className="w-[1000px]">
            <div className="flex justify-between">
              <h1>User Manager</h1>
              <button
                onClick={handleOpen}
                className=" bg-black rounded-[5px] text-white pb-[5px] pl-[10px] pr-[10px] pt-[5px]"
              >
                Add User
              </button>
            </div>
            <div className="pl-[20px] pr-[20px] mt-[50px] bg-[#DADADA] h-[100px] flex justify-between">
              <div className=" gap-[10px] flex items-center">
                <TestFields placeholder="Search here..." />
                <SearchIcon style={{ fontSize: "40px", marginTop: "5px" }} />
              </div>
              <div className="flex items-center">
                <DensityMediumIcon />
              </div>
            </div>
            <div className="mt-[50px]">
              <UserTable handleEdit={handleEdit} />
            </div>
          </div>
        </div>
        {open && (
          <UserModal data={user} isEdit={isEdit} isopen={open} handleClose={handleClose} />
        )}
      </AdminLayout>
    </div>
  );
}

export default UserManager;
