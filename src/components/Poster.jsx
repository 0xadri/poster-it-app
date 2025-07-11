import { v4 as uuidv4 } from "uuid";
import CellCover from "./CellCover";

const Poster = ({
  columns,
  cellIds,
  artistsDeets,
  handleDelete,
  handleAdd,
  handleNext,
}) => {
  return (
    <div className={`grid grid-cols-${columns} gap-2 pb-10`}>
      {cellIds.map((cellId) => (
        <CellCover
          key={uuidv4()}
          deets={artistsDeets[cellId - 1]}
          {...{ cellId, handleDelete, handleAdd, handleNext }}
        />
      ))}
    </div>
  );
};

export default Poster;
