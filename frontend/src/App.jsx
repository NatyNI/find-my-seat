import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Footer from "./components/Footer.jsx";
import ShowTable from "./components/ShowTable.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col">
              <header>
                <Header />
              </header>

              <main>
                <SearchInput />
              </main>

              <footer>
                <Footer />
              </footer>
            </div>
          }
        />

        <Route path="/show-seat" element={<ShowTable />} />
      </Routes>
    </Router>
  );
}

export default App;
