const NumberInBrackets = ({ number }) => {
  return (
    <div className="relative w-full h-full bg-black">
      <div className="absolute z-1 inset-1/2 -ml-[15px] -mt-[16px] grid size-7 grid-cols-1 grid-rows-1 mx-auto place-content-center border-1 font-mono text-[10px]/7 font-medium bg-black border-white/70 text-white">
        <div className=" col-start-1 row-start-1 grid place-content-center">
          <div className="h-7 w-5 bg-white dark:bg-gray-950"></div>
        </div>
        <div className=" col-start-1 row-start-1 grid place-content-center tracking-widest">
          {number > 10 ? number : "0" + number}
        </div>
      </div>
    </div>
  );
};

export default NumberInBrackets;
