import React from 'react';

function Filters({
  categories,
  filterItems,
  filterIcons,
  index,
  itemsToShow,
}) {
  return (
    <div className="btn-container overflow-hidden ">
      {categories
        .slice(index, index + itemsToShow)
        .map((category, id, icon) => {
          return (
            <div className="grid">
              <div className=" text-center flex items-center justify-around">
                <button
                  className="block"
                  onClick={() => filterIcons(icon)}
                ></button>
              </div>

              <button
                type="button"
                className="filter-btn outline-none active:border-b-2 active:outline-1 active:border-black font-[Calibri] text-[12.5px] mb-1 text-gray-500 hover:border-b-2 hover:border-b-gray-500"
                key={id}
                onClick={() => filterItems(category)}
              >
                <span>{category}</span>
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Filters;
