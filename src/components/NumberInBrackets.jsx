const NumberInBrackets = ({ number, handleAdd }) => {
  return (
    <div className="relative w-full h-full group bg-black">
      {/* Add Button */}
      <div className="absolute z-2 left-0 top-0 mx-2 mt-2 hidden group-hover:block">
        <button
          onClick={() => handleAdd(number)}
          className="float-left mr-40 relative inline-flex items-center justify-center p-0.5 font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-400 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 cursor-pointer"
        >
          <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-gray-900">
            Add
          </span>
        </button>
      </div>
      {/* Number In Brackets */}
      <div className="absolute z-1 animate-pulse inset-1/2 -ml-[15px] -mt-[16px] grid size-7 grid-cols-1 grid-rows-1 mx-auto place-content-center border-1 font-mono text-[10px]/7 font-medium bg-black border-white/70 text-white">
        <div className=" col-start-1 row-start-1 grid place-content-center">
          <div className="h-7 w-5 bg-black"></div>
        </div>
        <div className=" col-start-1 row-start-1 grid place-content-center tracking-widest">
          {number > 9 ? number : "0" + number}
        </div>
      </div>
    </div>
  );
};

export default NumberInBrackets;
