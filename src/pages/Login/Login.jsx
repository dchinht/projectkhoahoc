/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeLayout from '../../components/HomeLayout/HomeLayout'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/signUpSlice';
import FieldLogin from '../../components/TestField/FieldLogin';

function Login() {

  const token = localStorage.getItem("token")
  const {isLogin} = useSelector(state => state.signUp)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Please enter password").min(3, "Minimun password is 3 characters"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema : validationSchema,
    onSubmit : (values) => {
      let newUser = {
        username : values.username,
        password : values.password
      }
        dispatch(login(newUser))
        console.log(newUser)
    }
  })
  

  return (
  <div>
    <HomeLayout>
    { (isLogin || token) && navigate('/')}
    {/* component */}
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
    <div className="bg-no-repeat bg-cover bg-center relative" style={{backgroundImage: 'url(https://i.pinimg.com/564x/6a/12/c7/6a12c78ed5db8908631c6f9f0692ec23.jpg)'}}><div className="absolute bg-gradient-to-b from-gray-500 to-green-400 opacity-75 inset-0 z-0" />
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            {/* <img src className="mb-3" /> */}
            <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back Aji </h1>
            <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
              and publishing industries for previewing layouts and visual mockups</p>
          </div>
        </div>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-[500px]">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800 uppercase">
                  Sign In
                </h3>
                <p className="text-gray-500">Please sign in to your account.</p>
              </div>

              <form onSubmit={formik.handleSubmit}>
              <div className="space-y-5">
                {/* <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Username
                  </label>
                  <input
                    className="w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    type
                    placeholder="Enter your username"
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    type
                    placeholder="Enter your password"
                  />
                </div> */}
                <FieldLogin
                    className="w-[100px]"
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
                  <FieldLogin
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm text-gray-800"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-blue-400 hover:text-blue-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </button>
                </div>
              </div>
              </form>
              
              <div className="pt-5 text-center text-gray-400 text-xs">
                  <span style={{ marginRight:"5px" }}>
                     You have account?
                  </span>
                  <span className="text-red-500">
                    <Link to="/register"> Sign up</Link>
                  </span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </HomeLayout>
    </div> 
  );
}

export default Login;
