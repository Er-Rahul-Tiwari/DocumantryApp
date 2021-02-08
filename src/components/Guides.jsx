import { React } from "react";

import card from "../assets/card/c1.jpg";
import card02 from "../assets/card/c2.jpg";
import card03 from "../assets/card/c4.jpg";

const Guides = () => {
  return (
    <div className="guides">
         <h4 className="heading-4 heading-4--dark guides__mb">
             
             How to explore your business thourgh our
          <span className="color__blue ml__small">
              GUIDE'S
          </span>
        </h4>
      <div className="cards">
        <div className="card card__shadow">
          <img src={card} className="card__img" alt="website development" />

          <h4 className="heading-4 card__heading">Start an online business</h4>
          <p className='guides__para'>
          A complete guide to starting a small business online
          </p>
        </div>
        <div className="card card__shadow">
          <img src={card02} className="card__img" alt="website development" />

          <h4 className="heading-4 card__heading">Digital marketing made easy</h4>
          <p className='guides__para'>
          A practical guide to understand what is digital marketing
          </p>
        </div>
        <div className="card card__shadow">
          <img src={card03} className="card__img" alt="website development" />

          <h4 className="heading-4 card__heading">
          Create a logo for your business
          </h4>
          <p className='guides__para'>
          A step-by-step guide to create a memorable business logo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guides;
