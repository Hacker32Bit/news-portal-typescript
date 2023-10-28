import React, { useState } from "react";
import styles from "./Seacrh.module.css";
import { SearchAutocompliteListProps } from "./Search.interface";

const Search: React.FC<SearchAutocompliteListProps> = ({
  searchAutocomplite,
}) => {
  const [showResult, setShowResult] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const onChangeInput = (event: any) => {
    if (event.target.value === "") setShowResult(false);
    else {
      setShowResult(true);
      setSearchInput(event.target.value);
    }
  };

  return (
    <div className={styles.search}>
      <input type="text" onChange={onChangeInput} value={searchInput}></input>
      <button className={styles.search_btn}>Search</button>

      {showResult ? (
        <div className={styles.result}>
          <div className={styles.result_item}>
            <span>Text 1</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
