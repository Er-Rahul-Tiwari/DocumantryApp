import { React } from "react";
import graphic from '../assets/explore/graphics.svg';
import business from '../assets/explore/business.svg';
import lifestyle from '../assets/explore/lifestyle.svg';
import marketing from '../assets/explore/marketing.svg';
import programming from '../assets/explore/programming.svg';

const Explore = () => {
  return (
    <div className='explores'>
      <h4 className="heading-4 heading-4--dark">
        Explore the
          <span className="color__blue ml__small"> MARKETPLACE</span>
        </h4>
    <div className='explore'>
      <div className='cards'>
        <div className='card explore__center'>
          <img src={graphic} className='explore__icon' alt='graphic design icon' />
          <h4>
            Graphic Design
          </h4>
        </div>
        <div className='card explore__center'>
          <img src={business} className='explore__icon' alt='graphic design icon' />
          <h4>
            Business
          </h4>
        </div>
        <div className='card explore__center'>
          <img src={lifestyle} className='explore__icon' alt='graphic design icon' />
          <h4>
            Lifestyle
          </h4>
        </div>
        <div className='card explore__center'>
          <img src={marketing} className='explore__icon' alt='graphic design icon' />
          <h4>
            Marketing
          </h4>
        </div>
        <div className='card explore__center'>
          <img src={graphic} className='explore__icon' alt='graphic design icon' />
          <h4>
            Graphic Design
          </h4>
        </div>
        <div className='card explore__center'>
          <img src={programming} className='explore__icon' alt='graphic design icon' />
          <h4>
            Programming
          </h4>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
