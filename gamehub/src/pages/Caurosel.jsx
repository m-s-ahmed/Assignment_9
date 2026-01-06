import React from "react";
import gameimage1 from "../assets/game1.png";
import gameimage2 from "../assets/game2.png";
import gameimage3 from "../assets/game3.png";

const Caurosel = () => {
  return (
    <div>
      <section>
        <div className=" carousel w-full h-[500px] mb-15">
          <div id="slide1" className="carousel-item relative  w-full ">
            <img src={gameimage1} className="w-full " />
            <div className="absolute left-2 right-5 top-2/4 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full ">
            <img src={gameimage2} className="w-full " />
            <div className="absolute left-2 right-5 top-2/4 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full ">
            <img src={gameimage3} className="w-full " />
            <div className="absolute left-2 right-5 top-2/4 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Caurosel;
