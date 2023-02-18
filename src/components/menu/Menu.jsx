import React from "react";
import { Search } from "../pages";
import "./menu.css";
export const Menu = () => {
  return (
    <menu>
      <Search />
      <nav>
        <ul>
          <li>تماس با ما</li>
          <li>درباره ما</li>
          <li>ارتباط با ما</li>
          <li>صحفه اصلی</li>
        </ul>
      </nav>
    </menu>
  );
};
