import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loading } from "../pages";
export const Bookdetail = () => {
  //? id is coming from router dom
  const { id } = useParams();
  const navigate = useNavigate();
  //? books data coming from services
  const DetailData = useSelector(
    (state) => state.bookData.value.data
  );

  const book = DetailData?.filter((data) => +data.id === +id);

  return (
    <div>
      {DetailData ? (
        <section>
          {book?.map((items) => {
            const {
              id,
              name,
              ISBN,
              caption,
              img,
              ahutor,
              pages,
              price,
            } = items;
            return (
              <section key={id}>
                <h3>{name}</h3>
                <figure>
                  <img src={img} alt="" />
                  <figcaption>{caption}</figcaption>
                </figure>
                <div>
                  <p>{price}</p>
                  <p>{pages}</p>
                  <p>{name}</p>
                  <p>{ISBN}</p>
                  <p>{ahutor}</p>
                </div>
              </section>
            );
          })}
        </section>
      ) : (
        <Loading />
      )}
    </div>
  );
};
