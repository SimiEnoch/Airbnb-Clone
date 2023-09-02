export const Tabs = ({ option, handleChange }) => {
  const toggleActive = (filter, index) => {
    const updatedFilter = option.map((data, i) => ({
      ...data,
      active: index === i,
    }));
    handleChange(filter, updatedFilter);
  };

  return (
    <div className=" w-full flex items-center text-[16px] font-medium justify-center gap-3 font-[Calibri] ">
      {option?.map((data, i) => (
        <button
          key={i}
          onClick={() => toggleActive(data, i)}
          className={`tabs sm:mx-1 md:mx-0 md:p-2 font-semibold text-gray-500 sm:gap-2 p-1 border-b-2 text-[12px] md:text-[14px] transition-all  ${
            data.active ? `border-b-2 border-black` : `border-none`
          }`}
        >
          {data.name}
        </button>
      ))}
    </div>
  );
};
