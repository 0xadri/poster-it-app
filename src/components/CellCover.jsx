import NumberInBrackets from "./NumberInBrackets";

const CellCover = ({ deets, cellId, handleDelete, handleAdd, handleNext }) => {
  return (
    <div className="aspect-square min-h-0 overflow-hidden rounded-lg bg-fuchsia-500 p-1 bg-gradient-to-tl from-indigo-600 to-pink-600">
      {deets &&
      deets.images &&
      deets.name &&
      deets.images_mf &&
      deets.images_mf[0] ? (
        <div className="relative h-full group overflow-hidden">
          <img src={deets.images_mf[deets.images_mf_curr || 0]} />
          <div className="absolute z-2 left-0 top-0 mx-2 mt-2 hidden group-hover:block">
            <button
              onClick={() => handleNext(cellId, deets.name)}
              className="block items-center justify-center p-2 mb-1 text-sm font-medium bg-gray-900 text-white rounded-lg group hover:text-gray-900 hover:bg-gradient-to-br from-teal-300 to-lime-300 hover:from-teal-300 hover:to-lime-300 cursor-pointer "
            >
              Next
            </button>
            <button
              onClick={() => handleDelete(cellId)}
              className="items-center justify-center p-2 text-sm font-medium bg-gray-900 text-white rounded-lg group hover:text-gray-900 hover:bg-gradient-to-br from-teal-300 to-lime-300 hover:from-teal-300 hover:to-lime-300 cursor-pointer "
            >
              Delete
            </button>
            <div className="mt-1 py-1 px-1 rounded-sm bg-slate-500/30">
              <span className="block text-sm">{deets.name}</span>
              {/* <span className="text-xs">Search: {deets?.origSearchTerm}</span> */}
            </div>
          </div>
        </div>
      ) : (
        <NumberInBrackets number={cellId} handleAdd={handleAdd} />
      )}
    </div>
  );
};

export default CellCover;
