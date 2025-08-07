import React, { useState } from "react";
import NavBar from "./components/navbar/nav-bar";
import Main from "./components/main/MainPage";
import { Hotel } from "./interfaces/hotel";

const App: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  return (
    <div className="app">
      <NavBar setHotels={setHotels} />
      <Main hotels={hotels} />
    </div>
  );
};

export default App;
