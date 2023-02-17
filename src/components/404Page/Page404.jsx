import React from "react";
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      شرمنده صحفه ای که داری دنبالش می گردی نیست
      <Link to={"/"}>برگرد برو خونه</Link>
    </div>
  );
};
