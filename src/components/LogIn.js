import React, { useState } from 'react';
import Select from 'react-select';
import { CountriesData } from './CountriesData';
import {FcGoogle} from 'react-icons/fc';
import { DiApple } from "react-icons/di";
import { CiMail } from "react-icons/ci";
import Facebook from '../images/facebook.png';

function LogIn({ onClose }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [country, setCountry] = useState(CountriesData);
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg z-10 relative">
        <div className="gap-5 signup font-[Calibri]">
          <form className=" ">
            <div className="flex items-center justify-between">
              <button
                className="flex items-start py-1 px-4 justify-start"
                onClick={closeModal}
>
                x
              </button>
              <div className="text-center">
                <label
                  for="chk"
                  className="m-0 md:px-44 sm:px-0 xs:px-0 lg:px-44 xl:px-44 px-0 font-bold text-center text-black  text-[14px]"
                  aria-hidden="true"
                >
                  Log in or sign up
                </label>
              </div>
            </div>
            <hr className="mt-1 " />

            <h4 className="font-[Calibri] font-bold text-[22px] mt-7 px-7">
              Welcome to Airbnb
            </h4>
            <div className="px-8 py-4">
              <Select
                id="countryCode"
                name="countryCode"
                options={country}
                value={selectedCountry}
                onChange={handleCountryChange}
                placeholder="Please select your country..."
                className="border-gray-300 border-[1px]  rounded-md"
              />

              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                placeholder="Phone Number"
                className="py-6 p-2 w-full h-[35px] border-gray-300 border-b-2 border-l-2 border-r-2 rounded-md"
                required
              />
              <p className="text-grey-800 text-xs px-1">
                We will call or text you to confirm your number.
                Standard message and data rates apply.
                <br />
                <a href="" className="underline ">
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className=" font-[Calibri] text-center mt-2 bg-[#c73d54] text-white p-3 mx-8  rounded-lg">
              <button className=" w-full font-bold">Continue</button>
            </div>

            <div className="flex items-center w-full py-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <div className="px-4 text-gray-500 font-semibold">
                or
              </div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

<div className="flex flex-col text-black  gap-3  border-0 py-1 items-center justify-center">     
                <span className="flex">
               <div className="flex items-start relative left-7 top-4 jus">
               
               <FcGoogle />
               </div>
                <input
          name="from_name"
          type="text"
          placeholder="Sign In with Gmail"
          className=" border rounded pl-8 p-3 w-full border-black md:w-[480px]"
        />
                </span>
                
                <span className="flex">
               <div className="flex w-5 h-5 items-start relative left-7 top-4 ">
                <img src={Facebook} alt="facebook-icon" />
               </div>
                <input
          name="from_name"
          type="text"
          placeholder="Sign In with Facebook"
          className=" border rounded pl-8 p-3 w-full border-black md:w-[480px]"
        />
                </span>
   
       <span className="flex">
               <div className="flex items-start relative left-7 top-4"><DiApple /></div>
                <input
          name="from_name"
          type="text"
          placeholder="Sign In with Apple"
          className=" border rounded pl-8 p-3 w-full border-black md:w-[480px]"
        />
                </span>
                <span className="flex">
               <div className="flex items-start relative left-7 top-4 "><CiMail /></div>
                <input
          name="from_name"
          type="text"
          placeholder="Sign In with Email"
          className=" border rounded pl-8 p-3 w-full border-black md:w-[480px] "
        />
                </span>
       
     </div>
          </form>
     
        </div>
        </div>
    </div>

    // <div className="flex justify-center mt-4 items-center">
    //   <div className="main justify-center items-center" id="log-in">
    //     <div className="gap-5 signup font-[Calibri]">
    //       <form className=" ">
    //         <div className="flex items-center justify-between">
    //           <button className="flex items-start py-1 px-4 justify-start">
    //             x
    //           </button>
    //           <div className="text-center">
    //             <label
    //               for="chk"
    //               className="m-0 px-40  font-bold text-center text-black  text-[14px]"
    //               aria-hidden="true"
    //             >
    //               Log in or sign up
    //             </label>
    //           </div>
    //         </div>
    //         <hr className="mt-1 " />

    //         <h4 className="font-[Calibri] font-bold text-[22px] mt-7 px-7">
    //           Welcome to Airbnb
    //         </h4>
    //         <div className="px-8 py-4">
    //           <Select
    //             id="countryCode"
    //             name="countryCode"
    //             options={country}
    //             value={selectedCountry}
    //             onChange={handleCountryChange}
    //             placeholder="Please select your country..."
    //             className="border-gray-300 border-[1px]  rounded-md"
    //           />

    //           <input
    //             type="tel"
    //             id="phone"
    //             name="phone"
    //             pattern="[0-9]{10}"
    //             placeholder="Phone Number"
    //             className="py-6 p-2 w-full h-[35px] border-gray-300 border-b-2 border-l-2 border-r-2 rounded-md"
    //             required
    //           />
    //           <p className="text-grey-800 text-xs px-1">
    //             We will call or text you to confirm your number.
    //             Standard message and data rates apply.
    //             <br />
    //             <a href="" className="underline ">
    //               Privacy Policy
    //             </a>
    //           </p>
    //         </div>
    //         <div className=" font-[Calibri] text-center mt-2 bg-[#c73d54] text-white p-3 mx-8  rounded-lg">
    //           <button className=" w-full font-bold">Continue</button>
    //         </div>

    //         <div className="flex items-center w-full py-4">
    //           <div className="flex-grow border-t border-gray-300"></div>
    //           <div className="px-4 text-gray-500 font-semibold">
    //             or
    //           </div>
    //           <div className="flex-grow border-t border-gray-300"></div>
    //         </div>
    //       </form>
    //     </div>

    //     {/* <div className="login">
    //       <form>
    //         <label for="chk" aria-hidden="true">
    //           Login
    //         </label>
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Email"
    //           required=""
    //         />
    //         <input
    //           type="Password"
    //           name="pswd"
    //           placeholder="Password"
    //           required=""
    //         />
    //         <button>Login </button>
    //       </form>
    //     </div> */}
    //   </div>
    // </div>
  );
}

export default LogIn;
