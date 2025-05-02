import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Poster from "./components/Poster";
import SearchBar from "./components/SearchBar";
import { artists } from "./utils/artistsmegalist";
import { shuffleIt } from "./utils/shuffleArray";
import { mockList } from "./utils/mock-list";
import ErrorComp from "./components/ErrorComp";
import { searchArtist } from "./services/apiSpotify";
import {
  getDiscogsIdForArtist,
  getDiscogsImgURLsForArtist,
} from "./services/apiDiscogs";
import { addOneArtistToCache, getOneArtistInCache } from "./utils/browserCache";

function App() {
  const [artistsDeets, setArtistsDeets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const TOTAL_ITEMS = 90;
  let cellIds = [];
  for (let i = 1; i <= TOTAL_ITEMS; i++) {
    cellIds.push(i);
  }

  const handleDelete = (cellId) => {
    setArtistsDeets((prev) => {
      const newArtistsDeets = [...prev]; // Clone array for immutability
      newArtistsDeets[cellId - 1] = null; // Modify array
      return newArtistsDeets;
    });
  };

  const handleNext = async (cellId, artist) => {
    try {
      const id = await getDiscogsIdForArtist(artist);
      const imgUrls = await getDiscogsImgURLsForArtist(id);
      console.log(`${artist} id: ${id}`);
      console.log(imgUrls);
      setArtistsDeets((prev) => {
        const newArtistsDeets = [...prev]; // Clone array for immutability
        const newOneArtistDeets = { ...newArtistsDeets[cellId - 1] }; // Clone object for immutability
        newOneArtistDeets.images[0].url = imgUrls[0];
        newArtistsDeets[cellId - 1] = newOneArtistDeets; // Modify array
        return newArtistsDeets;
      });
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTest = async () => {
    try {
      const artist = "Michael Jackson";
      const id = await getDiscogsIdForArtist(artist);
      const imgUrls = await getDiscogsImgURLsForArtist(id);
      console.log(`${artist} id: ${id}`);
      console.log(imgUrls);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (cellId) => {
    console.log("add button clicked for cell: " + cellId);
    // get random artist name from list
    const artistsMegaList = [...new Set(artists)]; // get musician list & remove duplicates
    const artistName = shuffleIt(artistsMegaList).slice(0, 1)[0]; // pick x random items from list
    console.log(artistName);
    // get image for artist name
    const searchAndAdd = async (artistName) => {
      const artistCache = getOneArtistInCache(artistName); // get artist from cache
      let artistApi;
      if (!artistCache) {
        try {
          const data = await searchArtist(artistName); // get from api otherwise
          artistApi = data.artists.items[0]; // get first result
          artistApi = {
            ...artistApi,
            images_mf: [artistApi.images[0]], // enrich w init img
            orig_search: artistName, // enrich w search term
          };
          addOneArtistToCache(artistApi); // add artist to cache
        } catch (err) {
          setErrorMsg(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      // update state
      setArtistsDeets((prev) => {
        const newArtistsDeets = [...prev]; // Clone array for immutability
        newArtistsDeets[cellId - 1] = artistCache || artistApi; // add artist from cache is present, otherwise from api
        return newArtistsDeets;
      });
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
        const artistCache = getOneArtistInCache(artistName); // get artist from cache
        let artistApi;
        if (!artistCache) {
          try {
            const data = await searchArtist(artistName); // get from api otherwise
            artistApi = data.artists.items[0]; // get first result
            artistApi = {
              ...artistApi,
              images_mf: [artistApi.images[0]], // enrich w init img
              orig_search_mf: artistName, // enrich w search term
            };
            addOneArtistToCache(artistApi); // add artist to cache
          } catch (err) {
            setErrorMsg(err.message);
            setIsLoading(false);
          }
        }
        artistsSelectedDetails.push(artistCache || artistApi); // add artist from cache is present, otherwise from api
        setArtistsDeets([...artistsSelectedDetails]);
      }
      console.log(artistsSelectedDetails);
      setIsLoading(false);
    };
    fetchDetailsForEachArtist(); // Prod

    // // Dev Purpose
    // const mockFetchDetailsForEachArtist = () => {
    //   setIsLoading(true);
    //   setArtistsDeets([...mockList]);
    //   setIsLoading(false);
    // };
    // mockFetchDetailsForEachArtist();
  };

  return (
    <>
      <div className="h-screen">
        <NavBar />
        {errorMsg && <ErrorComp message={errorMsg} />}
        <main className="h-full pt-15 px-15">
          <h1 className="text-8xl font-bold my-10">Let's get started!</h1>
          <div>
            <Button
              handleGenerate={handleGenerate}
              isLoading={isLoading}
              btnTxt="GENERATE"
            />
            {/* <SearchBar /> */}
            <Button
              handleGenerate={handleTest}
              isLoading={isLoading}
              btnTxt="TEST"
            />
            <Poster
              {...{
                cellIds,
                artistsDeets,
                handleDelete,
                handleAdd,
                handleNext,
              }}
            />
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
