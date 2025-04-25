import { useRef } from "react";
import { getArtist } from "/src/services/spotify-api";

const SearchBar = () => {
  const searchTerm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = async () => {
      try {
        // const artists = await searchArtist(searchTerm);
        const artistDetails = await getArtist("3PhoLpVuITZKcymswpck5b");
        console.log(artistDetails);
        // setMovies(artists);
      } catch (e) {
        console.log(e);
        // setError("Failed To Search Artist");
      } finally {
        // setIsLoading(false);
      }
    };
    search();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type Artist Name..." ref={searchTerm} />
      <button type="submit" className="ml-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
