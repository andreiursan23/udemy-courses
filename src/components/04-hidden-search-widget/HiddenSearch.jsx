import { useState } from "react";
import "./HiddenSearch.css";

function HiddenSearch() {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    isOpened ? setIsOpened(false) : setIsOpened(true);
  };

  console.log(isOpened);

  return (
    <div className="hidden-search-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          className={isOpened ? "active" : ""}
        />
        <img
          src="./search.png"
          alt="search icon"
          height={"40px"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default HiddenSearch;
