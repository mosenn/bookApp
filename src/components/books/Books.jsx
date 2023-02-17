import React from "react";
import { Link } from "react-router-dom";

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
    <div key={id}>
      <Link to={`/detail/${id}`}>جزئیات بیشتر</Link>
      <h3>{genre}</h3>
      <h2>{name}</h2>
      <figure>
        <img src={img} alt="" />
        <figcaption>{caption}</figcaption>
      </figure>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <p>{price} تومان</p>
        <p>{genre}</p>
        <p>{ISBN}</p>
        <p>{pages}</p>
      </div>
    </div>
  );
};
