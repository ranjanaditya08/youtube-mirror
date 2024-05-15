import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuDrawerSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const useSearchSuggestion = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestionsData, setSuggestionsData] = useState([]);
  const [isSuggestionFocused, setSuggestionFocus] = useState(false);

  const getSuggestionsData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSuggestionsData(json[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSuggestionsData(), 200);
    return () => clearInterval(timer);
  }, [searchText]);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return { searchText, setSearchText, suggestionsData, toggleMenuHandler,isSuggestionFocused, setSuggestionFocus };
};

export default useSearchSuggestion;
