import {React} from "react";

const Hero = () => {
  return (
    <div className='heros'>
      <div className='hero'>
          <h3 className='heading-3'>
            World's class services
          </h3>
          <h2 className='hero__heading'>
            A guide for every journey
          </h2>
          <p className='hero__para'>
            To help for enhance your revenues here
          </p>
          
          <div class="slider">
            <div class="slides">
              <div id="slide-1" className='hero__bg'>Development</div>
              <div id="slide-2" className='hero__bg'>AWS</div>
              <div id="slide-3" className='hero__bg'>Native App</div>
              <div id="slide-4" className='hero__bg'>Graphic Design</div>
              <div id="slide-5" className='hero__bg'>Digital Marketing</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
