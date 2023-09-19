"use client"
import { GmailIcon, GitIcon, LinkedInIcon, Xicon, DotsIcon, MenuIcon, ArrowDownRight, ArrowDownLeft } from "./media/svg"
import { useState } from 'react';

export default function Home() {
  const [hover1, setHover1] = useState(false);
  const [turn1, setTurn1] = useState(false);
  const handleMouseEnter = () => {
    setHover1(true);
  };

  const handleMouseLeave = () => {
    setHover1(false);
  };
  const turnPt1 = () => {
    setTurn1(!turn1)
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
              <div className="w-full font-secondary text-white text-5xl text-center items-center h-full flex justify-center pb-4 bg-black">
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
            <div className="w-full h-80 flex flex-column justify-between flex-wrap  transition-all duration-500 ease-in-out ">
              <div className="w-full h-30 flex flex-row flex-wrap">
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white   " onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={turnPt1}>
                  <div className="w-full h-full  flex flex-column flex-wrap">
                    <img src="/ef1.png" className="w-full h-full object-cover"></img>
                  </div>
                </div>
                <div className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-6">
                  <div className="relative w-full h-full">
                    <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                    <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                    <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                      <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                        Easy Features
                        <div className="text-2xl font-secondary">
                          "EasyFeatures" is a dedicated website built with React JS and designed to assist developers working with React.js. With its extensive collection of JSX templates and CSS code snippets,
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-70 bg-black">s</div>
            </div>
          ) : (
            <div className="w-full h-30 flex flex-row justify-between flex-wrap  transition-all duration-500 ease-in-out ">
              {hover1 ? (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white " onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={turnPt1} >
                  <div className="relative w-full h-full  flex flex-row flex-wrap justify-center items-center cursor-pointer">
                    <img src="/ef1.png" className="w-full h-full object-cover blur-sm"></img>
                    <div className="absolute text-4xl font-secondary text-white underline">More Detail</div>
                  </div>
                </div>
              ) : (
                <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white " onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={turnPt1}>
                  <div className="w-full h-full  flex flex-column flex-wrap">
                    <img src="/ef1.png" className="w-full h-full object-cover"></img>
                  </div>
                </div>
              )}
              <div className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-6">
                <div className="relative w-full h-full">
                  <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                  <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                  <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                    <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                      Easy Features
                      <div className="text-2xl font-secondary">
                        "EasyFeatures" is a dedicated website built with React JS and designed to assist developers working with React.js. With its extensive collection of JSX templates and CSS code snippets,
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >
          )}

          <div className="w-full h-30 flex flex-row justify-between">
            <div className="w-70 h-full  border-r-2 border-b-2 border-l-2 border-black flex flex-row flex-wrap bg-black p-6">
              <div className="relative w-full h-full">
                <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                <div className="absolute inset-0 flex flex-column items-center justify-center  h-full w-full text-4xl p-6">
                  <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                    CryptoHex
                    <div className="text-2xl font-secondary">
                      "Cryptohex" is a Cryptocurrency wallet service web application built with Vue JS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-30 h-full border-black border-b-2  border-l-2 p-4  bg-white border-r-2">
              <div className="w-10 flex justify-start items-end pl-2 pb-2"><ArrowDownLeft /></div>
              <div className="w-90"></div>
            </div>
          </div>
          <div className="w-full h-30 flex flex-row justify-between">
            <div className="w-30 h-full border-black border-b-2  border-l-2 p-4  bg-black">
              <div className="relative w-full h-full">
                <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                <div className="absolute inset-0 flex flex-column items-center justify-center  h-full w-full text-4xl p-6">
                  <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                    Cashier
                  </div>
                </div>
              </div>
            </div>
            <div className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap">
              <div className="w-90"></div>
              <div className="w-10 flex justify-end items-end pr-2 pb-2"><ArrowDownRight /></div>
            </div>
          </div>
          <div className="w-full h-30 flex flex-row justify-between">
            <div className="w-70 h-full  border-r-2 border-b-2 border-l-2 border-black p-0 flex flex-row flex-wrap">
              <div className="w-10 flex justify-start items-end pl-2 pb-2"><ArrowDownLeft /></div>
              <div className="w-90"></div>
            </div>
            <div className="w-30 h-full border-black border-b-2  border-l-2 p-4  bg-black">
              <div className="relative w-full h-full">
                <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                <div className="absolute inset-0 flex flex-column items-center justify-center  h-full w-full text-4xl p-6">
                  <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                    E-Comm
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-30 flex flex-row justify-between">
            <div className="w-30 h-full border-black border-b-2  border-l-2 p-4  bg-black">
              <div className="relative w-full h-full">
                <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                <div className="absolute inset-0 flex flex-column items-center justify-center  h-full w-full text-4xl p-6">
                  <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                    Cartal
                  </div>
                </div>
              </div>
            </div>
            <div className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap">
              <div className="w-90"></div>
              <div className="w-10 flex justify-end items-end pr-2 pb-2"><ArrowDownRight /></div>
            </div>
          </div>

          <div className="w-full h-60 flex flex-col flex-wrap ">
            <div className="w-full h-20  border-black border-b-2 flex flex-row justify-between">
              <div className="w-70 h-full  border-black border-l-2 border-r-2">
                <img src="/Rectangle10.png" className="w-full h-full object-cover" />
              </div>
              <div className="w-30 h-full border-black border-r-2  p-0 flex  ">
                <div className="w-full font-secondary text-white text-5xl text-center items-center h-full flex justify-center pb-4 bg-black ">
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


