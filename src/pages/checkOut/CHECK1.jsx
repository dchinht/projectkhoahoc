// import HomeLayout from "../../components/HomeLayout/HomeLayout";

// function CheckOut() {
//   return (
//     <HomeLayout>
//       <div>
//         <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
//           {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
//           <div className="flex flex-col justify-start items-start w-full space-y-9">
//             <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
//               {/* listsp */}

//               <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
//                 <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
//                   <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
//                     List Products
//                   </p>
//                   <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
//                     <div className="pb-4 md:pb-8 w-full md:w-40">
//                       <img
//                         className="w-full hidden md:block"
//                         src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
//                         alt="dress"
//                       />
//                       <img
//                         className="w-full md:hidden"
//                         src="https://i.ibb.co/L039qbN/Rectangle-10.png"
//                         alt="dress"
//                       />
//                     </div>
//                     <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
//                       <div className="w-full flex flex-col justify-start items-start space-y-8">
//                         <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
//                           Premium Quaility Dress
//                         </h3>
//                         <div className="flex justify-start items-start flex-col space-y-2">
//                           <p className="text-sm dark:text-white leading-none text-gray-800">
//                             <span className="dark:text-gray-400 text-gray-300">
//                               Style:{" "}
//                             </span>{" "}
//                             Italic Minimal Design
//                           </p>
//                           <p className="text-sm dark:text-white leading-none text-gray-800">
//                             <span className="dark:text-gray-400 text-gray-300">
//                               Size:{" "}
//                             </span>{" "}
//                             Small
//                           </p>
//                           <p className="text-sm dark:text-white leading-none text-gray-800">
//                             <span className="dark:text-gray-400 text-gray-300">
//                               Color:{" "}
//                             </span>{" "}
//                             Light Blue
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex justify-between space-x-8 items-start w-full">
//                         <p className="text-base dark:text-white xl:text-lg leading-6">
//                           $36.00{" "}
//                           <span className="text-red-300 line-through">
//                             {" "}
//                             $45.00
//                           </span>
//                         </p>
//                         <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
//                           01
//                         </p>
//                         <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
//                           $36.00
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
//                     <div className="w-full md:w-40">
//                       <img
//                         className="w-full hidden md:block"
//                         src="https://i.ibb.co/s6snNx0/Rectangle-17.png"
//                         alt="dress"
//                       />
//                       <img
//                         className="w-full md:hidden"
//                         src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png"
//                         alt="dress"
//                       />
//                     </div>
//                     <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
//                       <div className="w-full flex flex-col justify-start items-start space-y-8">
//                         <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
//                           High Quaility Italic Dress
//                         </h3>
//                         <div className="flex justify-start items-start flex-col space-y-2">
//                           <p className="text-sm dark:text-white leading-none text-gray-800">
//                             <span className="dark:text-gray-400 text-gray-300">
//                               Style:{" "}
//                             </span>{" "}
//                             Italic Minimal Design
//                           </p>
//                           <p className="text-sm dark:text-white leading-none text-gray-800">
//                             <span className="dark:text-gray-400 text-gray-300">
//                               Size:{" "}
//                             </span>{" "}
//                             Small
//                           </p>
//                           <p className="text-sm dark:text-white leading-none text-gray-800">
//                             <span className="dark:text-gray-400 text-gray-300">
//                               Color:{" "}
//                             </span>{" "}
//                             Light Blue
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex justify-between space-x-8 items-start w-full">
//                         <p className="text-base dark:text-white xl:text-lg leading-6">
//                           $20.00{" "}
//                           <span className="text-red-300 line-through">
//                             {" "}
//                             $30.00
//                           </span>
//                         </p>
//                         <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
//                           01
//                         </p>
//                         <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
//                           $20.00
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
//                   <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
//                     <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
//                       Summary
//                     </h3>
//                     <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
//                       <div className="flex justify-between w-full">
//                         <p className="text-base dark:text-white leading-4 text-gray-800">
//                           Subtotal
//                         </p>
//                         <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
//                           $56.00
//                         </p>
//                       </div>
//                       <div className="flex justify-between items-center w-full">
//                         <p className="text-base dark:text-white leading-4 text-gray-800">
//                           Discount{" "}
//                           <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
//                             STUDENT
//                           </span>
//                         </p>
//                         <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
//                           -$28.00 (50%)
//                         </p>
//                       </div>
//                       <div className="flex justify-between items-center w-full">
//                         <p className="text-base dark:text-white leading-4 text-gray-800">
//                           Shipping
//                         </p>
//                         <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
//                           $8.00
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex justify-between items-center w-full">
//                       <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
//                         Total
//                       </p>
//                       <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
//                         $36.00
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
//                     <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
//                       Shipping
//                     </h3>
//                     <div className="flex justify-between items-start w-full">
//                       <div className="flex justify-center items-center space-x-4">
//                         <div className="w-8 h-8">
//                           <img
//                             className="w-full h-full"
//                             alt="logo"
//                             src="https://i.ibb.co/L8KSdNQ/image-3.png"
//                           />
//                         </div>
//                         <div className="flex flex-col justify-start items-center">
//                           <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
//                             DPD Delivery
//                             <br />
//                             <span className="font-normal">
//                               Delivery with 24 Hours
//                             </span>
//                           </p>
//                         </div>
//                       </div>
//                       <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
//                         $8.00
//                       </p>
//                     </div>
//                     <div className="w-full flex justify-center items-center">
//                       <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
//                         View Carrier Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
//                 <button className="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
//                   <div>
//                     <svg
//                       className="fill-current"
//                       width={16}
//                       height={16}
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
//                         fill="currentColor"
//                       />
//                       <path
//                         d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-base leading-4">Bank transder payment</p>
//                   </div>
//                 </button>
//                 <div className="flex flex-row justify-center items-center mt-6">
//                   <hr className="border w-full" />
//                   <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
//                     or pay with card
//                   </p>
//                   <hr className="border w-full" />
//                 </div>
//                 <div className="mt-8">
//                   <input
//                     className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600 mb-[3px]"
//                     type="text"
//                     name
//                     id
//                     placeholder="Name"
//                   />
//                   <input
//                     className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600 mb-[3px]"
//                     type="email"
//                     name
//                     id
//                     placeholder="Email"
//                   />
//                   <input
//                     className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                     type="text"
//                     name
//                     id
//                     placeholder="Phone number"
//                   />
//                 </div>
//                 <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
//                   Card details
//                 </label>
//                 <div className="mt-2 flex-col">
//                   <div>
//                     <input
//                       className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 mb-[3px]"
//                       type="email"
//                       name
//                       id
//                       placeholder="0000 1234 6549 15151"
//                     />
//                   </div>
//                   <div className="flex-row gap-[3px] flex">
//                     <input
//                       className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                       type="email"
//                       name
//                       id
//                       placeholder="MM/YY"
//                     />
//                     <input
//                       className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                       type="email"
//                       name
//                       id
//                       placeholder="CVC"
//                     />
//                   </div>
//                 </div>
//                 <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
//                   Name on card
//                 </label>
//                 <div className="mt-2 flex-col">
//                   <div>
//                     <input
//                       className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                       type="email"
//                       name
//                       id
//                       placeholder="Name on card"
//                     />
//                   </div>
//                 </div>
//                 <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
//                   Delivery address
//                 </label>
//                 <div className="mt-2 flex-col">
//                   {/* <input
//                     className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                     type="text"
//                     name
//                     id
//                     placeholder="Conscious"
//                   />
//                   <input
//                     className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                     type="text"
//                     name
//                     id
//                     placeholder="District"
//                   />
//                   <input
//                     className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                     type="text"
//                     name
//                     id
//                     placeholder="Commune"
//                   /> */}
//                   <input
//                     className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                     type="text"
//                     name
//                     id
//                     placeholder="Address"
//                   />
//                 </div>
//                 <button className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
//                   <div>
//                     <p className="text-base leading-4">Pay </p>
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </HomeLayout>
//   );
// }

// export default CheckOut;
