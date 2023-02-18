import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loading } from "../pages";

import "./detail.css";
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
              <main key={id} className="main-bookDetail">
                <section className="content">
                  <div className="parent-tilte-img">
                    <h3>{name}</h3>
                    <figure>
                      <img src={img} alt="" />
                    </figure>
                  </div>

                  <div className="info-detail">
                    <h4>در باره کتاب</h4>
                    <article>{caption}</article>
                    <div>
                      <div className="titleDetail">
                        <h4>مشخصات کتاب</h4>
                      </div>
                      <p>
                        {name} <span>اسم کتاب</span>
                      </p>
                      <p>
                        {ahutor}
                        <span>نویسنده </span>
                      </p>
                      <p>
                        {price} <span>قیمت به تومان</span>
                      </p>
                      <p>
                        {pages} <span>تعداد صحفه</span>
                      </p>
                      <p>
                        {ISBN} <span>ISBN</span>
                      </p>
                    </div>
                  </div>
                </section>
              </main>
            );
          })}
        </section>
      ) : (
        <Loading />
      )}
    </div>
  );
};
