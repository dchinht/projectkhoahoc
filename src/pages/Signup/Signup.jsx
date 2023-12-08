/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../components/HomeLayout/HomeLayout";
import TestFields from "../../components/TestField/TestField";
import * as yup from "yup";
import { useFormik } from "formik";
// random id theo dạng string
import { v4 as uuidv4 } from 'uuid'; 
import { useDispatch, useSelector } from "react-redux";
import { getListSignUp, getListUser } from "../../redux/slices/signUpSlice";
import { notification } from "../../utils/helper";

function Signup() {
  const {signUpList} = useSelector(state => state.signUp)
  const dispatch = useDispatch()
  // chuyển trang
  const navigate = useNavigate()

  const validationSchema = yup.object({
    fullname: yup.string().required("Please enter fullname"),
    username: yup.string().required("Please enter username"),
    email: yup.string().required("Please enter email").email("Invalid Email"),
    password: yup.string().required("Please enter password").min(3, "Minimun password is 3 characters"),
    cpassword: yup.string().required("Please enter cpassword").oneOf([yup.ref("password")], "Password not match"),
  });

  const randomId = () => {
    return Math.floor(Math.random() * 9999);
  }
  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema : validationSchema,
    onSubmit : (values) => {
        const newData = {
          id : uuidv4(),
          fullname : values.fullname,
          username : values.username,
          email : values.email,
          password : values.password,
          isAdmin : "User",
          avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83_4nYbepKSRjeX5LgJcF8imUzSjkC49iXg&usqp=CAU"
        }
        // check username cos toofn taij hay kh
        let checkUsername = signUpList.find(x => x.username === values.username)
        // check Email
        let checkEmail= signUpList.find(xx => xx.email === values.email)
        if (checkUsername || checkEmail) {
          notification('đăng kí kh thành công','error')
        }else{
          dispatch(getListSignUp(newData))
          navigate('/login')
        }
        
    }
  });

  useEffect(()=>{
    dispatch(getListUser())
  },[])

  return (
    <div>
      <HomeLayout>
        {/* component */}
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <div
          className="bg-no-repeat bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/564x/6a/12/c7/6a12c78ed5db8908631c6f9f0692ec23.jpg)",
          }}
        >
          <div className="absolute bg-gradient-to-b from-gray-500 to-green-400 opacity-75 inset-0 z-0" />
          <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
            <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
              <div className="self-start hidden lg:flex flex-col  text-white">
                {/* <img src className="mb-3" /> */}
                <h1 className="mb-3 font-bold text-5xl">
                  Hi ? Welcome Back Aji{" "}
                </h1>
                <p className="pr-3">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups
                </p>
              </div>
            </div>
            <div className="flex justify-center self-center  z-10">
              <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                <div className="mb-4">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    Sign Up{" "}
                  </h3>
                  <p className="text-gray-500">
                    Please sign up to your account.
                  </p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <TestFields
                    name="Fullname"
                    placeholder="Enter your username"
                    type="text"
                    required={true}
                    value={formik.values.fullname}
                    onChange={formik.handleChange("fullname")}
                    helperText={
                      formik.touched.fullname && formik.errors.fullname
                    }
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
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
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
                    helperText={
                      formik.touched.email && formik.errors.email
                    }
                    error={
                      formik.touched.email && Boolean(formik.errors.email)
                    }
                  />
                  <TestFields
                    name="Password"
                    placeholder="Enter your password"
                    type="password"
                    required={true}
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                  />
                  <TestFields
                    name="Confirm Password"
                    placeholder="Enter your cofirm password"
                    type="password"
                    required={true}
                    value={formik.values.cpassword}
                    onChange={formik.handleChange("cpassword")}
                    helperText={
                      formik.touched.cpassword && formik.errors.cpassword
                    }
                    error={
                      formik.touched.cpassword && Boolean(formik.errors.cpassword)
                    }
                  />
                <button
                  type="submit"
                  className="mt-5 w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign Up
                </button>
                </form>
              </div>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <Link
                to="/login"
                style={{ color: "brown", paddingRight: "10px" }}
              >
                Sign in
              </Link>
              <span>
                Copyright © 2021-2022
                <a
                  href="https://codepen.io/uidesignhub"
                  rel
                  target="_blank"
                  title="Ajimon"
                  className="text-green hover:text-green-500 "
                >
                  AJI
                </a>
              </span>
            </div>
          </div>
        </div>
      </HomeLayout>
    </div>
  );
}

export default Signup;
