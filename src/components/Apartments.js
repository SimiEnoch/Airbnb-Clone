import React, { useState } from 'react';
import Apartment from './Apartment';
import Filters from './Filters';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Data } from '../data';
import { CiMap } from 'react-icons/ci';

const allCategories = [
  'Trending',
  ...new Set(Data.map((data) => data.category)),
];

console.log(allCategories);

function Apartments() {
  const [menuItems, setMenuItems] = useState(Data);

  const [categories, setCategories] = useState(allCategories);
  const [menuIcons, setMenuIcon] = useState(Data);

  const [index, setIndex] = useState(0);
  const itemsToShow = 6;

  const nextPerson = () => {
    setIndex(
      Math.min(index + itemsToShow, categories.length - itemsToShow)
    );
  };

  const prevPerson = () => {
    setIndex(Math.max(index - itemsToShow, 0));
  };

  const filterIcons = (icon) => {
    const newIcon = Data.filter((item) => item.icon === icon);
    setMenuIcon(newIcon);
  };

  const filterItems = (category) => {
    if (category === 'Trending') {
      setMenuItems(Data);
      return;
    }
    const newItems = Data.filter(
      (data) => data.category === category
    );
    setMenuItems(newItems);
  };

  return (
    <main className="">
      <section className="menu-section  mt-10 ">
        <div className="button-container  flex items-center justify-center ">
          <button
            className=" prev-btn text-black rounded-full bg-gray-600 "
            onClick={prevPerson}
          >
            <AiOutlineLeft classname="outline-none" />
          </button>

          <Filters
            categories={categories}
            itemsToShow={itemsToShow}
            index={index}
            filterItems={filterItems}
            filterIcons={filterIcons}
          />
          <button
            className=" next-btn text-black rounded-full bg-gray-600 "
            onClick={nextPerson}
          >
            {index + itemsToShow < categories.length && (
              <AiOutlineRight classname="outline-none border-none md:block sm:block" />
            )}
          </button>
        </div>

        <Apartment Data={menuItems} />

        <div className=" relative w-100">
          <mapIntegration />
        </div>

        <div className="flex font-[Calibri] items-center justify-center mt-4">
          <button className="bg-black p-3 rounded mt-5 text-white font-bold ">
            Show More
          </button>
        </div>
      </section>
    </main>
  );
}
export default Apartments;
