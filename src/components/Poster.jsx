import { useEffect, useState } from "react";
import NumberInBrackets from "./NumberInBrackets";
import { artists } from "../utils/artistsmegalist";
import { shuffleIt } from "../utils/shuffleArray";
import { searchArtistSpitFirstResult } from "../services/spotify-api";
import ArtistCoverImage from "./ArtistCoverImage";
import { mockList } from "../utils/mock-list";

const TOTAL_ITEMS = 90;

const Poster = () => {
  const [artistsDeets, setArtistsDeets] = useState([]);

  let arrayIds = [];
  for (let i = 1; i <= TOTAL_ITEMS; i++) {
    arrayIds.push(i);
  }

  useEffect(() => {
    // API Fetch: Musicians List
    const artistsMegaList = [...new Set(artists)]; // remove duplicates
    const artistsSelected = shuffleIt(artistsMegaList).slice(0, TOTAL_ITEMS); // pick x random items from list
    // console.log(artistsSelected);

    // Create array, add each items as object with artist name, img url, etc
    const artistsSelectedDetails = [];
    const fetchDetailsForEachArtist = async () => {
      for (const i in artistsSelected) {
        const artistName = artistsSelected[i];
        console.log(i);
        console.log(artistName);
        let artist = await searchArtistSpitFirstResult(artistName);
        artist = {
          ...artist,
          origSearchTerm: artistName,
        };
        artistsSelectedDetails.push(artist);
      }
      console.log(artistsSelectedDetails);
      setArtistsDeets([...artistsSelectedDetails]);
    };
    // fetchDetailsForEachArtist();
    // setArtistsDeets([...mockList]); // Dev Purpose
    // console.log(mockList);
    // const oneArtist = getArtistDetails(artistsSelected[0]);
  }, []);

  useEffect(() => {
    console.log(artistsDeets);
  }, [artistsDeets]);

  return (
    <div className="grid grid-cols-6 gap-2 aspect-2/3">
      {arrayIds.map((item) => {
        return (
          <div
            key={item}
            className="aspect-square rounded-lg bg-fuchsia-500 p-1 bg-gradient-to-tl from-indigo-600 to-pink-600"
          >
            {artistsDeets.length === 0 ? (
              <NumberInBrackets number={item} />
            ) : (
              <ArtistCoverImage deets={artistsDeets[item]} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Poster;
