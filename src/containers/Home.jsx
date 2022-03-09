import { useState } from "react";
import { SearchResults } from "../components/search-results/SearchResults";
import { Header } from "../header/Header";
import "./home.css";

export const Home = () => {
  const [palabra, setPalabra] = useState([""]);

  return (
    <main className="home animate__fadeIn">
      <Header setPalabra={setPalabra} />

      <SearchResults key={Math.random()} keyword={palabra} />
    </main>
  );
};
