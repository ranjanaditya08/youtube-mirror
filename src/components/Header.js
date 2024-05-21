import menu from "../assets/menu.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import userIcon from "../assets/user.png";
import useSearchSuggestion from "../utils/useSearchSuggestion";

const Header = () => {
  const {
    searchText,
    setSearchText,
    suggestionsData,
    toggleMenuHandler,
    isSuggestionFocused,
    setSuggestionFocus,
  } = useSearchSuggestion();

  return (
    <div className="sticky top-0 z-50 bg-white flex justify-between mt-2 px-6 py-2">
      <div className="flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 w-9 hover:bg-gray-200 rounded-full cursor-pointer mr-3"
          src={menu}
          alt="menu"
        />
        <a href="/">
          <img className="h-8 cursor-pointer" src={logo} alt="logo" />
        </a>
      </div>
      <div>
        <div className="flex">
          <input
            className="lg:w-[550px] h-9 rounded-l-full border border-gray-400 focus:outline-none focus:border-blue-700 px-4 py-1"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setSuggestionFocus(true)}
            onBlur={() => setSuggestionFocus(false)}
          />
          <span className="h-9 px-5 rounded-r-full border border-gray-400 p-2 bg-gray-100 cursor-pointer">
            <img className="h-5 w-5" src={search} alt="search" />
          </span>
        </div>
        {searchText.length !== 0 && (
          <ul className="fixed bg-white rounded-lg px-2 py-1 border border-slate-200 shadow-sm">
            {suggestionsData.map(
              (data, index) =>
                isSuggestionFocused && (
                  <li
                    className="hover:bg-slate-100 px-2 py-1 rounded-lg lg:w-[550px] sm:w-56 cursor-pointer"
                    key={index}
                  >
                    {data}
                  </li>
                )
            )}
          </ul>
        )}
      </div>
      <img className="h-9 w-9" src={userIcon} alt="user icon" />
    </div>
  );
};

export default Header;
