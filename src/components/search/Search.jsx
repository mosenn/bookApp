import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { SearchFun } from "../../services/searchQuery";
import "./search.css";
import { useLocation, useNavigate } from "react-router-dom";

export const Search = () => {
  const dispatch = useDispatch();
  const HandelerForm = (e) => {
    e.preventDefault();
  };
  const location = useLocation();

  console.log(typeof location.pathname);
  useEffect(() => {
    if (location.pathname === "/detail/") {
      return console.log("mohsen");
    }
  }, [location.pathname]);
  return (
    <form onSubmit={HandelerForm}>
      <input
        type="text"
        placeholder="جستجو"
        onChange={(e) => {
          dispatch(SearchFun(e.target.value.trim()));
        }}
      />
      <button type="submit">click</button>
    </form>
  );
};
