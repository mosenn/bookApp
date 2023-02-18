import React from "react";
import "./footer.css";
import {
  BsTelegram,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
export const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a title=" شماره تماس محسن عباسی">
              <span>
                <BsFillTelephoneFill />
              </span>
              09960763772
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/webdesignlearn/"
              title="
            اینستاگرام محسن عباسی"
            >
              <span>
                <BsInstagram />
              </span>
              webdesignlearn
            </a>
          </li>
          <li>
            <a href="https://t.me/Mohi_ABa" title="تلگرام محسن عباسی">
              <span>
                <BsTelegram />
              </span>
              @Mohi_ABa
            </a>
          </li>
        </ul>
      </nav>
      <section className="parent-copyright-text">
        <div>
          <article>
            <h3> در تلاشیم که بهترین ها رو به شما ارائه بدیم</h3>
          </article>
        </div>
        <div className="copyRight">
          <p>&copy; create by mohsen abasi</p>
        </div>
      </section>
    </footer>
  );
};
