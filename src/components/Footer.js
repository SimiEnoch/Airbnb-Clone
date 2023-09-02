import React, { useState } from 'react';
import { Tabs } from './tabs';
import { FooterData } from './FooterData';

function Footer() {
  const filterButton = [
    { name: 'Popular', active: true },
    { name: 'Arts & culture', active: false },
    { name: 'Outdoors', active: false },
    { name: 'Mountains', active: false },
    { name: 'Beach', active: false },
    { name: 'Unique stays', active: false },
    { name: 'Categories', active: false },
    { name: 'Things to do', active: false },
    { name: 'Airbnb-friendly apartments', active: false },
  ];

  const [filter, setFilter] = useState(filterButton);

  const updateTab = (filter, updatedFilter) => {
    console.log(filter);
    setFilter(updatedFilter);
  };

  return (
    <main className=" mt-16 bg-gray-100 ">
      <hr className=" block w-full font-bold gap-0 text-black" />
      <div className="py-4 mt-10">
        <h1 className="pb-4 tracking-normal  px-14 font-semibold text-[17px]">
          Inspiration for future getaways
        </h1>
        <section className="px-14 flex items-center">
          <div className="flex text-gray-800  items-center justify-start">
            <Tabs handleChange={updateTab} option={filter} />
          </div>
        </section>
        <hr className="flex-grow border-t border-gray-300 mx-14 " />
      </div>

      <div className="grid px-14 gap-6 mb-3 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">
        {FooterData.map((data) => {
          return (
            <article className="text-start font-[Calibri] text-gray-800 text-[15px] gap-3">
              <div>
                <button className="">
                  <h3 className="text-[14px] font-bold text-gray-800">
                    {data.name}
                  </h3>
                  <p className="text-[12px] text-gray-800">
                    {data.category}
                  </p>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <hr className="flex-grow border-t  border-gray-300 mt-2 mb-2" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-[Calibri] hover:cursor-pointer text-gray-800 text-[13px] px-16 pb-10 mt-5 gap-4 items-center">
        <div className="">
          <ul className="leading-6">
            <li className="font-bold">
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">AirCover</a>
            </li>
            <li>
              <a href="">Combating discrimination</a>
            </li>
            <li>
              <a href="">Supporting people with disabilities</a>
            </li>
            <li>
              <a href="">Cancellation options</a>
            </li>
            <li>
              <a href="">Report neigborhood concern</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="leading-6">
            <li className="font-bold">
              <a href="">Hosting</a>
            </li>
            <li>
              <a href="">Airbnb your home</a>
            </li>
            <li>
              <a href="">AirCover for Hosts</a>
            </li>
            <li>
              <a href="">Hosting resources</a>
            </li>
            <li>
              <a href="">Community forum</a>
            </li>
            <li>
              <a href="">Hosting responsibly</a>
            </li>
            <li>
              <a href="">Airbnb-friendly apartments</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="leading-6">
            <li className="font-bold">
              <a href="">Airbnb</a>
            </li>
            <li>
              <a href="">Newsroom</a>
            </li>
            <li>
              <a href="">New features</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Investors</a>
            </li>
            <li>
              <a href="">Gift cards</a>
            </li>
            <li>
              <a href="">Airbnb.org disaster relief</a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300 mx-14 " />
      <div className="flex py-2 px-14 hover:cursor-pointer text-gray-800 text-[12px] mt-2 font-[Calibri]">
        <ul className="flex gap-4">
          <li>© 2023 Airbnb, Inc.</li>
          <li>Terms</li>
          <li>Sitemap</li>
          <li>Privacy</li>
          <li>Your Privacy Choices</li>
        </ul>
      </div>
    </main>
  );
}

export default Footer;
