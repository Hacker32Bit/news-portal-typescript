import React, { useState } from "react";
import styles from "./Seacrh.module.css";
import {
  SearchAutocompliteProps,
  SearchAutocompliteListProps,
} from "./Search.interface";
import { preProcessFile } from "typescript";

const Search: React.FC<SearchAutocompliteListProps> = ({
  searchAutocomplite,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<SearchAutocompliteProps[]>(
    []
  );
  const [activeInput, setActiveInput] = useState<boolean>(false);

  const handleSearch = (text: string) => {
    const filtered = searchAutocomplite
      .filter((item) => {
        return item.text.toLowerCase().includes(text.toLowerCase());
      })
      .sort((a, b) => b.rating - a.rating);

    setFilteredItems(filtered);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text);
    handleSearch(text);
  };

  const handleSelectedItem = (item: SearchAutocompliteProps) => {
    setSearchText(item.text);
    setFilteredItems([]);
  };


  return (
    <div className={styles.search}>
      <input
        type="text"
        onChange={handleInputChange}
        value={searchText}
      ></input>
      <button className={styles.search_btn}>Search</button>

      {activeInput ? (
        <div className={styles.result}>
          {filteredItems.map((item) => {
            return (
              <div
                key={item.text}
                className={styles.result_item}
                onClick={() => handleSelectedItem(item)}
              >
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
