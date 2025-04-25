import "./App.css";
import Poster from "./components/poster";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="h-screen">
      <header className="absolute top-0 w-full z-50 py-2 bg-indigo-900 px-15">
        Musicians Patchwork App
      </header>
      <main className="h-full pt-15 px-15">
        <h1 className="text-8xl font-bold">Let's get started!</h1>
        <div>
          {/* Dev Tasks
              Prog:
               - Poster Component Skeleton
              Todo:
                - Pick Poster Format
                - Pick Poster Size Horiz
                - Pick Poster Size Vert
                - Pick Items Per Row
                - Pick Items Per Column
                - Pick Musicians From List
                - Pick Images From List
                - API Fetch: Musicians List
                - API Fetch: Images For Musician
           */}
          <SearchBar />
          <Poster />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
