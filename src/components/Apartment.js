import React, { useState } from 'react';
import { GrFavorite } from 'react-icons/gr';
import { AiOutlineStar } from 'react-icons/ai';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';

function Apartment({ Data, tax }) {
  const [readMore, setReadmore] = useState(false);

  return (
    <div className="md:px-7 px-5 sm:mx-5 ">
      <div className="w-[100%] flex items-center justify-around mb-3">
        <button className="md:w-[50%]  w-full md: flex  border-[1] shadow px-6 rounded-lg py-5 text-[14px] font-medium cursor-pointer">
          <p className="w-60 block text-left">Display total price:</p>
          <input
            className=" text-[13px]  w-full font-normal active:border-none hover:border-none outline-none text-gray-500 "
            placeholder="Include all fees, before taxes"
            type="text"
          />
          <div className="md: block p-1 rounded-full">
            <button
              onClick={() => {
                setReadmore(!readMore);
              }}
            >
              {readMore ? (
                <BsToggle2On className="h-5  w-5" />
              ) : (
                <BsToggle2Off className="h-5  w-5" />
              )}
            </button>
          </div>
        </button>
      </div>

      <div className="section-center grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {Data &&
          Data.map((dataItem) => {
            return (
              <article className="menu-items" key={dataItem.id}>
                <span className="flex">
                  <div className="flex min-h-full max-h-76 ">
                    <img
                      src={dataItem.image}
                      alt="img"
                      className=" sm:h-64 rounded-lg md:h-64 w-full "
                    />
                  </div>
                  <div className="relative">
                    <button className="hover:cursor-pointer  absolute right-2 top-1 text-md font-bold mt-1 p-1 rounded ">
                      <GrFavorite
                        color="white"
                        className="text-grey-800 outline-white"
                      />
                    </button>
                  </div>

                  {/* <div className="font-bold relative ">
                    <button className="hidden hover:block cursor-pointer button absolute right-2 top-[45%]  bg-white rounded-full text-white css text-md font-light hover:text-white hover:text-xl hover:font-bold  mb-3 p-1 mt-1">
                      <GrFormNext />
                    </button>
                  </div> */}
                </span>
                <div className="text-lg">
                  <header className="">
                    <span className="flex ">
                      <h4 className="w-full font-[Calibri] text-[14.5px] font-bold ">
                        {dataItem.title}
                      </h4>
                      <div className="relative w-full">
                        <div className=" absolute right-0">
                          <span className="flex">
                            <button className="hover:cursor-pointer text-sm mt-1 p-1 rounded ">
                              <AiOutlineStar />
                            </button>
                            <div className="font-bold font-[Calibri]">
                              <h4 className="text-sm  text-black   rounded mt-1">
                                {dataItem.rating}
                              </h4>
                            </div>
                          </span>
                        </div>
                      </div>
                    </span>
                  </header>
                  <div className=" leading-none ">
                    <h3 className="text-[15px] mb-1 font-[Calibri] text-gray-600">
                      {dataItem.distance}
                    </h3>
                    <h4 className="text-[14px] font-[Calibri] text-black ">
                      {dataItem.date}
                    </h4>
                  </div>
                  <div className="leading-none font-[Calibri]">
                    <button
                      className={`${
                        readMore ? 'hidden' : 'block'
                      }  w-5 h-5`}
                    >
                      <span className=" flex gap-0.5">
                        <h4 className="font-bold text-[14px] mb-1 text-black rounded mt-1">
                          ${dataItem.price.toLocaleString()}
                        </h4>
                        <p className="text-sm"> night</p>
                      </span>
                    </button>

                    <div className="font-[Calibri] mt-1 mb-1 text-[14px] underline font-semibold text-black rounded">
                      {readMore ? (
                        <h4>
                          ${dataItem.tax.toLocaleString()} total
                          before taxes
                        </h4>
                      ) : (
                        tax
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </div>
  );
}

export default Apartment;
