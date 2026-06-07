import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SportsPage from "./pages/sports/SportsPage";
import BooksPage from "./pages/books/BooksPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sports/*" element={<SportsPage />} />
        <Route path="/books/*" element={<BooksPage />} />
      </Routes>

    </>
  );
}

export default App;
