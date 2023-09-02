import '../App.css';
import icon from '../images/airbnb-icon2.png';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import React, { useState } from 'react';
import internet from '../images/internet-icon.png';
import { FaUserCircle } from 'react-icons/fa';
import LogIn from './LogIn';

function Header() {
  const [hamburger, setHamburger] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className="max-w-screen-xl fixed flex z-10 top-0 w-full shadow items-center justify-between bg-white h-[65px] md:px-16 px-8 text-black mb-0 pb-0 ">
      <a href="#" class="flex px-1 sm:px-0">
        <img
          src={icon}
          class="h-5 w-full sm:h-7 sm:block hidden"
          alt="Airbnb Logo"
        />

        <h1 className="sm:block hidden text-xl tracking-tighter font-bold px-1 text-red-500">
          airbnb
        </h1>
      </a>
      <div className="">
        <div className="max-w-md ">
          <a href="#">
            <button className="  w-full flex gap-2 border-[1] shadow rounded-full px-10 py-2  text-[12px] font-medium cursor-pointer">
              <button className=""> Anywhere </button>
              <button className=" px-2 hsss hsp block">
                Any week{' '}
              </button>
              <button className="text-[13px]  font-normal text-gray-500 pr-3">
                Add guests
              </button>

              <span className="p-1.5 rounded-full text-white bg-red-500">
                <AiOutlineSearch />
              </span>
            </button>
          </a>
        </div>
      </div>
      <nav
        className={`absolute bg-white text-black ${
          hamburger ? 'top-[-1000%]' : 'top-[0px]'
        } w-full left-0 z-[-1] p-8  md:left-auto md:w-auto shadow md:shadow-none md:top-0 md:relative md:bg-transparent md:p-0 md:z-[0] sm:hidden md:block`}
      >
        <div className="flex tracking-tighter gap-2 text-xl md:text-sm flex-col md:flex-row font-semibold md:order-2 sm:hidden md:flex">
          <div className="hidden md:block p-2 hover:text-slate-800  duration-500 text-[13px]">
            <a href="/">Airbnb your home</a>
          </div>
          <div className="hidden md:block hover:text-slate-800 p-2 duration-500 text-[13px]">
            <a href="#">
              <img
                src={internet}
                class="mt-1 h-5 sm:w-full w-4 sm:h-3 font-bold hover:shadow-lg rounded-full"
                alt="Airbnb Logo"
              />
            </a>
          </div>

          <div className="hidden md:block  flex-col items-center ">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="border-[1px] shadow-sm relative p-2 md:w-50 rounded-full flex items-center justify-between font-bold text-lg w-full active:border-slate-700"
            >
              <span className="flex gap-2">
                <AiOutlineMenu className="text-lg" />
                <FaUserCircle className="text-xl" />
              </span>
            </button>

            <div className="w-full">
              {isOpen && (
                <div className="flex items-start justify-between bg-[#ffffff] border-[1px] sm:relative md:absolute md:top-14 md:right-1 flex-col rounded-md p-2">
                  <ul className="space-y-0 lg:w-44">
                    <li>
                      <a
                        href="#log-in"
                        onClick={openModal}
                        className="flex  p-1.5 font-normal  text-black rounded-md hover:text-black hover:bg-gray-100"
                      >
                        Sign up
                      </a>
                    </li>

                    <li>
                      <a
                        href="#log-in"
                        onClick={openModal}
                        className="mb-2 flex p-1.5 font-normal text-black rounded-md hover:text-black hover:bg-gray-100"
                      >
                        Log in
                      </a>
                    </li>
                    <hr className="text-white" />
                    <li>
                      <a
                        href="#"
                        className="mt-2 flex p-1.5 font-normal text-black rounded-md hover:text-black hover:bg-gray-100"
                      >
                        Airbnb your home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex p-1.5 font-normal text-black rounded-md hover:text-black hover:bg-gray-100"
                      >
                        Help center
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showModal && <LogIn isOpen={showModal} onClose={closeModal} />}
    </header>
  );
}

export default Header;
