import "./App.css";
import NavBar from "./components/NavBar";
import PosterPage from "./pages/PosterPage";
import Play from "./pages/Play";
import { Route, Routes } from "react-router";
import { mustDisplayMobileWarning } from "./utils/miscUtils";

function App() {
  const showMobileWarning = mustDisplayMobileWarning();
  if (showMobileWarning) {
    alert(
      "Hey YOU. We detected you are on a mobile device.\n\nYou should know this app's features are very limited on mobile devices.\n\nCheck it out from a laptop!"
    );
  }

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
