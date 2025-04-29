import "./App.css";
import GenerateButton from "./components/GenerateButton";
import NavBar from "./components/NavBar";
import Poster from "./components/poster";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="h-screen">
        {/* <header className="absolute top-0 w-full z-50 py-2 bg-indigo-900 px-15">
        Musicians Patchwork App .... d((-_-))b
      </header> */}
        <NavBar />
        <main className="h-full pt-15 px-15">
          <h1 className="text-8xl font-bold my-10">Let's get started!</h1>
          <div>
            {/* PROJECT TASKS
              DONE:
                - Poster Component Skeleton
                - API Fetch: One Image Per Musician
                - Mock Top Artist List (Hardcoded)
                - API Fetch: Images For Musician (From More Sources)
              PROG:
                - onhover: show artist name
                - API Fetch: avoid spamming w requests (several artists in 1 query? batch? other?)
                - Action: Remove Artist From Musicians
                - Action: Add Artist To Musicians
              TODO:
                - API Fetch: New Image For Artist (check other sources)
                - Expand Mock Top Artist List (Hardcoded)
                - Pick Poster Format
                - Pick Poster Size Horiz
                - Pick Poster Size Vert
                - Pick Items Per Row
                - Pick Items Per Column
                - Pick Musicians From List
                - Pick Images From List
              SHOULD
                - Save Images in Database
              COULD
                - API Fetch: Musicians List
                - API Fetch: YOUR Top Artists On Spotify
           */}
            <GenerateButton />
            <SearchBar />
            <Poster />
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
