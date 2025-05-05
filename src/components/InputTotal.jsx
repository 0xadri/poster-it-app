const InputTotal = ({ total, handleTotal }) => {
  return (
    <label htmlFor="total" className="relative">
      <input
        type="number"
        id="total"
        placeholder=""
        value={total}
        onChange={handleTotal}
        min={1}
        max={500}
        className="cursor-pointer peer mt-0.5 py-2 px-2 w-[100px] rounded-md border-lime-300 border-solid border-2 text-base"
      />
      <span className="cursor-pointer absolute inset-y-0 start-3 -translate-y-5.5 bg-white text-xs font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5.5 dark:bg-gray-900 dark:text-white">
        Total
      </span>
    </label>
  );
};

export default InputTotal;
