import { React } from "react";

const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__cards">
        <div className="promo__card">
          <div className="promo__icon">
            <svg className="promo__svg" viewBox="0 0 24 24">
              <path d="M20.39 19.37L16.38 18 15 22l-3.08-6L9 22l-1.38-4-4.01 1.37 2.92-6A6.97 6.97 0 015 9a6.999 6.999 0 1114 0c0 1.65-.57 3.17-1.53 4.37l2.92 6zM7 9l2.69 1.34-.19 3 2.5-1.66 2.5 1.65-.17-2.99L17 9l-2.68-1.35.18-2.98L12 6.31 9.5 4.65l.17 3.01L7 9z"></path>
            </svg>
          </div>
          <div className="promo__box">
            <h3 className="promo__heading">Grow your business</h3>
            <p>Enjoy a variety of fresh topics</p>
          </div>
        </div>
        <div className="promo__card">
          <div className="promo__icon">
            <svg className="promo__svg" viewBox="0 0 24 24">
            <path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7l7 4z"></path>            </svg>
          </div>
          <div className="promo__box">
            <h3 className="promo__heading">Expert instruction</h3>
            <p>Find the right instructor for you</p>
          </div>
        </div>
        <div className="promo__card">
          <div className="promo__icon">
            <svg className="promo__svg" viewBox="0 0 24 24">
            <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2A5.37 5.37 0 005.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12a5.386 5.386 0 003.82 1.57c2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"></path>            </svg>
          </div>
          <div className="promo__box">
            <h3 className="promo__heading">World's class services</h3>
            <p>To place your company with MNC's</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
