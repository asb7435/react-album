import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className={styles.searchBar__search__input}
        />
        <img
          src="src\assets\icon\icon-search.svg"
          alt=""
          className={styles.searchBar__search__icon}
        />
      </div>
    </div>
  );
}

export default SearchBar;
