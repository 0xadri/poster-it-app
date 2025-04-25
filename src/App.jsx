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
          <h1 className="text-8xl font-bold">Let's get started!</h1>
          <div>
            {/* PROJECT TASKS
              Done:
                - Poster Component Skeleton
                - API Fetch: One Image Per Musician
              Prog:
                - API Fetch: Musicians List
                - API Fetch: Images For Musician (From More Sources)
               Todo:
                - Pick Poster Format
                - Pick Poster Size Horiz
                - Pick Poster Size Vert
                - Pick Items Per Row
                - Pick Items Per Column
                - Pick Musicians From List
                - Pick Images From List
           */}
            <SearchBar />
            <GenerateButton />
            <Poster />
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
