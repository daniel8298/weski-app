import React from "react";
import "./nav-bar.scss";
import WeSkiLogo from "../weski-logo/weski-logo";
import SearchForm from "../search-form/search-form";
import { Hotel } from "../../interfaces/hotel";

interface Props {
  setHotels: React.Dispatch<React.SetStateAction<Hotel[]>>;
}

const NavBar: React.FC<Props> = ({ setHotels }) => {
  return (
    <div className="nav-bar">
      <WeSkiLogo />
      <SearchForm setHotels={setHotels} />
    </div>
  );
};

export default NavBar;
