import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SportsPage from "./pages/sports/SportsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sports/*" element={<SportsPage />} />
      </Routes>

    </>
  );
}

export default App;
