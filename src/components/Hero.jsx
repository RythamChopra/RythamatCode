import { curve, heroBackground, robot } from "../assets/index.js";
import Section from "./Section.jsx";

import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero.jsx";

import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

import Notification from "./Notification.jsx";
import IntroWall2 from "./IntroWall2.jpg";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-12[rem] -mt-[5.25px]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem] lg:mt-[1rem]">
          <h1 className="h1 mb-6 mt-1">
            Welcome to my CodeSpace
            <span className="inline-block relative">Feel free to Explore</span>
          </h1>
          <p className="body-1  mx-auto mb-6 text-n-2 lg:mb-8">
            What drives me is the ability to face challenges and remain
            disciplined, even in the face of unfavorable outcomes. It's this
            commitment to problem-solving that fuels my pursuit of better
            results.
          </p>
        </div>

        <div className=" max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl  ">
            <div className="relative ">
              <div className="h-[1.4rem]rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect[688/490] lg:aspect-[1024/490]">
                <img
                  src={IntroWall2}
                  className="w-full scale-[1.7]
                   translate-y-[8%] 
                   md:scale-[1]
                   md:-translate-y-[10%]
                   lg:-translate-y-[23%]
                   "
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[10rem] w-[18rem] xl:flex"
                    title="LastName : Chopra"
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[20rem] w-[18rem] xl:flex"
                    title="FirstName : Rytham"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>
          {/*Hero Wallpaper at the back */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
        </div>
      </div>

      {/*This is where the background circles were*/}

      <BottomLine />
    </Section>
  );
};

export default Hero;
