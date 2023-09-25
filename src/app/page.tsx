"use client"
import { GmailIcon, GitIcon, LinkedInIcon, Xicon, DotsIcon, MenuIcon, ArrowDownRight, ArrowDownLeft } from "./media/svg"
import { useState } from 'react';
import Slider from 'react-slick';
import { baseUrl1, baseUrl2, baseUrl3, baseUrl4, baseUrl5 } from './config.js'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  const [hover1, setHover1] = useState(false);
  const [turn1, setTurn1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [turn2, setTurn2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [turn3, setTurn3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [turn4, setTurn4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [turn5, setTurn5] = useState(false);
  const handleMouseEnter1 = () => {
    setHover1(true);
  };

  const handleMouseLeave1 = () => {
    setHover1(false);
  };
  const turnPt1 = () => {
    setTurn1(!turn1)
  }
  const handleMouseEnter2 = () => {
    setHover2(true);
  };

  const handleMouseLeave2 = () => {
    setHover2(false);
  };
  const turnPt2 = () => {
    setTurn2(!turn2)
  }
  const handleMouseEnter3 = () => {
    setHover3(true);
  };

  const handleMouseLeave3 = () => {
    setHover3(false);
  };
  const turnPt3 = () => {
    setTurn3(!turn3)
  }
  const handleMouseEnter4 = () => {
    setHover4(true);
  };

  const handleMouseLeave4 = () => {
    setHover4(false);
  };
  const turnPt4 = () => {
    setTurn4(!turn4)
  }
  const handleMouseEnter5 = () => {
    setHover5(true);
  };

  const handleMouseLeave5 = () => {
    setHover5(false);
  };
  const turnPt5 = () => {
    setTurn5(!turn5)
  }
  return (
    <div className="w-full h-screen ">
      <div className="flex flex-col flex-wrap  w-full h-full pt-5 pl-5 pr-5">
        <div className="w-full h-full border-2 border-black p-0 m-0 ">
          <div className="w-full h-12 border-b-2 border-black flex flex-row justify-between items-center p-0 m-0">
            <div className="w-13 h-full border-black border-r-2 p-0 m-0">
              <img src="/Rectangle4.png" className="h-full w-full relative right object-none"></img>
            </div>
            <div className="font-secondary text-7xl flex text-center items-center mb-5 flex-row justify-around w-80 h-full">
              <div>Bie Fung</div>
              <div>-</div>
              <div>Front End Developer</div>
            </div>
            <div className="w-6 h-full border-l-2 border-black p-2 m-0 flex flex-col items-center">
              <div className="mb-2 font-primary text-sm font-bold text-gray-500 text-center">Works</div>
              <div className="mb-2 cursor-pointer"><DotsIcon /></div>
            </div>
          </div>
          <div className="w-full h-76 flex flex-row">
            <div className="w-13 h-full border-r-2 border-black flex flex-col">
              <div className="p-4 w-full h-full flex  flex-col justify-end">
                <div className="font-primary text-xl font-bold text-black ">Bie Fung</div>
                <div className="font-primary text-sm font-bold text-gray-500">Profile</div>
                <div><img src="/bfung.png" className="w-80 h-full" /></div>
                <div className="font-primary text-sm font-semibold text-black mt-2 leading-6">
                  <div>Hello, i'm Bie Fung.</div>
                  you can call me Abe or Bei.
                  <div>I’m a Front End Developer</div>
                  and Web Designer. Specializing in JavaScript.
                  I'm a self taught Software Engineer with passion and dreams</div>
              </div>
            </div>
            <div className="w-87 h-full pl-8 pr-8 flex flex-col justify-center items-center">
            </div>
          </div>
          <div className="w-full h-12 border-t-2 border-black  flex flex-row justify-between">
            <div className="w-30 h-full   p-0 flex  ">
              <div className="w-full font-secondary text-white text-5xl text-center items-center h-full flex justify-center pb-4 bg-black border-white border-2">
                Projects
              </div>
            </div>
            <div className="w-70 h-full object-fill border-black border-l-2">
              <img src="/Rectangle10.png" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col flex-wrap pl-5 pr-5 ">
        <div className="w-full h-full">
          {turn1 ? (
            <div className="w-full h-80 flex flex-column justify-between flex-wrap  transition-all duration-500 scale-up-ver-top ">
              <div className="w-full h-30 flex flex-row flex-wrap transition-all duration-500 -translate-x-0">
                <div className="w-full h-full border-black border-r-2 border-l-2 flex flex-row flex-wrap bg-white p-5">
                  <div className="relative w-full h-full">
                    <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 left-0 top-0"></div>
                    <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                    <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                      <div className="w-full font-secondary text-black text-6xl p-6  white text-center">
                        Easy Features
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-70 bg-white p-4 flex flex-row flex-wrap justify-between border-black border-l-2 border-r-2 border-b-2">
                <div className="w-[55%]  p-6 font-secondary">
                  <div className="w-full h-full text-3xl  text-black font-secondary">
                    "EasyFeatures" is a dedicated website built with React JS and designed to assist developers working with React.js. With its extensive collection of JSX templates and CSS code snippets.
                    <div className="text-3xl text-black font-secondary mt-4">
                      Tech Stack :
                      <div className="text-3xl text-black font-secondary">- Javascript</div>
                      <div className="text-3xl text-black font-secondary">- React JS</div>
                      <div className="text-3xl text-black font-secondary">- Git</div>
                      <div className="text-3xl text-black font-secondary">- Netlify</div>

                      <div className="text-3xl text-black font-secondary flex gap-6 flex-row mt-4">
                        Website :
                        <div className="text-3xl text-black font-secondary font-light underline">easyfeatures.netlify.app</div>
                      </div>
                      <div className="text-3xl text-black font-secondary flex gap-6 flex-row mt-4">
                        Github :
                        <div className="text-3xl text-black font-secondary font-light underline">github.com/Bfungcode/EasyFeatures</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-40 h-full mr-8 mt-8 ">
                  <Slider {...SliderSettings}>
                    <div>
                      <img src={baseUrl1 + "ft1.png"} />
                    </div>
                    <div>
                      <img src={baseUrl1 + "ft2.png"} />
                    </div>
                    <div>
                      <img src={baseUrl1 + "ft3.png"} />
                    </div>
                    <div>
                      <img src={baseUrl1 + "ft4.png"} />
                    </div>
                  </Slider>
                  <div className="flex flex-row flex-wrap justify-end gap-2 items-center cursor-pointer mt-4" onClick={turnPt1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-30 flex flex-row justify-between flex-wrap  transition-all duration-500 -translate-x-0 ">
              {hover1 ? (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white " onMouseMove={handleMouseEnter1} onMouseLeave={handleMouseLeave1} onClick={turnPt1} >
                  <div className="relative w-full h-full  flex flex-row flex-wrap justify-center items-center cursor-pointer">
                    <img src="/ef1.png" className="w-full h-full object-cover blur-sm"></img>
                    <div className="absolute text-4xl font-secondary text-white underline">More Detail</div>
                  </div>
                </div>
              ) : (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white " onMouseMove={handleMouseEnter1} onMouseLeave={handleMouseLeave1} onClick={turnPt1}>
                  <div className="w-full h-full  flex flex-column flex-wrap">
                    <img src="/ef1.png" className="w-full h-full object-cover"></img>
                  </div>
                </div>
              )}
              <div className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-white p-6">
                <div className="relative w-full h-full">
                  <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 left-0 top-0"></div>
                  <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                  <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                    <div className="w-full font-secondary text-black text-6xl p-6  bg-white text-center">
                      Easy Features
                      <div className="text-2xl font-secondary">
                        a Dedicated website built with React JS and designed to assist developers working with React.js. With its extensive collection of JSX templates and CSS code snippets,
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          )}
          {turn2 ? (
            <div className="w-full h-80 flex flex-column justify-between flex-wrap  transition-all duration-500 scale-up-ver-top ">
              <div className="w-full h-30 flex flex-row flex-wrap transition-all duration-500 -translate-x-0">
                <div className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-5">
                  <div className="relative w-full h-full">
                    <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                    <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                    <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                      <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                        CryptoHex
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-70 bg-black p-4 flex flex-row flex-wrap justify-between">
                <div className="w-40 h-full mt-8 ml-8">
                  <Slider {...SliderSettings}>
                    <div>
                      <img src={baseUrl2 + "ft1.png"} />
                    </div>
                    <div>
                      <img src={baseUrl2 + "ft2.png"} />
                    </div>
                    <div>
                      <img src={baseUrl2 + "ft3.png"} />
                    </div>
                    <div>
                      <img src={baseUrl2 + "ft4.png"} />
                    </div>
                  </Slider>
                  <div className="flex flex-row flex-wrap justify-start gap-2 items-center cursor-pointer mt-4" onClick={turnPt2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
                  </div>
                </div>
                <div className="w-[55%] h-full p-8">
                  <div className="w-full h-full text-3xl  text-white font-secondary text-end">
                    "Cryptohex" is a Cryptocurrency wallet service web application built with Vue JS
                    <div className="text-3xl text-white font-secondary mt-4">
                      Tech Stack :
                      <div className="text-3xl text-white font-secondary">- Javascript</div>
                      <div className="text-3xl text-white font-secondary">- Vue JS</div>
                      <div className="text-3xl text-white font-secondary">- Git</div>
                      <div className="text-3xl text-white font-secondary">- Netlify</div>

                      <div className="text-3xl text-white font-secondary flex gap-6 flex-row mt-4 justify-end">
                        Website :
                        <div className="text-3xl text-white font-secondary font-light underline">cryptohex.netlify.app</div>
                      </div>
                      <div className="text-3xl text-white font-secondary flex gap-6 flex-row mt-4 justify-end">
                        Github :
                        <div className="text-3xl text-white font-secondary font-light underline">github.com/Bfungcode/CryptoHex</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-30 flex flex-row justify-between flex-wrap  transition-all duration-500 -translate-x-0 ">
              <div className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-6">
                <div className="relative w-full h-full">
                  <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                  <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                  <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                    <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                      CryptoHex
                      <div className="text-2xl font-secondary">
                        a Cryptocurrency wallet service web application built with Vue JS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {hover2 ? (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white border-r-2" onMouseMove={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={turnPt2} >
                  <div className="relative w-full h-full  flex flex-row flex-wrap justify-center items-center cursor-pointer">
                    <img src="/pt2/ft1.png" className="w-full h-full object-cover blur-sm"></img>
                    <div className="absolute text-4xl font-secondary text-white underline">More Detail</div>
                  </div>
                </div>
              ) : (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white border-r-2" onMouseMove={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={turnPt2}>
                  <div className="w-full h-full  flex flex-column flex-wrap">
                    <img src="/pt2/ft1.png" className="w-full h-full object-cover"></img>
                  </div>
                </div>
              )}
            </div >
          )}
          {turn3 ? (
            <div className="w-full h-80 flex flex-column justify-between flex-wrap  transition-all duration-500 scale-up-ver-top ">
              <div className="w-full h-30 flex flex-row flex-wrap transition-all duration-500 -translate-x-0">
                <div className="w-full h-full border-black border-r-2 border-l-2 flex flex-row flex-wrap bg-white p-5">
                  <div className="relative w-full h-full">
                    <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 left-0 top-0"></div>
                    <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                    <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                      <div className="w-full font-secondary text-black text-6xl p-6  bg-white text-center">
                        Cashier
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-70 bg-white p-4 flex flex-row flex-wrap justify-between border-black border-r-2 border-l-2 border-b-2">
                <div className="w-[55%] h-full bg-white p-4">
                  <div className="w-full h-full text-3xl  text-black font-secondary">
                    Cashier: A user-friendly portfolio project with an interactive food menu webpage that allows you to assemble your order on the right side while keeping track of your total payment.
                    <div className="text-3xl text-black font-secondary mt-1">
                      Tech Stack :
                      <div className="text-3xl text-black font-secondary">- Javascript</div>
                      <div className="text-3xl text-black font-secondary">- React JS</div>
                      <div className="text-3xl text-black font-secondary">- Tailwind CSS</div>
                      <div className="text-3xl text-black font-secondary">- Firebase</div>
                      <div className="text-3xl text-black font-secondary">- Git</div>
                      <div className="text-3xl text-black font-secondary">- Vercel</div>

                      <div className="text-3xl text-black font-secondary flex gap-6 flex-row mt-1">
                        Website :
                        <div className="text-3xl text-black font-secondary font-light underline">cashier-webapp.vercel.app</div>
                      </div>
                      <div className="text-3xl text-black font-secondary flex gap-6 flex-row mt-1">
                        Github :
                        <div className="text-3xl text-black font-secondary font-light underline">github.com/Bfungcode/Cashier_WebApp</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-40 h-full mr-8 mt-8">
                  <Slider {...SliderSettings}>
                    <div>
                      <img src={baseUrl3 + "ft1.png"} />
                    </div>
                    <div>
                      <img src={baseUrl3 + "ft2.png"} />
                    </div>
                    <div>
                      <img src={baseUrl3 + "ft3.png"} />
                    </div>
                  </Slider>
                  <div className="flex flex-row flex-wrap justify-end gap-2 items-center cursor-pointer mt-4" onClick={turnPt3}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-30 flex flex-row justify-between flex-wrap  transition-all duration-500 -translate-y-0 ">
              {hover3 ? (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white " onMouseMove={handleMouseEnter3} onMouseLeave={handleMouseLeave3} onClick={turnPt3} >
                  <div className="relative w-full h-full  flex flex-row flex-wrap justify-center items-center cursor-pointer">
                    <img src="/pt3/ft1.png" className="w-full h-full object-cover blur-sm"></img>
                    <div className="absolute text-4xl font-secondary text-white underline">More Detail</div>
                  </div>
                </div>
              ) : (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white " onMouseMove={handleMouseEnter3} onMouseLeave={handleMouseLeave3} onClick={turnPt3}>
                  <div className="w-full h-full  flex flex-column flex-wrap">
                    <img src="/pt3/ft1.png" className="w-full h-full object-cover"></img>
                  </div>
                </div>
              )}
              <div className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-white p-6">
                <div className="relative w-full h-full">
                  <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 left-0 top-0"></div>
                  <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                  <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                    <div className="w-full font-secondary text-black text-6xl p-6  bg-white text-center">
                      Cashier
                      <div className="text-2xl font-secondary">
                        a User-friendly portfolio project with an interactive food menu webpage that allows you to assemble your order on the right side while keeping track of your total payment.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          )}
          {turn4 ? (
            <div className="w-full h-80 flex flex-column justify-between flex-wrap  transition-all duration-500 scale-up-ver-top ">
              <div className="w-full h-30 flex flex-row flex-wrap transition-all duration-500 -translate-x-0">
                <div className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-5">
                  <div className="relative w-full h-full">
                    <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                    <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                    <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                      <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                        E-Comm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-70 bg-black p-4 flex flex-row flex-wrap justify-between">
                <div className="w-40 h-full ml-8 mt-8">
                  <Slider {...SliderSettings}>
                    <div>
                      <img src={baseUrl4 + "ft1.png"} />
                    </div>
                    <div>
                      <img src={baseUrl4 + "ft2.png"} />
                    </div>
                    <div>
                      <img src={baseUrl4 + "ft3.png"} />
                    </div>
                    <div>
                      <img src={baseUrl4 + "ft4.png"} />
                    </div>
                  </Slider>
                  <div className="flex flex-row flex-wrap justify-start gap-2 items-center cursor-pointer mt-4" onClick={turnPt4}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
                  </div>
                </div>
                <div className="w-[55%] h-full p-8">
                  <div className="w-full h-full text-3xl  text-white font-secondary text-end">
                    "E-Comm" a minimalist e-commerce interface featuring stylish shirts and clothing options for both genders, allowing easy navigation to the next item.
                    <div className="text-3xl text-white font-secondary mt-2">
                      Tech Stack :
                      <div className="text-3xl text-white font-secondary">- JavaScript</div>
                      <div className="text-3xl text-white font-secondary">- Vue JS</div>
                      <div className="text-3xl text-white font-secondary">- Git</div>
                      <div className="text-3xl text-white font-secondary">- Netlify</div>

                      <div className="text-3xl text-white font-secondary flex gap-6 flex-row mt-2 justify-end">
                        Website :
                        <div className="text-3xl text-white font-secondary font-light underline">onecommercepage.netlify.app</div>
                      </div>
                      <div className="text-3xl text-white font-secondary flex gap-6 flex-row mt-2 justify-end">
                        Github :
                        <div className="text-3xl text-white font-secondary font-light underline">github.com/Bfungcode/Ecommerce_Catalog</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-30 flex flex-row justify-between flex-wrap  transition-all duration-500 -translate-y-0 ">
              <div className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-6">
                <div className="relative w-full h-full">
                  <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                  <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                  <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                    <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                      E-Comm
                      <div className="text-2xl font-secondary">
                        a Minimalist e-commerce interface featuring stylish shirts and clothing options for both genders, allowing easy navigation to the next item.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {hover4 ? (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white border-r-2" onMouseMove={handleMouseEnter4} onMouseLeave={handleMouseLeave4} onClick={turnPt4} >
                  <div className="relative w-full h-full  flex flex-row flex-wrap justify-center items-center cursor-pointer">
                    <img src="/pt4/ft1.png" className="w-full h-full object-cover blur-sm"></img>
                    <div className="absolute text-4xl font-secondary text-white underline">More Detail</div>
                  </div>
                </div>
              ) : (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white border-r-2" onMouseMove={handleMouseEnter4} onMouseLeave={handleMouseLeave4} onClick={turnPt4}>
                  <div className="w-full h-full  flex flex-column flex-wrap">
                    <img src="/pt4/ft1.png" className="w-full h-full object-cover"></img>
                  </div>
                </div>
              )}
            </div >
          )}
          {turn5 ? (
            <div className="w-full h-80 flex flex-column justify-between flex-wrap  transition-all duration-500 scale-up-ver-top ">
              <div className="w-full h-30 flex flex-row flex-wrap transition-all duration-500 -translate-x-0">
                <div className="w-full h-full border-black border-r-2 border-l-2 flex flex-row flex-wrap bg-white p-5">
                  <div className="relative w-full h-full">
                    <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 left-0 top-0"></div>
                    <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                    <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                      <div className="w-full font-secondary text-black text-6xl p-6  bg-white text-center">
                        Cartal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-70 bg-white p-4 flex flex-row flex-wrap justify-between border-black border-r-2 border-l-2 border-b-2">
                <div className="w-[55%] h-full bg-white p-4">
                  <div className="w-full h-full text-3xl  text-black font-secondary">
                    "Cartal" a Car Rental Web Application for the customer side to do transaction, built by using React JS. (Bootcamp Final Project)
                    <div className="text-3xl text-black font-secondary mt-4">
                      Tech Stack :
                      <div className="text-3xl text-black font-secondary">- JavaScript</div>
                      <div className="text-3xl text-black font-secondary">- React JS</div>
                      <div className="text-3xl text-black font-secondary">- React Redux</div>
                      <div className="text-3xl text-black font-secondary">- Git</div>
                      <div className="text-3xl text-black font-secondary">- Netlify</div>

                      <div className="text-3xl text-black font-secondary flex gap-6 flex-row mt-4">
                        Website :
                        <div className="text-3xl text-black font-secondary font-light underline">User : cartal.netlify.app </div>
                        <div className="text-3xl text-black font-secondary font-light underline">Admin : admin-cartal.netlify.app</div>
                      </div>
                      <div className="text-3xl text-black font-secondary flex gap-6 flex-row mt-4">
                        Github :
                        <div className="text-3xl text-black font-secondary font-light underline">github.com/Bfungcode/BinarCarRents_Main</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-40 h-full mr-8 mt-8">
                  <Slider {...SliderSettings}>
                    <div>
                      <img src={baseUrl5 + "ft1.png"} />
                    </div>
                    <div>
                      <img src={baseUrl5 + "ft2.png"} />
                    </div>
                    <div>
                      <img src={baseUrl5 + "ft3.png"} />
                    </div>
                    <div>
                      <img src={baseUrl5 + "ft4.png"} />
                    </div>
                  </Slider>
                  <div className="flex flex-row flex-wrap justify-end gap-2 items-center cursor-pointer mt-4" onClick={turnPt5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-30 flex flex-row justify-between flex-wrap  transition-all duration-500 -translate-y-0 ">
              {hover5 ? (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white " onMouseMove={handleMouseEnter5} onMouseLeave={handleMouseLeave5} onClick={turnPt5} >
                  <div className="relative w-full h-full  flex flex-row flex-wrap justify-center items-center cursor-pointer">
                    <img src="/pt5/ft1.png" className="w-full h-full object-cover blur-sm"></img>
                    <div className="absolute text-4xl font-secondary text-white underline">More Detail</div>
                  </div>
                </div>
              ) : (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white " onMouseMove={handleMouseEnter5} onMouseLeave={handleMouseLeave5} onClick={turnPt5}>
                  <div className="w-full h-full  flex flex-column flex-wrap">
                    <img src="/pt5/ft1.png" className="w-full h-full object-cover"></img>
                  </div>
                </div>
              )}
              <div className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-white p-6">
                <div className="relative w-full h-full">
                  <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 left-0 top-0"></div>
                  <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                  <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                    <div className="w-full font-secondary text-black text-6xl p-6  bg-white text-center">
                      Cartal
                      <div className="text-2xl font-secondary">
                        a Car Rental Web Application for the customer side to do transaction, built by using React JS. (Bootcamp Final Project)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          )}

          <div className="w-full h-60 flex flex-col flex-wrap ">
            <div className="w-full h-20  border-black border-b-2 flex flex-row justify-between">
              <div className="w-70 h-full  border-black border-l-2 border-r-2">
                <img src="/Rectangle10.png" className="w-full h-full object-cover" />
              </div>
              <div className="w-30 h-full border-black border-r-2  p-0 flex  ">
                <div className="w-full font-secondary text-white text-5xl text-center items-center h-full flex justify-center pb-4 bg-black border-white border-2">
                  Contacts
                </div>
              </div>
            </div>
            <div className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row">
              <div className="w-70 h-full   text-white text-5xl font-secondary bg-black flex justify-center items-center flex-col gap-2">
                bfung0011@gmail.com

              </div>
              <div className="w-30 h-full text-black font-secondary text-5xl flex flex-row justify-center items-center border-black border-l-2">
                Gmail
              </div>
            </div>
            <div className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row">
              <div className="w-30 h-full  border-black border-r-2 text-black text-5xl font-secondary  flex justify-center items-center">
                LinkedIn
              </div>
              <div className="w-70 h-full text-white font-secondary text-5xl flex flex-col justify-center items-center   bg-black gap-2">
                linkedin.com/in/biefung/
              </div>
            </div>
            <div className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row">
              <div className="w-70 h-full  text-white text-5xl font-secondary bg-black flex justify-center items-center flex-col gap-2">
                github.com/Bfungcode

              </div>
              <div className="w-30 h-full text-black font-secondary text-5xl flex flex-row justify-center items-center border-black border-l-2">
                Github
              </div>
            </div>
            <div className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row">
              <div className="w-30 h-full  border-black border-r-2 text-black text-5xl font-secondary  flex justify-center items-center">
                X / Twitter

              </div>
              <div className="w-70 h-full text-white font-secondary text-5xl flex flex-col justify-center items-center bg-black gap-2">
                twitter.com/bei_fg

              </div>
            </div>
          </div>
          <div className="w-full h-4"></div>
        </div>
      </div >
    </div >
  )
}


