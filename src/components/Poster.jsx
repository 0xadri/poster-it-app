import { v4 as uuidv4 } from "uuid";
import CellCover from "./CellCover";

const Poster = ({ cellIds, artistsDeets, handleDeleteCell, handleAdd }) => {
  return (
    <div className="grid grid-cols-6 gap-2">
      {cellIds.map((cellId) => (
        <CellCover
          key={uuidv4()}
          deets={artistsDeets[cellId - 1]}
          cellId={cellId}
          handleDeleteCell={handleDeleteCell}
          handleAdd={handleAdd}
        />
      ))}
    </div>
  );
};

export default Poster;
