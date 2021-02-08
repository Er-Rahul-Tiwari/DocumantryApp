import {React} from "react";
import avtar from "../assets/card/circle1.jpg";

const ContactUs = () => {
  return (
      
        <div className='banners'>
          <div className='banner'>
            <div className='banner__box'>
              <h4 className='heading-4'>
                  Feel free to share your issues with us
              </h4>
              <p>Answer a few questions for your top picks</p>
              <button className='btn btn--blue'>
                 Get Touch with us
              </button>
            </div>
            <img src={avtar} className='banner__img' alt='website developer' />
          </div>
        </div>

  );
};

export default ContactUs;
