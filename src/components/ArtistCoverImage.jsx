import NumberInBrackets from "./NumberInBrackets";

const ArtistCoverImage = ({ deets, number, handleDeleteCell }) => {
  return (
    <>
      {deets && deets.images && deets.images[0] && deets.images[0].url ? (
        <div className="relative h-full group cursor-pointer overflow-hidden">
          <img className="" src={deets?.images[0]?.url} />
          <div className="absolute z-2 left-0 top-0 mx-2 mt-2 hidden group-hover:block">
            <button
              onClick={() => handleDeleteCell(number)}
              className="items-center justify-center p-2 text-sm font-medium bg-gray-900 text-white rounded-lg group hover:text-gray-900 hover:bg-gradient-to-br from-teal-300 to-lime-300 hover:from-teal-300 hover:to-lime-300 cursor-pointer "
            >
              Delete
            </button>
            <div className="mt-1 py-1 px-1 rounded-sm bg-slate-500/30">
              <span className="block text-sm">{deets?.name}</span>
              {/* <span className="text-xs">Search: {deets?.origSearchTerm}</span> */}
            </div>
          </div>
        </div>
      ) : (
        <NumberInBrackets number={number} />
      )}
    </>
  );
};

export default ArtistCoverImage;
