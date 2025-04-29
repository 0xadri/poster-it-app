import NumberInBrackets from "./NumberInBrackets";
import ArtistCoverImage from "./ArtistCoverImage";

const Poster = ({ arrayIds, artistsDeets, handleDeleteCell, handleAdd }) => {
  return (
    <>
      <div className="grid grid-cols-6 gap-2">
        {arrayIds.map((item) => {
          return (
            <div
              key={item}
              className="aspect-square min-h-0 overflow-hidden rounded-lg bg-fuchsia-500 p-1 bg-gradient-to-tl from-indigo-600 to-pink-600"
            >
              {artistsDeets.length === 0 ? (
                <NumberInBrackets number={item} handleAdd={handleAdd} />
              ) : (
                <ArtistCoverImage
                  deets={artistsDeets[item]}
                  number={item}
                  handleDeleteCell={handleDeleteCell}
                  handleAdd={handleAdd}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Poster;
