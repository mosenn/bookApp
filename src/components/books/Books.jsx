import React from "react";
import { Link } from "react-router-dom";
import "./book.css";

export const Books = ({
  id,
  img,
  caption,
  name,
  ISBN,
  price,
  pages,
  genre,
}) => {
  return (
    <div key={id} className="parent-books">
      <h1>{name}</h1>
      <figure>
        <img src={img} alt="" />
        <figcaption>{caption.substr(0, 107)}...</figcaption>
      </figure>

      <div className="info">
        <p>{price} قیمت به تومان</p>
        <p> ژانر {genre} </p>
      </div>
      <Link to={`/detail/${id}`}>جزئیات بیشتر</Link>
    </div>
  );
};
