import { useState } from "react";
import Input from "../components/Input";
import { v4 as uuidv4 } from "uuid";

const Play = () => {
  const [columns, setColumns] = useState(6);

  const handleColumns = (event) => {
    setColumns(event.target.value);
  };

  const myArray = Array.apply(null, Array(90)).map(function () {});

  return (
    <div className="mt-25">
      <input
        type="number"
        id="Columns"
        placeholder=""
        value={columns}
        onChange={handleColumns}
        className="cursor-pointer peer mt-0.5 py-2 px-2 w-[100px] rounded-md border-lime-300 border-solid border-2 text-base"
      />
      <div className={`grid grid-cols-${columns} gap-2 pb-10`}>
        {myArray.map((item, index) => (
          <div key={uuidv4()}>item {index}</div>
        ))}
      </div>
    </div>
  );
};

export default Play;
