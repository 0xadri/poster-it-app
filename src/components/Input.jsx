const Input = ({ columns = 6, handleColumns }) => {
  return (
    <label htmlFor="Columns" className="relative">
      <input
        type="number"
        id="Columns"
        placeholder=""
        value={columns}
        onChange={handleColumns}
        className="cursor-pointer peer mt-0.5 py-2 px-2 w-[100px] rounded-md border-lime-300 border-solid border-2 text-base"
      />
      <span className="cursor-pointer absolute inset-y-0 start-3 -translate-y-5.5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5.5 dark:bg-gray-900 dark:text-white">
        Columns
      </span>
    </label>
  );
};

export default Input;
