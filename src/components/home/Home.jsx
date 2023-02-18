import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Loading, Books } from "../pages";
import "./home.css";
export const Home = () => {
  //*Loadigin state
  const [loading, setLoading] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  //*take data from services
  const state = useSelector((state) => state.bookData.value);

  //*input search value
  const query = useSelector(
    (state) => state.SliceQuery.value.Searchquery
  );

  const Bookdata = state.data;

  const SearchFun = () => {
    let searcData = Bookdata;
    searcData = searcData.filter((items) =>
      items.genre.toLowerCase().includes(query)
    );
    return searcData;
  };

  return (
    <main>
      {Bookdata && loading ? (
        <section className="books-template">
          {SearchFun().map((items) => {
            return (
              <div key={items.id}>
                <Books {...items} />
              </div>
            );
          })}
        </section>
      ) : (
        <Loading />
      )}
    </main>
  );
};
