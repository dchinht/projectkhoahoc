import TestFields from "../../../components/TestField/TestField";
import AdminLayout from "../AdminLayout/AdminLayout";
import SearchIcon from "@mui/icons-material/Search";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import UserTable from "./UserTable";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getListUser, searchByName } from "../../../redux/slices/signUpSlice";
import * as React from "react";
import UserModal from "./UserModal";
import { useState } from "react";

function UserManager() {
  const [open, setOpen] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setIsEdit(false);
    setOpen(false);
    setUser({
      fullname: "",
      username: "",
      email: "",
      password: "",
    });
  };

  const handleEdit = (item) => {
    setOpen(true);
    setIsEdit(true);
    setUser(item);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListUser());
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    dispatch(searchByName(searchValue));
  };


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
                <TestFields
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search here..."
                />
                <button  onClick={handleSearch}>
                  <SearchIcon
                    style={{ fontSize: "40px", marginTop: "5px" }}
                  />
                </button>
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
          <UserModal
            data={user}
            isEdit={isEdit}
            isopen={open}
            handleClose={handleClose}
          />
        )}
      </AdminLayout>
    </div>
  );
}

export default UserManager;
