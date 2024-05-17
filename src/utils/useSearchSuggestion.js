import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/menuDrawerSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "./searchSlice";

const useSearchSuggestion = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestionsData, setSuggestionsData] = useState([]);
  const [isSuggestionFocused, setSuggestionFocus] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const getSuggestionsData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSuggestionsData(json[1]);

    //updat cache
    dispatch(cacheResults({ [searchText]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestionsData(searchCache[searchText]);
      } else {
        getSuggestionsData();
      }
    }, 200);
    return () => clearInterval(timer);
  }, [searchText]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return {
    searchText,
    setSearchText,
    suggestionsData,
    toggleMenuHandler,
    isSuggestionFocused,
    setSuggestionFocus,
  };
};

export default useSearchSuggestion;
