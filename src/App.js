import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroSection from './Pages/HeroSection';
import CharacterGrid from './Pages/CharacterGrid';
import CharacterDetail from './Pages/CharacterDetail';
import LocationDetail from "./Pages/LocationDetail";
import EpisodeDetail from "./Pages/EpisodeDetail";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <CharacterGrid />
              <Footer />
            </>
          }
        />

        {/* Character Detail Page */}
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/location/:id" element={<LocationDetail />} />
        <Route path="/episode/:id" element={<EpisodeDetail />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
