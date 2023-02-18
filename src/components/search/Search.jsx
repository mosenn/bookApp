import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SearchFun } from "../../services/searchQuery";

import { GiArchiveResearch } from "react-icons/gi";
import "./search.css";

export const Search = () => {
  const [Searchquery, SetsearchQuery] = useState("");
  const dispatch = useDispatch();
  const HandelerForm = (e) => {
    e.preventDefault();

    dispatch(SearchFun(Searchquery.trim()));
  };

  return (
    <form onSubmit={HandelerForm}>
      <input
        type="search"
        placeholder="سرچ ژانر رمان ,اموزشی,موفقیت,شوخ طبعی"  
        value={Searchquery}
        name="search"
        onChange={(e) => {
          SetsearchQuery(e.target.value);
          //? line 23 - search worked with type input(onchange)
          // dispatch(SearchFun(e.target.value.trim()));
        }}
      />
      <button type="submit" title="جستجو">
        <GiArchiveResearch />
      </button>
    </form>
  );
};
