import { useState } from "react";
import "./App.css";
import GenerateButton from "./components/GenerateButton";
import NavBar from "./components/NavBar";
import Poster from "./components/poster";
import SearchBar from "./components/SearchBar";
import { artists } from "./utils/artistsmegalist";
import { shuffleIt } from "./utils/shuffleArray";
import { searchArtistSpitFirstResult } from "./services/spotify-api";
import { mockList } from "./utils/mock-list";
import ErrorComp from "./components/ErrorComp";

function App() {
  const [artistsDeets, setArtistsDeets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const TOTAL_ITEMS = 90;
  let arrayIds = [];
  for (let i = 1; i <= TOTAL_ITEMS; i++) {
    arrayIds.push(i);
  }

  const handleDeleteCell = (cellId) => {
    setArtistsDeets((prev) => {
      const newArtistsDeets = [...prev]; // Clone array for immutability
      newArtistsDeets[cellId] = null; // Modify array
      return newArtistsDeets;
    });
  };

  const handleAdd = (cellId) => {
    console.log("add button clicked for cell: " + cellId);
    // get random artist name from list
    const artistsMegaList = [...new Set(artists)]; // get musician list & remove duplicates
    const artistName = shuffleIt(artistsMegaList).slice(0, 1)[0]; // pick x random items from list
    // get image for artist name
    console.log(artistName);
    const searchAndAdd = async (artistName) => {
      const res = await searchArtistSpitFirstResult(artistName);
      if (res.status === "success") {
        // let artist = await searchArtistSpitFirstResult(artistName);
        const artist = {
          ...res.artist,
          origSearchTerm: artistName,
        };
        console.log(artist);
        // update state
        setArtistsDeets((prev) => {
          const newArtistsDeets = [...prev]; // Clone array for immutability
          newArtistsDeets[cellId] = artist; // Modify array
          return newArtistsDeets;
        });
      } else {
        setErrorMsg(res.errorMessage);
      }
    };
    searchAndAdd(artistName);
  };

  const handleGenerate = () => {
    const artistsMegaList = [...new Set(artists)]; // get musician list & remove duplicates
    const artistsSelected = shuffleIt(artistsMegaList).slice(0, TOTAL_ITEMS); // pick x random items from list

    // Create array, add each items as object with artist name, img url, etc
    const artistsSelectedDetails = [];
    const fetchDetailsForEachArtist = async () => {
      setIsLoading(true);
      for (const i in artistsSelected) {
        const artistName = artistsSelected[i];
        console.log(i);
        console.log(artistName);
        let res = await searchArtistSpitFirstResult(artistName);
        if (res.status === "success") {
          const artist = {
            ...res.artist,
            origSearchTerm: artistName,
          };
          artistsSelectedDetails.push(artist);
          setArtistsDeets([...artistsSelectedDetails]);
        } else {
          setErrorMsg(res.errorMessage);
        }
      }
      console.log(artistsSelectedDetails);
      setIsLoading(false);
    };
    const mockFetchDetailsForEachArtist = () => {
      setIsLoading(true);
      setArtistsDeets([...mockList]);
      setIsLoading(false);
    };
    fetchDetailsForEachArtist(); // Prod
    // mockFetchDetailsForEachArtist(); // Dev Purpose
  };

  return (
    <>
      <div className="h-screen">
        <NavBar />
        {errorMsg && <ErrorComp message={errorMsg} />}
        <main className="h-full pt-15 px-15">
          <h1 className="text-8xl font-bold my-10">Let's get started!</h1>
          <div>
            <GenerateButton
              handleGenerate={handleGenerate}
              isLoading={isLoading}
            />
            {/* <SearchBar /> */}

            <Poster
              arrayIds={arrayIds}
              artistsDeets={artistsDeets}
              handleDeleteCell={handleDeleteCell}
              handleAdd={handleAdd}
            />
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
