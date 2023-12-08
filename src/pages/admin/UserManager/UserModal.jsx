/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import Modal from "@mui/material/Modal";
import TestFields from "../../../components/TestField/TestField";
import * as yup from "yup";
import { useFormik } from "formik";
// random id theo dạng string
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { getListSignUp, getListUser, updateUser } from "../../../redux/slices/signUpSlice";
import { notification } from "../../../utils/helper";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function UserModal({isopen, handleClose, isEdit, data }) {
  const { signUpList } = useSelector((state) => state.signUp);
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    fullname: yup.string().required("Please enter fullname"),
    username: yup.string().required("Please enter username"),
    email: yup.string().required("Please enter email").email("Invalid Email"),
    password: yup
      .string()
      .required("Please enter password")
      .min(3, "Minimun password is 3 characters"),
    cpassword: yup
      .string()
      .required("Please enter cpassword")
      .oneOf([yup.ref("password")], "Password not match"),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (isEdit == 1) {
        const newData = {
          id : data.id,
          fullname: values.fullname,
          username: values.username,
          email: values.email,
          password: values.password,
          isAdmin: data.isAdmin,
          avatar: data.avatar,
        }
        console.log(2)
        dispatch(updateUser({userId : data.id,userData : newData}))
        window.location.reload();
      } else {
        const newData = {
          id: uuidv4(),
          fullname: values.fullname,
          username: values.username,
          email: values.email,
          password: values.password,
          isAdmin: "User",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83_4nYbepKSRjeX5LgJcF8imUzSjkC49iXg&usqp=CAU",
        };
        // check username cos toofn taij hay kh
        let checkUsername = signUpList.find(
          (x) => x.username === values.username
        );
        // check Email
        let checkEmail = signUpList.find((xx) => xx.email === values.email);
        if (checkUsername || checkEmail) {
          notification("đăng kí kh thành công", "error");
        } else {
          dispatch(getListSignUp(newData));
          window.location.reload();
        }
      }
      
    },
  });

  useEffect(() => {
    dispatch(getListUser());
  }, []);

  return (
    <div>
      <Modal
        open={isopen == 1 ? true : false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="flex justify-between items-center">
              <div />
              <h1 style={{ fontSize: "30px ", fontWeight: "700" }}>
                {isEdit == 1  ? "EDIT" : "ADD USER"}
              </h1>
              <div onClick={handleClose}>
                <CancelIcon />
              </div>
            </div>
            <div className="flex justify-center">
              <form onSubmit={formik.handleSubmit}>
                <TestFields
                  name="Fullname"
                  placeholder="Enter your username"
                  type="text"
                  required={true}
                  value={formik.values.fullname}
                  onChange={formik.handleChange("fullname")}
                  helperText={formik.touched.fullname && formik.errors.fullname}
                  error={
                    formik.touched.fullname && Boolean(formik.errors.fullname)
                  }
                />
                <TestFields
                  name="Username"
                  placeholder="Enter your username"
                  type="text"
                  required={true}
                  value={formik.values.username}
                  onChange={formik.handleChange("username")}
                  helperText={formik.touched.username && formik.errors.username}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                />
                <TestFields
                  name="Email"
                  placeholder="Enter your email"
                  type="email"
                  required={true}
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  helperText={formik.touched.email && formik.errors.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
                <TestFields
                  name="Password"
                  placeholder="Enter your password"
                  type="password"
                  required={true}
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  helperText={formik.touched.password && formik.errors.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
                <div className="flex justify-center">
                  <button 
                    type="submit"
                    className="mt-5 w-[150px] flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    {isEdit == 1 ? "EDIT" : "ADD USER"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default UserModal;
