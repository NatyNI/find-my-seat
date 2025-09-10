import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Footer from "./components/Footer.jsx";
import ShowSeat from "./components/ShowSeat.jsx"

function App() {
  
  
  return (

    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col min-h-screen">

              <header>
                <Header/>
              </header>
              <main>
                <SearchInput/>
              </main>
              <footer>
                <Footer/>
              </footer>

            </div>
          }
        />

        <Route path="/show-seat"
               element={<ShowSeat/>} 
        />


      </Routes>
    </Router>
      

    
  );
}

export default App;

