import { useState, useRef, useEffect } from "react";
import "./HiddenSearch.css";

function HiddenSearch() {
  const [isOpened, setIsOpened] = useState(false);
  const inputElement = useRef(null);

  useEffect(() => {
    if (isOpened) {
      inputElement.current.focus();
    }
  }, [isOpened]);

  const handleClick = () => {
    isOpened ? setIsOpened(false) : setIsOpened(true);
  };

  return (
    <div className="hidden-search-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          className={isOpened ? "active" : ""}
          ref={inputElement}
        />
        <button>
          <img
            src="./search.png"
            alt="search icon"
            height={"50px"}
            onClick={handleClick}
          />
        </button>
      </div>
    </div>
  );
}

export default HiddenSearch;
