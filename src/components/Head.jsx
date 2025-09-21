import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  async function getSearch() {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
        // iphone: [1, 2, 34, 4, 7, 68],
      })
    );
    console.log(searchQuery);
    console.log(suggestions);
    // console.log(json[1]);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) setSuggestions(searchCache[searchQuery]);
      else getSearch();
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col items-center py-3 shadow-md">
      {/* Left Menu + Logo */}
      <div className="flex items-center col-span-1 space-x-3">
        <img
          onClick={toggleMenuHandler}
          className="h-7 w-7 cursor-pointer hover:opacity-70 transition"
          alt="menu"
          src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
        />
        <img
          className="h-8"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/960px-YouTube_2024.svg.png"
        />
      </div>

      {/* Search Bar */}
      <div className="col-span-10 flex justify-center relative">
        <div className="flex w-1/2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-gray-400"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-4 py-2 border border-gray-300 bg-gray-100 rounded-r-full hover:bg-gray-200 transition">
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute top-12 w-1/2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* User Icon */}
      <div className="col-span-1 flex justify-end">
        <img
          className="h-8 w-8 rounded-full"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
