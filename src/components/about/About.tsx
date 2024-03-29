import React, { useState, useRef, useEffect } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import { Potato, } from 'images';
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(document.createElement("div"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <ScrollableAnchor id={'about'}>       
      <div className="about-container white-container">

        <div className="main" ref={ref}>
          <div className="flex-grow-1 slide-item-left">
            <img className="potato" src={Potato} alt="dog" />
          </div>

          <div className="flex-grow-1 slide-item-right">
            <div className="about-description-panel">
              <h1 id="about-me-section-header" className="text-center">About Me</h1>
              <p className="section-description">I work out of Denver, CO. I have a dog named Potato. I enjoy running, but hiking is better. Metal and Rock are my top Spotify genres. My favorite number is 34. I'm an avid cross-stitcher. I'm an occasional Rocket Leaguer.</p>                  
            </div> 
          </div>
          
        </div>
      </div>
    </ScrollableAnchor>
  )
};

export default About;