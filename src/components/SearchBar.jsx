import { useRef } from "react";
import { searchArtist } from "/src/services/spotify-api";

const SearchBar = () => {
  const searchInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchQuery = searchInput.current.value;
    try {
      console.log(`Search "${searchQuery}"`);
      const json = await searchArtist(searchQuery);
      console.log(json);
      const artistID = json.artists.items[0].id;
      console.log(artistID);
      const artistImgUrl = json.artists.items[0].images[0].url;
      console.log(artistImgUrl);
      // setMovies(artists);
    } catch (e) {
      console.log(e);
      // setError("Failed To Search Artist");
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type Artist Name..." ref={searchInput} />
      <button type="submit" className="ml-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
