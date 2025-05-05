import "./App.css";
import NavBar from "./components/NavBar";
import PosterPage from "./pages/PosterPage";
import Play from "./pages/Play";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <div className="h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<PosterPage />} />
          <Route path="/play" element={<Play />} />
        </Routes>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
