import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./404.css";
export const Page404 = () => {
  return (
    <div className="main-404">
      <h1> شرمنده صحفه ای که داری دنبالش می گردی نیست</h1>
      <Link to={"/"}>
        <span >
          <AiFillHome />
        </span>
        برگرد برو خونه
      </Link>

      <figure>
        <img
          src="../../../public/img/404-error-with-landscape-concept-illustration_114360-7898.avif"
          alt=""
        />
      </figure>
    </div>
  );
};
