import { useEffect, useState } from "react";
import NumberInBrackets from "./NumberInBrackets";
import { artists } from "../utils/artistsmegalist";
import { shuffleIt } from "../utils/shuffleArray";
import { searchArtistSpitFirstResult } from "../services/spotify-api";
import ArtistCoverImage from "./ArtistCoverImage";
import { mockList } from "../utils/mock-list";

const Poster = ({ arrayIds, artistsDeets, isLoading }) => {
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
                <NumberInBrackets number={item} />
              ) : (
                <ArtistCoverImage deets={artistsDeets[item]} number={item} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Poster;
