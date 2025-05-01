import { useRef } from "react";

const SearchBar = () => {
  const searchInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchQuery = searchInput.current.value;
    try {
      console.log(`Search "${searchQuery}"`);
      // const json = await searchArtistSpitFirstResult(searchQuery);
      const json = null;
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
    <form onSubmit={handleSubmit} className="my-6 text-2xl">
      <input
        name="search-artist"
        type="text"
        placeholder="Type Artist Name..."
        ref={searchInput}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        type="submit"
        className="ml-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          SEARCH
        </span>
      </button>
    </form>
  );
};

export default SearchBar;
