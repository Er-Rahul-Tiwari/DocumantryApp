import {React} from "react";

import card from "../assets/card/c1.jpg";
import card02 from "../assets/card/c2.jpg";
import card03 from "../assets/card/c4.jpg";
import card04 from "../assets/card/c5.jpg";
import card05 from "../assets/card/c9.jpg";
import card06 from "../assets/card/c10.jpg";
import card07 from "../assets/card/c11.jpg";
import card08 from "../assets/card/c8.png";
import avtar from "../assets/card/circle1.jpg";

const Slider = () => {
  return (
      <div className="heroSlider">
        <h4 className="heading-4 heading-4--dark">
          The world's largest selection of
          <span className="color__blue ml__small">
            POPULER SERVICE
          </span>
        </h4>
        <div className="heroSlider__sticky">
          <div class="slider">
            <div class="slides">
              <div id="slide-1">All</div>
              <div id="slide-2">Software Development</div>
              <div id="slide-3">Amazon Web Service</div>
              <div id="slide-4">Native App</div>
              <div id="slide-5">Graphic Design</div>
              <div id="slide-2">Digital Marketing</div>
              <div id="slide-3">Grow your business</div>
            </div>
          </div>
        </div>
        
        <div className='banners'>
          <div className='banner'>
            <div className='banner__box'>
              <h4 className='heading-4'>
              Build websites and applications with Web Development
              </h4>
              <p>
              The world of web development is as wide as the internet itself. Much of our social and vocational 
              lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging
               the websites and applications that we increasingly rely on.
              </p>
              <button className='btn btn--blue'>
                Explore Web Development
              </button>
            </div>
            <img src={avtar} className='banner__img' alt='website developer' />
          </div>
        </div>

        <div className="cards">
        <div className="card card__shadow">
              <img
                src={card}
                className="card__img"
                alt="website development"
              />

              <h4 className="heading-4 card__heading">
                Web App Development
              </h4>
        </div>
        <div className="card card__shadow">
              <img
                src={card02}
                className="card__img"
                alt="website development"
              />

              <h4 className="heading-4 card__heading">
                Native App
              </h4>
        </div>
        <div className="card card__shadow">
              <img
                src={card03}
                className="card__img"
                alt="website development"
              />

              <h4 className="heading-4 card__heading">
                Digital Marketing
              </h4>
        </div>
        <div className="card card__shadow">
              <img
                src={card04}
                className="card__img"
                alt="website development"
              />

              <h4 className="heading-4 card__heading">
                Amazon Web Server
              </h4>
        </div>
        <div className="card card__shadow">
              <img
                src={card05}
                className="card__img"
                alt="website development"
              />

              <h4 className="heading-4 card__heading">
                Search Engine Optimization
              </h4>
        </div>
        <div className="card card__shadow">
              <img
                src={card06}
                className="card__img"
                alt="website development"
              />

              <h4 className="heading-4 card__heading">
                Facebook Campaining
              </h4>
        </div>
        </div>
      </div>
      
  );
};

export default Slider;
