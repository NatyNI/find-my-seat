import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Footer from "./components/Footer.jsx";

function App() {
  
  
  return (

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
      

    
  );
}

export default App;

