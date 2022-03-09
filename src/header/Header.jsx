import { useState } from "react";
import "../containers/home.css";

export const Header = ({ setPalabra }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setPalabra([inputValue]);
      setInputValue("");
    }
  };
  return (
    <section className="header-container">
      <div className="text-explanation">
        <h3>
          Get the lastest news from differents sources just by typing a word
        </h3>
        <div className="input-div">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type any word..."
              onChange={handleInputChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};
