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

function App() {
  const [artistsDeets, setArtistsDeets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const TOTAL_ITEMS = 90;
  let arrayIds = [];
  for (let i = 1; i <= TOTAL_ITEMS; i++) {
    arrayIds.push(i);
  }

  const handleDeleteCell = (cellId) => {
    setArtistsDeets((prev) => {
      const newArtistsDeets = [...artistsDeets]; // Clone array for immutability
      newArtistsDeets[cellId] = null; // Modify array
      return newArtistsDeets;
    });
  };

  const handleAdd = (cellId) => {
    console.log("add button clicked for cell: " + cellId);
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
        let artist = await searchArtistSpitFirstResult(artistName);
        artist = {
          ...artist,
          origSearchTerm: artistName,
        };
        artistsSelectedDetails.push(artist);
        setArtistsDeets([...artistsSelectedDetails]);
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
        <main className="h-full pt-15 px-15">
          <h1 className="text-8xl font-bold my-10">Let's get started!</h1>
          <div>
            <GenerateButton
              handleGenerate={handleGenerate}
              isLoading={isLoading}
            />
            <SearchBar />
            <Poster
              arrayIds={arrayIds}
              artistsDeets={artistsDeets}
              isLoading={isLoading}
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
