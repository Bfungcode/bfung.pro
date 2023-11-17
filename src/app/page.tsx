"use client";
import {
  GmailIcon,
  GitIcon,
  LinkedInIcon,
  Xicon,
  DotsIcon,
  MenuIcon,
  ArrowDownRight,
  ArrowDownLeft,
  FileIconBlack,
  FileIconWhite,
  JavaScript,
  HtmlIcon,
  CssIcon,
  ReactIcon,
  VueJS,
  TypeScriptIcon,
  NextJs,
  TailWind,
  FigmaIcon,
  JavaScriptColor,
  TypeScriptColor,
  NodeIcon,
  NodeColor,
  FigmaColor,
  HtmlColor,
  CssColor,
  ReactColor,
  VueColor,
  TailwindColor,
} from "./media/svg";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { baseUrl1, baseUrl2, baseUrl3, baseUrl4, baseUrl5 } from "./config.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Html } from "next/document";
import Link from "next/link";

const SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Mousewheel } from "swiper/modules";

export default function Home() {
  const [hover1, setHover1] = useState(false);
  const [turn1, setTurn1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [turn2, setTurn2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [turn3, setTurn3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [turn4, setTurn4] = useState(false);
  const [hoverPage, setHoverPage] = useState(false);
  const [box0, setBox0] = useState(false);
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
  const [box6, setBox6] = useState(false);
  const [box7, setBox7] = useState(false);
  const [box8, setBox8] = useState(false);
  const [box9, setBox9] = useState(false);
  const [box10, setBox10] = useState(false);
  const [contact1, setContact1] = useState(false);
  const [contact2, setContact2] = useState(false);
  const [contact3, setContact3] = useState(false);
  const [contact4, setContact4] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const turnPt = (setTurn: any, turn: any) => {
    setTurn(!turn);
  };
  const handleMouseEnter = (setBox: any) => () => {
    setBox(true);
  };

  const handleMouseLeave = (setBox: any) => () => {
    setBox(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/bfresume.pdf";
    link.download = "bie fung resume.pdf";
    link.click();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full h-screen">
      {isMobile ? (
        <>
          <div className="flex flex-col flex-wrap  w-full h-full pt-5 pl-5 pr-5">
            <div className="w-full h-full border-2 border-black p-0 m-0 ">
              <div className="w-full h-10 border-b-2 border-black flex flex-row justify-between items-center p-0 m-0">
                <div className="font-secondary max-sm:text-sm flex text-center items-center flex-row justify-around w-[80%] h-full font-medium  max-lg:text-4xl">
                  <div>Bie Fung</div>
                  <div>-</div>
                  <div>Front End Developer</div>
                </div>
                <div className="w-20 h-full border-l-2 border-black p-2 m-0 flex flex-col items-center justify-center  transition-all ease-linear duration-1000">
                  <div className="font-primary max-sm:text-xs font-bold text-black text-center max-lg:text-xl">
                    Resume
                  </div>
                  <div className="cursor-pointer" onClick={handleDownload}>
                    <FileIconBlack />
                  </div>
                </div>
              </div>
              <div className="w-full h-80 flex flex-row">
                <div className="w-full h-full  border-black flex flex-col">
                  <div className="p-4 w-full h-full flex  flex-col text-black font-primary font-semibold justify-center items-center">
                    <div className="font-primary max-sm:text-xl font-bold max-lg:text-4xl">
                      Bie Fung
                    </div>
                    <div className="font-primary max-sm:text-sm font-bold text-gray-500 max-lg:text-xlxl">
                      Profile
                    </div>
                    <img
                      src="/bfung.png"
                      className="max-sm:w-80 max-lg:w-40 max-sm:h-50 object-cover flex max-lg:h-60"
                    />
                    <div className="font-primary max-sm:text-sm font-semibold mt-2 leading-6 text-start p-3 max-lg:text-lg">
                      <div>Hello, i'm Bie Fung.</div>
                      you can call me Abe or Bei. I’m a Front End Developer and
                      Web Designer. Specializing in JavaScript. I'm a self
                      taught Software Engineer with passion and dreams
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-10 border-t-2 border-black  flex flex-row justify-between">
                <div className="w-full h-full p-0 flex text-white  bg-black ">
                  <div className="w-full font-secondary text-5xl text-center items-center h-full flex justify-center pb-4 border-white border-2">
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col flex-wrap pl-5 pr-5 ">
            <div className="w-full h-full">
              {turn1 ? (
                <div className="w-full h-full flex flex-col justify-between flex-wrap  transition-all duration-1000 ease-in-out border-black border-l-2 border-r-2 border-b-2  text-black">
                  <div className="w-full h-full max-sm:h-full max-lg:h-80 flex flex-column flex-wrap p-6">
                    <div className="w-full h-70 max-sm:h-[65%] max-lg:h-[80%] flex flex-column flex-wrap">
                      <div className="h-[10%] w-full text-4xl font-primary font-bold text-center flex justify-center items-center">
                        Binar Car Rental
                      </div>
                      <div className="max-sm:h-[90%] max-lg:h-60 w-full flex flex-col flex-wrap">
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Year Accomplished
                          <div className="text-base text-gray-500">2022</div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Role/Position
                          <div className="text-base text-gray-500">
                            Project Leader
                          </div>
                          <div className="text-base text-gray-500">
                            Front End Engineer
                          </div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Publication Link
                          <a
                            href="https://cartal.netlify.app"
                            target="_blank"
                            className="cursor-pointer"
                          >
                            <div className="text-base text-gray-500">
                              cartal.netlify.app
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Repository
                          <a
                            href="https://github.com/Bfungcode/BinarCarRents_Main"
                            target="_blank"
                            className="cursor-pointer break-words"
                          >
                            <div className="text-base text-gray-500">
                              github.com/Bfungcode/BinarCarRents_Main
                            </div>
                          </a>
                        </div>

                        <div className="w-full text-xl font-primary font-bold ">
                          Stacks
                          <div className="text-base text-gray-500">
                            JavaScript
                          </div>
                          <div className="text-base text-gray-500">
                            React JS
                          </div>
                          <div className="text-base text-gray-500">
                            React Redux
                          </div>
                          <div className="text-base text-gray-500">CSS</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            stroke-width="1"
                            onClick={() => turnPt(setTurn1, turn1)}
                            stroke-linecap="square"
                            stroke-linejoin="bevel"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-sm:h-[25%] max-lg:h-[20%] flex flex-col justify-center items-center">
                      <div className="w-90 h-full ml-3">
                        <Slider {...SliderSettings}>
                          <div>
                            <img src="/pt5/ft1.png" />
                          </div>
                          <div>
                            <img src="/pt5/ft2.png" />
                          </div>
                          <div>
                            <img src="/pt5/ft3.png" />
                          </div>
                          <div>
                            <img src="/pt5/ft4.png" />
                          </div>
                          <div>
                            <img src="/pt5/ft5.png" />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-20 flex flex-row justify-between flex-wrap ease-in-out duration-1000">
                  <div
                    className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-white p-6 cursor-pointer transition-all duration-1000 ease-in-out"
                    onMouseMove={handleMouseEnter(setHover1)}
                    onMouseLeave={handleMouseLeave(setHover1)}
                    onClick={() => turnPt(setTurn1, turn1)}
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-40 left-0 top-0"></div>
                      <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                      <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full p-2">
                        <div className="w-full  font-secondary text-black text-2xl bg-white text-center">
                          <div className="text-base font-secondary max-sm:text-xl max-lg:text-3xl ">
                            Cartal
                          </div>
                          <div className="max-sm:text-xs font-secondary max-lg:text-xl">
                            a Car Rental Web Application for the customer side
                            to do transaction, built by using React JS.
                            (Bootcamp Final Project)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {turn2 ? (
                <div className="w-full h-full flex flex-col justify-between flex-wrap  transition-all duration-1000 ease-in-out border-black border-l-2 border-r-2 border-b-2 bg-black text-white">
                  <div className="w-full h-full max-sm:h-full max-lg:h-80 flex flex-col flex-wrap p-6">
                    <div className="w-full  max-sm:h-70 max-lg:h-[80%] flex flex-column flex-wrap">
                      <div className="h-[10%] w-full text-4xl font-primary font-bold text-center flex justify-center items-center">
                        CryptoHex
                      </div>
                      <div className="max-sm:h-[95%] max-lg:h-60 w-full flex flex-col flex-wrap">
                        <div className="w-full text-xl font-primary font-bold">
                          Year Accomplished
                          <div className="text-base text-gray-300">2023</div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold mb-3">
                          Role/Position
                          <div className="text-base text-gray-300">
                            Front End Developer
                          </div>
                          <div className="text-base text-gray-300">
                            UI/UX Designer
                          </div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Publication Link
                          <a
                            href="https://cryptohex.netlify.app"
                            target="_blank"
                          >
                            <div className="text-base text-gray-300 mb-1 break-words">
                              cryptohex.netlify.app
                            </div>
                          </a>
                          <a
                            href="https://figma.com/file/W2rEOrg7oMiEmjiK9gMrsS/CryptoHex?type=design&node-id=0%3A1&t=nLIRzq0rHhINvH3k-1"
                            target="_blank"
                          >
                            <div className="text-xs break-words text-gray-300">
                              figma.com/file/W2rEOrg7oMiEmjiK9gMrsS/CryptoHex?type=design&node-id=0%3A1&t=nLIRzq0rHhINvH3k-1
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Repository
                          <a
                            href="https://github.com/Bfungcode/CryptoHex"
                            target="_blank"
                          >
                            <div className="text-base text-gray-300">
                              github.com/Bfungcode/CryptoHex
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Stacks
                          <div className="text-base text-gray-300">
                            JavaScript
                          </div>
                          <div className="text-base text-gray-300">Vue JS</div>
                          <div className="text-base text-gray-300">CSS</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="1"
                            onClick={() => turnPt(setTurn2, turn2)}
                            stroke-linecap="square"
                            stroke-linejoin="bevel"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-sm:h-[25%] max-lg:h-[20%] flex flex-col justify-center items-center">
                      <div className="w-90 h-full ml-3">
                        <Slider {...SliderSettings}>
                          <div>
                            <img src="/pt2/ft1.png" />
                          </div>
                          <div>
                            <img src="/pt2/ft2.png" />
                          </div>
                          <div>
                            <img src="/pt2/ft3.png" />
                          </div>
                          <div>
                            <img src="/pt2/ft4.png" />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-20 flex flex-row justify-between flex-wrap  transition-all duration-1000 ease-in-out">
                  <div
                    className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap cursor-pointer bg-black p-6 transition-all duration-1000 ease-in-out"
                    onMouseMove={handleMouseEnter(setHover2)}
                    onMouseLeave={handleMouseLeave(setHover2)}
                    onClick={() => {
                      turnPt(setTurn2, turn2);
                    }}
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                      <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                      <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-2">
                        <div className="w-full font-secondary text-white max-sm:text-xl max-lg:text-3xl   bg-black text-center">
                          CryptoHex
                          <div className=" max-sm:text-xs max-lg:text-xl font-secondary">
                            a Cryptocurrency wallet service web application
                            built with Vue JS
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {turn3 ? (
                <div className="w-full h-full flex flex-col justify-between flex-wrap  transition-all duration-1000 ease-in-out border-black border-l-2 border-r-2 border-b-2  text-black">
                  <div className="w-full h-full max-sm:h-full max-lg:h-80 flex flex-column flex-wrap p-6">
                    <div className="w-full h-70 max-sm:h-55 max-lg:h-[60%] flex flex-column flex-wrap">
                      <div className="h-[10%] w-full text-4xl font-primary font-bold text-center flex justify-center items-center">
                        Cashier
                      </div>
                      <div className="max-sm:h-[90%] max=lg:h-60 w-full flex flex-col flex-wrap">
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Year Accomplished
                          <div className="text-base text-gray-500">2023</div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Role/Position
                          <div className="text-base text-gray-500">
                            Front End Developer
                          </div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Publication Link
                          <a
                            href="https://cashier-webapp.vercel.app"
                            target="_blank"
                          >
                            <div className="text-base text-gray-500">
                              cashier-webapp.vercel.app
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Repository
                          <a
                            href="https://github.com/Bfungcode/Cashier_WebApp"
                            target="_blank"
                          >
                            <div className="text-base text-gray-500 break-words">
                              github.com/Bfungcode/Cashier_WebApp
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Stacks
                          <div className="text-base text-gray-500">
                            JavaScript
                          </div>
                          <div className="text-base text-gray-500">
                            React JS
                          </div>
                          <div className="text-base text-gray-500">
                            Tailwind CSS
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            stroke-width="1"
                            onClick={() => turnPt(setTurn3, turn3)}
                            stroke-linecap="square"
                            stroke-linejoin="bevel"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-sm:h-[25%] max-lg:h-[20%] flex flex-col justify-center items-center">
                      <div className="w-90 h-full ml-3">
                        <Slider {...SliderSettings}>
                          <div>
                            <img src="/pt3/ft1.png" />
                          </div>
                          <div>
                            <img src="/pt3/ft2.png" />
                          </div>
                          <div>
                            <img src="/pt3/ft3.png" />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-20 flex flex-row justify-between flex-wrap transition-all duration-1000 ease-in-out">
                  <div
                    className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-white p-6 cursor-pointer"
                    onMouseMove={handleMouseEnter(setHover3)}
                    onMouseLeave={handleMouseLeave(setHover3)}
                    onClick={() => turnPt(setTurn3, turn3)}
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 left-0 top-0"></div>
                      <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                      <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-2">
                        <div className="w-full font-secondary text-black max-sm:text-xl max-lg:text-3xl bg-white text-center">
                          Cashier
                          <div className="max-sm:text-xs max-lg:text-xl font-secondary">
                            a User-friendly portfolio project with an
                            interactive food menu webpage that allows you to
                            assemble your order on the right side while keeping
                            track of your total payment.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {turn4 ? (
                <div className="w-full h-full flex flex-col justify-between flex-wrap  transition-all duration-1000 ease-in-out border-black border-l-2 border-r-2 border-b-2 bg-black text-white">
                  <div className="w-full h-full max-sm:h-full max-lg:h-80 flex flex-column flex-wrap p-6">
                    <div className="w-full h-70 max-sm:h-60 max-lg:h-[60%] flex flex-column flex-wrap">
                      <div className="h-[10%] w-full text-4xl font-primary font-bold text-center flex justify-center items-center">
                        Easy Features
                      </div>
                      <div className="max-sm:h-[90%] max=lg:h-60 w-full flex flex-col flex-wrap">
                        <div className="w-full text-xl font-primary font-bold ">
                          Year Accomplished
                          <div className="text-base text-gray-300">2022</div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold">
                          Role/Position
                          <div className="text-base text-gray-300">
                            Front End Developer
                          </div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold">
                          Publication Link
                          <a
                            href="https://easyfeatures.netlify.app"
                            target="_blank"
                          >
                            <div className="text-base text-gray-300">
                              easyfeatures.netlify.app
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Repository
                          <a
                            href="https://github.com/Bfungcode/EasyFeatures"
                            target="_blank"
                          >
                            <div className="text-base text-gray-300">
                              github.com/Bfungcode/EasyFeatures
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Stacks
                          <div className="text-base text-gray-300">
                            JavaScript
                          </div>
                          <div className="text-base text-gray-300">
                            React JS
                          </div>
                          <div className="text-base text-gray-300">CSS</div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="1"
                            onClick={() => turnPt(setTurn4, turn4)}
                            stroke-linecap="square"
                            stroke-linejoin="bevel"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-sm:h-[25%] max-lg:h-[20%] flex flex-col justify-center items-center">
                      <div className="w-90 h-full ml-3">
                        <Slider {...SliderSettings}>
                          <div>
                            <img src="/pt1/ft1.png" />
                          </div>
                          <div>
                            <img src="/pt1/ft2.png" />
                          </div>
                          <div>
                            <img src="/pt1/ft3.png" />
                          </div>
                          <div>
                            <img src="/pt1/ft4.png" />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-20 flex flex-row justify-between flex-wrap  transition-all duration-1000 ease-in-out">
                  <div
                    className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-6 cursor-pointer "
                    onMouseMove={handleMouseEnter(setHover4)}
                    onMouseLeave={handleMouseLeave(setHover4)}
                    onClick={() => turnPt(setTurn4, turn4)}
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                      <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                      <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-2">
                        <div className="w-full font-secondary text-white max-sm:text-xl max-lg:text-3xl   text-center">
                          Easy Features
                          <div className="max-sm:text-xs max-lg:text-xl  font-secondary">
                            a Dedicated website built with React JS and designed
                            to assist developers working with React.js. With its
                            extensive collection of JSX templates and CSS code
                            snippets,
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="w-full h-40 flex flex-column flex-wrap max-sm:h-40 max-lg:h-[55%]">
                <div className="w-full max-sm:h-[25%] max-lg:h-20">
                  <div className="w-full h-full  border-black border-b-2 flex flex-row justify-between">
                    <div className="w-[25%] h-full  border-black border-l-2 border-r-2">
                      <img
                        src="/Rectangle10.png"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-50 h-full   p-0 flex  ">
                      <div className="w-full font-secondary text-black text-3xl text-center items-center h-full flex justify-center pb-4 bg-white border-white border-2">
                        Designs
                      </div>
                    </div>
                    <div className="w-[25%] h-full  border-black border-l-2 border-r-2">
                      <img
                        src="/Rectangle10.png"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full max-sm:h-[75%] max-lg:h-[80%] border-black border-r-2 border-l-2 p-2">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="w-full h-full"
                  >
                    <SwiperSlide>
                      <img src="/dp/dp1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/dp/dp2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/dp/dp3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/dp/dp4.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/dp/dp5.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/dp/dp6.png" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="w-full h-60 flex flex-col flex-wrap ">
                <div className="w-full h-20  border-black border-b-2 border-l-2 flex flex-row justify-between">
                  <div className="w-full h-full border-black border-r-2  p-0 flex  ">
                    <div className="w-full font-secondary text-white text-5xl text-center items-center h-full flex justify-center pb-4 bg-black border-white border-2">
                      Contacts
                    </div>
                  </div>
                </div>
                <div className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row">
                  <div className="w-full h-full text-white text-5xl font-secondary bg-white flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                    <div className="w-40 flex flex-row flex-wrap justify-start">
                      <div className="w-full max-sm:text-base max-lg:text-3xl font-secondary flex justify-center items-center text-center text-black">
                        Mail me{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          className="ml-2"
                          height="35"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <path d="M5 12h13M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-60 flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000 max-lg:text-3xl max-sm:text-lg break-words">
                      <a
                        href="mailto:bfung0011@gmail.com"
                        target="_blank"
                        className="text-black p-2"
                      >
                        bfung0011@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row">
                  <div className="w-full h-fulltext-white text-5xl font-secondary bg-white flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                    <div className="w-60 flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000 max-lg:text-3xl max-sm:text-lg break-words">
                      <a
                        href="https://linkedin.com/in/biefung/"
                        target="_blank"
                        className="text-black p-2"
                      >
                        linkedin.com/in/biefung
                      </a>
                    </div>
                    <div className="w-40 flex flex-row flex-wrap justify-evenly items-center">
                      <div className="w-full max-sm:text-base max-lg:text-3xl font-secondary mr-2 text-black  text-center flex justify-start items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                        See my profile
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row">
                  <div className="w-full h-fulltext-white text-5xl font-secondary bg-white flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                    <div className="w-40 flex flex-row flex-wrap justify-end ">
                      <div className=" font-secondary text-black flex items-center text-center justify-center max-sm:text-base max-lg:text-3xl">
                        See my code
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <path d="M5 12h13M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-60 flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000  max-lg:text-3xl max-sm:text-lg break-words">
                      <a
                        href="https://github.com/Bfungcode"
                        target="_blank"
                        className="text-black p-2"
                      >
                        github.com/Bfungcode
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row">
                  <div className="w-full h-fulltext-white text-5xl font-secondary bg-white flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                    <div className="w-60 flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000 max-lg:text-3xl max-sm:text-lg break-word">
                      <a
                        href="https://twitter.com/bei_fg"
                        target="_blank"
                        className="text-black p-2"
                      >
                        twitter.com/bei_fg
                      </a>
                    </div>
                    <div className="w-40 flex flex-row flex-wrap justify-start gap-4">
                      <div className=" font-secondary text-black  max-sm:text-base max-lg:text-3xl flex justify-center text-center items-center mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <path d="M19 12H6M12 5l-7 7 7 7" />
                        </svg>
                        See my tweets{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-4"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col flex-wrap  w-full h-full pt-5 pl-5 pr-5">
            {hoverPage ? (
              <div className="w-full h-full border-2 border-black p-0 m-0 ">
                <div className="w-full h-12 border-b-2 border-black flex flex-row justify-between items-center p-0 m-0">
                  <div className="w-[13%] h-full border-black border-r-2 p-0 m-0">
                    <img
                      src="/Rectangle4.png"
                      className="h-full w-full relative right object-none"
                    ></img>
                  </div>
                  <div className="font-secondary text-7xl flex text-center items-center flex-row justify-around w-[82%] h-full font-medium bg-black text-white  transition-all ease-linear duration-1000 pb-3">
                    <div>Bie Fung</div>
                    <div>-</div>
                    <div>Web Designer</div>
                  </div>
                  <div className="w-5 h-full p-2 m-0 flex flex-col items-center bg-black justify-center  transition-colors ease-linear duration-1000">
                    <div className="mb-2 font-primary text-sm font-bold text-white text-center">
                      Resume
                    </div>
                    <div className="mb-2 cursor-pointer">
                      <FileIconWhite />
                    </div>
                  </div>
                </div>
                <div className="w-full h-76 flex flex-row">
                  <div className="w-13 h-full border-r-2 border-black flex flex-col">
                    <div className="p-4 w-full h-full flex  flex-col justify-end transition-all ease-linear duration-1000 text-white font-primary font-semibold bg-black">
                      <div className="font-primary text-xl font-bold ">
                        Bie Fung
                      </div>
                      <div className="font-primary text-sm font-bold text-gray-500">
                        Profile
                      </div>
                      <img
                        src="/bfungColor.png"
                        className="w-80 h-30 object-cover"
                      />
                      <div className="font-primary text-sm font-semibold mt-2 leading-6">
                        <div>Hello, i'm Bie Fung.</div>
                        you can call me Abe or Bei.
                        <div>I’m a Front End Developer</div>
                        and Web Designer. Specializing in JavaScript. I'm a self
                        taught Software Engineer with passion and dreams
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-87 h-full pl-8 pr-8 flex flex-col justify-center items-center"
                    onMouseMove={handleMouseEnter(setHoverPage)}
                    onMouseLeave={handleMouseLeave(setHoverPage)}
                  ></div>
                </div>
                <div className="w-full h-12 border-t-2 border-black  flex flex-row justify-between">
                  <div className="w-full h-full p-0 flex text-black transition-all duration-1000 ease-linear bg-white ">
                    <div className="w-full font-secondary text-5xl text-center items-center h-full flex justify-center pb-4 border-white border-2">
                      Projects
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full border-2 border-black p-0 m-0 ">
                <div className="w-full h-12 border-b-2 border-black flex flex-row justify-between items-center p-0 m-0">
                  <div className="w-[13%] h-full border-black border-r-2 p-0 m-0">
                    <img
                      src="/Rectangle4.png"
                      className="h-full w-full relative right object-none"
                    ></img>
                  </div>
                  <div className="font-secondary text-7xl flex text-center items-center flex-row justify-around w-[82%] h-full font-medium bg-[rgb(241,239,233)] transition-all ease-linear duration-1000 pb-3 ">
                    <div>Bie Fung</div>
                    <div>-</div>
                    <div>Front End Developer</div>
                  </div>
                  <div className="w-5 h-full border-l-2 border-black p-2 m-0 flex flex-col items-center justify-center  transition-all ease-linear duration-1000">
                    <div className="mb-2 font-primary text-sm font-bold text-black text-center">
                      Resume
                    </div>
                    <div
                      className="mb-2 cursor-pointer"
                      onClick={handleDownload}
                    >
                      <FileIconBlack />
                    </div>
                  </div>
                </div>
                <div className="w-full h-76 flex flex-row">
                  <div className="w-13 h-full border-r-2 border-black flex flex-col">
                    <div className="p-4 w-full h-full flex  flex-col justify-end transition-all ease-linear duration-1000 text-black font-primary font-semibold ">
                      <div className="font-primary text-xl font-bold ">
                        Bie Fung
                      </div>
                      <div className="font-primary text-sm font-bold text-gray-500">
                        Profile
                      </div>
                      <img
                        src="/bfung.png"
                        className="w-80 h-30 object-cover"
                      />
                      <div className="font-primary text-sm font-semibold mt-2 leading-6">
                        <div>Hello, i'm Bie Fung.</div>
                        you can call me Abe or Bei.
                        <div>I’m a Front End Developer</div>
                        and Web Designer. Specializing in JavaScript. I'm a self
                        taught Software Engineer with passion and dreams
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-87 h-full pl-8 pr-8 flex flex-col justify-center items-center "
                    onMouseMove={handleMouseEnter(setHoverPage)}
                    onMouseLeave={handleMouseLeave(setHoverPage)}
                  ></div>
                </div>
                <div className="w-full h-12 border-t-2 border-black  flex flex-row justify-between">
                  <div className="w-30 h-full p-0 flex text-white transition-all duration-1000 ease-linear bg-black ">
                    <div className="w-full font-secondary text-5xl text-center items-center h-full flex justify-center pb-4 border-white border-2">
                      Projects
                    </div>
                  </div>
                  <div className="w-70 h-full object-fill border-black border-l-2">
                    <img src="/Rectangle10.png" className="w-full h-full" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full h-full flex flex-col flex-wrap pl-5 pr-5 ">
            <div className="w-full h-full">
              {turn1 ? (
                <div className="w-full h-full flex flex-row justify-between flex-wrap  transition-all duration-1000 linear border-black border-l-2 border-r-2 border-b-2 ">
                  <div className="w-20 h-full flex flex-column flex-wrap p-6">
                    <div className="w-full h-60 flex flex-column flex-wrap">
                      <div className="h-[15%] w-full text-4xl font-primary font-bold text-black ">
                        Binar Car Rental
                      </div>
                      <div className="h-55 w-full flex flex-column flex-wrap gap-14">
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Year Accomplished
                          <div className="text-base text-gray-500">2022</div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Role/Position
                          <div className="text-base text-gray-500">
                            Project Leader
                          </div>
                          <div className="text-base text-gray-500">
                            Front End Engineer
                          </div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Publication Link
                          <a
                            href="https://cartal.netlify.app"
                            target="_blank"
                            className="cursor-pointer"
                          >
                            <div className="text-base text-gray-500">
                              cartal.netlify.app
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Repository
                          <a
                            href="https://github.com/Bfungcode/BinarCarRents_Main"
                            target="_blank"
                            className="cursor-pointer"
                          >
                            <div className="text-base text-gray-500">
                              github.com/Bfungcode/BinarCarRents_Main
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Stacks
                          <div className="text-base text-gray-500">
                            JavaScript
                          </div>
                          <div className="text-base text-gray-500">
                            React JS
                          </div>
                          <div className="text-base text-gray-500">
                            React Redux
                          </div>
                          <div className="text-base text-gray-500">CSS</div>
                        </div>
                        <div
                          className="flex flex-row flex-wrap justify-end gap-2 items-center cursor-pointer mt-4"
                          onClick={() => turnPt(setTurn1, turn1)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="52"
                            height="52"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            stroke-width="1"
                            stroke-linecap="square"
                            stroke-linejoin="bevel"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-80 h-full flex-column flex-wrap p-6">
                    <div className="w-full h-5 text-xl font-primary font-bold text-black pt-2">
                      Project Description
                    </div>
                    <div className="w-full h-[95%] ">
                      <div className="w-full h-30 flex flex-row flex-wrap">
                        <div className="text-base text-gray-500 w-65">
                          During bootcamp, for the final project we were tasked
                          to develop a web application with React JS Framework
                          that facilitated transactions between customers and
                          suppliers in car rental industry. We were divided into
                          two teams of 5-member. I offered myself and assigned
                          for the role of the Project Leader for the team. As
                          the youngest member, it was important to establish
                          mutual respect and seen as an equal colleague. To
                          address this, i approached each member personally to
                          share my thoughts and my desire to them. My
                          responsibilities as the project leader is ensuring
                          efficient task allocation and collaboration within the
                          team. For that, i implemented Agile and Scrum method
                          for the development process and provided a flow chart
                          for allocating the task to each member. I divided my
                          team into two group, one for handling the customer
                          side of website and one for the admin side to update
                          the data(CRUD). I'm also in charge of implementing
                          Redux middleware for managing the API data and
                          responsible for the website's responsiveness and
                          slicing the homepage based by the design provided by
                          the UI/UX team.{" "}
                        </div>
                        <div className="text-base text-gray-500 w-[34%]">
                          Throughout the project, I actively led the team,
                          ensuring that everyone understood their roles and
                          responsibilities. I scheduled a regular team meetings
                          for catching up and checking for our progress and
                          discussing any challenges or problem we have and
                          solving it together at the moment. I'm in charge for
                          both group the customer side and the admin side where
                          any change would be approved through me by using
                          Github pull request.
                          <div className="text-base text-gray-500 font-bold">
                            We successfully completed the project on time and
                            passed all the requirements. Our exceptional
                            performance was recognized, as we achieved an
                            outstanding score of 97 out of 100.
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-70 flex flex-row flex-wrap bg-gray-200 p-4 justify-center transition-all duration-1000 ease-in-out">
                        <div className="h-full w-[30%] text-center">
                          <div className="text-lg text-black font-bold h-[5%]">
                            Homepage
                          </div>
                          <div className="w-full p-2 h-[97%] flex flex-column gap-2 flex-wrap ">
                            <img
                              src="/ct1.png"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                        <div className="h-full w-[35%]  p-2 flex flex-column flex-wrap gap-1">
                          <div className="w-full h-full flex flex-column flex-wrap mr-8">
                            <div className="w-full h-[45%] flex flex-column flex-wrap justify-center text-center">
                              <div className="text-lg text-black font-bold h-[12%] w-full">
                                Car Page
                              </div>
                              <img
                                src="/ct2.png"
                                className="w-full h-full object-fill"
                              />
                            </div>
                            <div className="w-full h-[45%] flex flex-column flex-wrap justify-center">
                              <div className="text-lg text-black font-bold h-[15%] flex flex-column flex-wrap">
                                Payment Page
                              </div>
                              <img
                                src="/ct4.png"
                                className="w-full h-full object-fill"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="h-full w-[35%] p-2 flex flex-column flex-wrap gap-2">
                          <div className="w-full h-full flex flex-column flex-wrap">
                            <div className="w-full h-[45%] flex flex-column flex-wrap justify-center">
                              <div className="text-lg text-black font-bold h-[12%]">
                                Admin Dashboard
                              </div>
                              <img
                                src="/ct3.png"
                                className="w-full h-full object-fill"
                              />
                            </div>
                            <div className="w-full h-[45%] flex flex-column flex-wrap justify-center">
                              <div className="text-lg text-black font-bold h-[15%] flex flex-column flex-wrap">
                                Cars Update
                              </div>
                              <img
                                src="/ct5.png"
                                className="w-full h-full object-fill"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-30 flex flex-row justify-between flex-wrap ease-in-out duration-1000 ">
                  {hover1 ? (
                    <>
                      <div
                        className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-white p-6 cursor-pointer transition-all duration-1000 ease-in-out "
                        onMouseMove={handleMouseEnter(setHover1)}
                        onMouseLeave={handleMouseLeave(setHover1)}
                        onClick={() => turnPt(setTurn1, turn1)}
                      >
                        <div className="relative w-full h-full">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 left-0 top-0"></div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                          <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                            <div className="w-full font-secondary text-black text-6xl p-6  bg-white text-center">
                              Cartal
                              <div className="text-2xl font-secondary">
                                a Car Rental Web Application for the customer
                                side to do transaction, built by using React JS.
                                (Bootcamp Final Project)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white">
                        <div className="w-full h-full  flex flex-column flex-wrap">
                          <img
                            src="/pt5/ft1.png"
                            className="w-full h-full object-cover"
                          ></img>
                        </div>
                      </div>
                      <div
                        className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-white p-6 cursor-pointer transition-all duration-1000 ease-in-out"
                        onMouseMove={handleMouseEnter(setHover1)}
                        onMouseLeave={handleMouseLeave(setHover1)}
                        onClick={() => turnPt(setTurn1, turn1)}
                      >
                        <div className="relative w-full h-full">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 left-0 top-0"></div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                          <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                            <div className="w-full font-secondary text-black text-6xl p-6  bg-white text-center">
                              Cartal
                              <div className="text-2xl font-secondary">
                                a Car Rental Web Application for the customer
                                side to do transaction, built by using React JS.
                                (Bootcamp Final Project)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
              {turn2 ? (
                <div className="w-full h-full flex flex-row justify-between flex-wrap  transition-all duration-1000 ease-in-out border-black border-l-2 border-r-2 border-b-2 bg-black text-white">
                  <div className="w-20 h-full flex flex-column flex-wrap p-6">
                    <div className="w-full h-60 flex flex-column flex-wrap">
                      <div className="h-[15%] w-full text-4xl font-primary font-bold">
                        CryptoHex
                      </div>
                      <div className="h-55 w-full flex flex-column flex-wrap gap-14">
                        <div className="w-full text-xl font-primary font-bold">
                          Year Accomplished
                          <div className="text-base text-gray-300">2023</div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Role/Position
                          <div className="text-base text-gray-300">
                            Front End Developer
                          </div>
                          <div className="text-base text-gray-300">
                            UI/UX Designer
                          </div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Publication Link
                          <a
                            href="https://cryptohex.netlify.app"
                            target="_blank"
                          >
                            <div className="text-base text-gray-300 mb-1">
                              cryptohex.netlify.app
                            </div>
                          </a>
                          <a
                            href="https://figma.com/file/W2rEOrg7oMiEmjiK9gMrsS/CryptoHex?type=design&node-id=0%3A1&t=nLIRzq0rHhINvH3k-1"
                            target="_blank"
                          >
                            <div className="text-xs text-gray-300">
                              figma.com/file/W2rEOrg7oMiEmjiK9gMrsS/CryptoHex?type=design&node-id=0%3A1&t=nLIRzq0rHhINvH3k-1
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Repository
                          <a
                            href="https://github.com/Bfungcode/CryptoHex"
                            target="_blank"
                          >
                            <div className="text-base text-gray-300">
                              github.com/Bfungcode/CryptoHex
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Stacks
                          <div className="text-base text-gray-300">
                            JavaScript
                          </div>
                          <div className="text-base text-gray-300">Vue JS</div>
                          <div className="text-base text-gray-300">CSS</div>
                        </div>
                        <div
                          className="flex flex-row flex-wrap justify-end gap-2 items-center cursor-pointer mt-4"
                          onClick={() => turnPt(setTurn2, turn2)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="52"
                            height="52"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="1"
                            stroke-linecap="square"
                            stroke-linejoin="bevel"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-80 h-full flex-column flex-wrap p-6">
                    <div className="w-full h-5 text-xl font-primary font-bold pt-2">
                      Project Description
                    </div>
                    <div className="w-full h-[95%] ">
                      <div className="w-full h-30 flex flex-row flex-wrap">
                        <div className="text-lg text-gray-200 w-[35%]">
                          Applied for a job in Front End Developer role that has
                          5 steps recruitment process. The client has two cases,
                          the first one is to create a web design using Figma by
                          the given description by the client. The second case
                          is connected with the first case which is to make a
                          website based on the design i made in the first case.
                        </div>
                        <div className="text-lg text-gray-200 w-[65%]">
                          As the first case were given, that time i never use
                          Figma before or do any web design before. So i proceed
                          to negotiate a 3 days deals to learn Web Design and
                          Figma. By my Front End Engineer experience i
                          confidently began the second case, i were given the
                          acceptance criteria which have an option to choose the
                          framework to use between Vue JS Svelte JS, Next JS and
                          React JS. with a condition framework other than React
                          JS will be given adding points, so i decided to go for
                          framework beside React JS although it's where i most
                          experienced, i switch it with Vue JS which by the
                          previous internship i learned by only one month.
                          <div className="text-lg text-gray-100 font-bold">
                            Gladfully i proceed through the fifth step and for
                            the final step is doing interview with the User and
                            HR as final interview. Unfortunately after the final
                            step i were rejected as it said i'm not fit with
                            their company culture.
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-70 flex flex-row flex-wrap p-2 justify-start transition-all duration-1000 ease-in-out">
                        <div className="h-full w-[25%] p-2 text-center">
                          <div className="text-lg text-white font-bold h-[5%]">
                            Homepage
                          </div>
                          <img
                            src="/ch1.png"
                            className="w-full object-contain h-[95%]"
                          />
                        </div>
                        <div className="w-[25%] h-full p-2 text-center">
                          <div className="text-lg text-white font-bold h-[5%]">
                            Homepage 2
                          </div>
                          <img
                            src="/ch2.png"
                            className="w-full object-contain h-[95%]"
                          />
                        </div>
                        <div className="w-[35%] h-80 p-2 flex flex-column flex-wrap">
                          <div className="w-full h-45 flex flex-column flex-wrap justify-center">
                            <div className="text-lg text-white font-bold h-[10%]">
                              Login Page
                            </div>
                            <img
                              src="/ch3.png"
                              className="w-full h-[95%] object-contain"
                            />
                          </div>
                          <div className="w-full h-45 flex flex-column flex-wrap justify-center">
                            <div className="text-lg text-white font-bold h-[10%]">
                              Register Page
                            </div>
                            <img
                              src="/ch4.png"
                              className="w-full h-[95%] object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-30 flex flex-row justify-between flex-wrap  transition-all duration-1000 ease-in-out">
                  {hover2 ? (
                    <>
                      <div
                        className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-6 cursor-pointer transition-all duration-1000 ease-in-out"
                        onMouseMove={handleMouseEnter(setHover2)}
                        onMouseLeave={handleMouseLeave(setHover2)}
                        onClick={() => turnPt(setTurn2, turn2)}
                      >
                        <div className="relative w-full h-full">
                          <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                          <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                          <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                            <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                              CryptoHex
                              <div className="text-2xl font-secondary">
                                a Cryptocurrency wallet service web application
                                built with Vue JS
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap cursor-pointer bg-black p-6 transition-all duration-1000 ease-in-out"
                        onMouseMove={handleMouseEnter(setHover2)}
                        onMouseLeave={handleMouseLeave(setHover2)}
                        onClick={() => {
                          turnPt(setTurn2, turn2);
                        }}
                      >
                        <div className="relative w-full h-full">
                          <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                          <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                          <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                            <div className="w-full font-secondary text-white text-6xl p-6  bg-black text-center">
                              CryptoHex
                              <div className="text-2xl font-secondary">
                                a Cryptocurrency wallet service web application
                                built with Vue JS
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white border-r-2">
                        <div className="w-full h-full  flex flex-column flex-wrap">
                          <img
                            src="/pt2/ft1.png"
                            className="w-full h-full object-cover"
                          ></img>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
              {turn3 ? (
                <div className="w-full h-full flex flex-row justify-between flex-wrap  transition-all duration-1000 ease-in-out border-black border-l-2 border-r-2 border-b-2">
                  <div className="w-20 h-full flex flex-column flex-wrap p-6">
                    <div className="w-full h-60 flex flex-column flex-wrap">
                      <div className="h-[15%] w-full text-4xl font-primary font-bold text-black ">
                        Cashier
                      </div>
                      <div className="h-55 w-full flex flex-column flex-wrap gap-14">
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Year Accomplished
                          <div className="text-base text-gray-500">2023</div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Role/Position
                          <div className="text-base text-gray-500">
                            Front End Developer
                          </div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Publication Link
                          <a
                            href="https://cashier-webapp.vercel.app"
                            target="_blank"
                          >
                            <div className="text-base text-gray-500">
                              cashier-webapp.vercel.app
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Repository
                          <a
                            href="https://github.com/Bfungcode/Cashier_WebApp"
                            target="_blank"
                          >
                            <div className="text-base text-gray-500">
                              github.com/Bfungcode/Cashier_WebApp
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold text-black">
                          Stacks
                          <div className="text-base text-gray-500">
                            JavaScript
                          </div>
                          <div className="text-base text-gray-500">
                            React JS
                          </div>
                          <div className="text-base text-gray-500">
                            Tailwind CSS
                          </div>
                        </div>
                        <div
                          className="flex flex-row flex-wrap justify-end gap-2 items-center cursor-pointer mt-4"
                          onClick={() => turnPt(setTurn3, turn3)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="52"
                            height="52"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            stroke-width="1"
                            stroke-linecap="square"
                            stroke-linejoin="bevel"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-80 h-full flex-column flex-wrap p-6">
                    <div className="w-full h-5 text-xl font-primary font-bold text-black pt-2">
                      Project Description
                    </div>
                    <div className="w-full h-[95%] ">
                      <div className="w-full h-[35%]">
                        <div className="text-xl text-gray-500 font-semibold">
                          I've created a handy project called "Cashier" to
                          assist front desk workers in efficiently managing
                          orders and processing payments. With "Cashier," you
                          can effortlessly handle customer orders and keep track
                          of payments. with Features:
                          <div className="w-full flex flex-row flex-wrap">
                            <div className="w-full flex flex-row flex-wrap">
                              <div className="w-full h-10">
                                <div className="text-lg text-gray-500 font-medium">
                                  <div className="text-black inline-block font-semibold">
                                    Interactive Menu:{" "}
                                  </div>{" "}
                                  Our menu system is user-friendly, allowing you
                                  to add items to orders with a simple click.
                                  You can stack items for multiple quantities
                                  and remove them just as easily.
                                </div>
                              </div>
                              <div className="w-full h-10">
                                <div className="text-lg text-gray-500 font-medium">
                                  <div className="text-black inline-block font-semibold">
                                    Order Summary:{" "}
                                  </div>{" "}
                                  "Cashier" keeps a running tally of the
                                  selected items, quantities, and their
                                  individual prices. This makes it a breeze to
                                  review and make any necessary adjustments to
                                  the order.
                                </div>
                              </div>
                              <div className="w-full h-10">
                                <div className="text-lg text-gray-500 font-medium">
                                  <div className="text-black inline-block font-semibold">
                                    Payment Proccessing:{" "}
                                  </div>{" "}
                                  When it's time to settle the bill, our system
                                  calculates the total cost based on the items
                                  in the order. There's a convenient input field
                                  where you can enter the customer's payment
                                  amount.
                                </div>
                              </div>
                              <div className="w-full h-10">
                                <div className="text-lg text-gray-500 font-medium">
                                  <div className="text-black inline-block font-semibold">
                                    Payment Notifications:{" "}
                                  </div>{" "}
                                  If the customer provides more money than the
                                  total, our system displays a toast
                                  notification showing the change to be
                                  returned. However, if the payment is
                                  insufficient, you'll receive a notification
                                  indicating that the payment has failed.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[65%] flex flex-row flex-wrap p-2 bg-gray-200 transition-all duration-1000 ease-in-out">
                        <div className="w-full h-full flex flex-row flex-wrap p-5 justify-center gap-5">
                          <div className="w-50 h-full flex flex-column flex-wrap">
                            <img
                              src="/cs1.png"
                              className="w-full h-70 object-fill "
                            />
                          </div>
                          <div className="w-[15%] h-full">
                            <img
                              src="/cs2.png"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-[15%] h-full">
                            <img
                              src="/cs3.png"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-[15%] h-full">
                            <img
                              src="/cs4.png"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-30 flex flex-row justify-between flex-wrap transition-all duration-1000 ease-in-out">
                  {hover3 ? (
                    <>
                      <div
                        className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap cursor-pointer bg-white p-6 transition-all duration-1000 ease-in-out"
                        onMouseMove={handleMouseEnter(setHover3)}
                        onMouseLeave={handleMouseLeave(setHover3)}
                        onClick={() => turnPt(setTurn3, turn3)}
                      >
                        <div className="relative w-full h-full">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 left-0 top-0"></div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                          <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                            <div className="w-full font-secondary text-black text-6xl p-6  bg-white text-center">
                              Cashier
                              <div className="text-2xl font-secondary">
                                a User-friendly portfolio project with an
                                interactive food menu webpage that allows you to
                                assemble your order on the right side while
                                keeping track of your total payment.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-30 h-full border-black border-b-2  border-l-2 bg-white">
                        <div className="w-full h-full  flex flex-column flex-wrap">
                          <img
                            src="/pt3/ft1.png"
                            className="w-full h-full object-cover"
                          ></img>
                        </div>
                      </div>
                      <div
                        className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-white p-6 cursor-pointer"
                        onMouseMove={handleMouseEnter(setHover3)}
                        onMouseLeave={handleMouseLeave(setHover3)}
                        onClick={() => turnPt(setTurn3, turn3)}
                      >
                        <div className="relative w-full h-full">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 left-0 top-0"></div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 right-0 bottom-0"></div>
                          <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                            <div className="w-full font-secondary text-black text-6xl p-6  bg-white text-center">
                              Cashier
                              <div className="text-2xl font-secondary">
                                a User-friendly portfolio project with an
                                interactive food menu webpage that allows you to
                                assemble your order on the right side while
                                keeping track of your total payment.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
              {turn4 ? (
                <div className="w-full h-full flex flex-row justify-between flex-wrap  transition-all duration-1000 ease-in-out border-black border-l-2 border-r-2 border-b-2 bg-black text-white">
                  <div className="w-20 h-full flex flex-column flex-wrap p-6">
                    <div className="w-full h-60 flex flex-column flex-wrap">
                      <div className="h-[15%] w-full text-4xl font-primary font-bold ">
                        Easy Features
                      </div>
                      <div className="h-55 w-full flex flex-column flex-wrap gap-14">
                        <div className="w-full text-xl font-primary font-bold ">
                          Year Accomplished
                          <div className="text-base text-gray-300">2022</div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold">
                          Role/Position
                          <div className="text-base text-gray-300">
                            Front End Developer
                          </div>
                        </div>
                        <div className="w-full text-xl font-primary font-bold">
                          Publication Link
                          <a
                            href="https://easyfeatures.netlify.app"
                            target="_blank"
                          >
                            <div className="text-base text-gray-300">
                              easyfeatures.netlify.app
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Repository
                          <a
                            href="https://github.com/Bfungcode/EasyFeatures"
                            target="_blank"
                          >
                            <div className="text-base text-gray-300">
                              github.com/Bfungcode/EasyFeatures
                            </div>
                          </a>
                        </div>
                        <div className="w-full text-xl font-primary font-bold ">
                          Stacks
                          <div className="text-base text-gray-300">
                            JavaScript
                          </div>
                          <div className="text-base text-gray-300">
                            React JS
                          </div>
                          <div className="text-base text-gray-300">CSS</div>
                        </div>
                        <div
                          className="flex flex-row flex-wrap justify-end gap-2 items-center cursor-pointer mt-4"
                          onClick={() => turnPt(setTurn4, turn4)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="52"
                            height="52"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="1"
                            stroke-linecap="square"
                            stroke-linejoin="bevel"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-80 h-full flex-column flex-wrap p-6">
                    <div className="w-full h-5 text-xl font-primary font-bold pt-2">
                      Project Description
                    </div>
                    <div className="w-full h-[95%] ">
                      <div className="w-full h-30">
                        <div className="text-xl text-gray-200">
                          A personal website portfolio that i made for
                          contributing to React JS Front End Developer
                          community. Creating features using a React JS and
                          vanilla JavaScript or pure without any framework can
                          quite be a problem and waste a lot of times. Let say
                          the feature is a simple slide, in the vanila
                          javascript we easily put the DOM method immediately in
                          the script but as React JS developer we have to
                          implement that using the react way by using the React
                          Hooks, etc. Because in React JS rendering a component
                          and DOM behaves differently, for example React DOM
                          escapes any values embedded in JSX before rendering
                          them. So it's can be a problem for a simple features
                          although it's the same logic function that works on
                          purely javascript website.
                        </div>
                        <div className="text-2xl text-gray-200 font-semibold">
                          I developed and designed React JS templates of feature
                          that widely used by people or basic features a website
                          needed, which we can just straight up copy and paste
                          the JSX and style it how we want without worrying the
                          underhood.{" "}
                        </div>
                      </div>
                      <div className="w-full h-70 flex flex-row flex-wrap transition-all duration-1000 ease-in-out">
                        <div className="h-full w-40  p-2 flex flex-column flex-wrap gap-2">
                          <div className="w-full h-40">
                            <img
                              src="/ef1.png"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-full h-60 ">
                            <img
                              src="/ef2.png"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="h-full w-40  p-2 flex flex-column flex-wrap gap-2">
                          <div className="w-full h-60">
                            <img
                              src="/ef3.png"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-full h-40 bg-gray-400">
                            <img
                              src="/ef4.png"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="h-full w-20 p-1 mt-1 flex flex-column flex-wrap gap-2">
                          <img
                            src="/ef5.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-30 flex flex-row justify-between flex-wrap  transition-all duration-1000 ease-in-out">
                  {hover4 ? (
                    <>
                      <div
                        className="w-full h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-6 transition-all duration-1000 ease-in-out cursor-pointer"
                        onMouseMove={handleMouseEnter(setHover4)}
                        onMouseLeave={handleMouseLeave(setHover4)}
                        onClick={() => turnPt(setTurn4, turn4)}
                      >
                        <div className="relative w-full h-full">
                          <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                          <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                          <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                            <div className="w-full font-secondary text-white text-6xl p-6   text-center">
                              Easy Features
                              <div className="text-2xl font-secondary">
                                a Dedicated website built with React JS and
                                designed to assist developers working with
                                React.js. With its extensive collection of JSX
                                templates and CSS code snippets,
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="w-70 h-full border-black border-b-2 border-r-2 border-l-2 flex flex-row flex-wrap bg-black p-6 cursor-pointer "
                        onMouseMove={handleMouseEnter(setHover4)}
                        onMouseLeave={handleMouseLeave(setHover4)}
                        onClick={() => turnPt(setTurn4, turn4)}
                      >
                        <div className="relative w-full h-full">
                          <div className="absolute border-t-2 border-l-2 border-white border-solid w-30 h-50 left-0 top-0"></div>
                          <div className="absolute border-r-2 border-b-2 border-white border-solid w-30 h-50 right-0 bottom-0"></div>
                          <div className="absolute inset-0 flex flex-column items-center justify-start h-full w-full text-4xl p-6">
                            <div className="w-full font-secondary text-white text-6xl p-6   text-center">
                              Easy Features
                              <div className="text-2xl font-secondary">
                                a Dedicated website built with React JS and
                                designed to assist developers working with
                                React.js. With its extensive collection of JSX
                                templates and CSS code snippets,
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-30 h-full border-black border-b-2  border-l-2 border-r-2 bg-white">
                        <div className="w-full h-full  flex flex-column flex-wrap">
                          <img
                            src="/ef1.png"
                            className="w-full h-full object-cover"
                          ></img>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
              <div className="w-full h-[75%] border-black border-l-2 border-r-2 border-b-2">
                <div className="w-full h-full flex flex-column flex-wrap">
                  <div className="w-full h-20">
                    <div className="w-full h-full  border-black border-b-2 flex flex-row justify-between">
                      <div className="w-[25%] h-full  border-black border-r-2">
                        <img
                          src="/Rectangle10.png"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-50 h-full   p-0 flex  ">
                        <div className="w-full font-secondary text-black text-7xl text-center items-center h-full flex justify-center pb-4 bg-white border-white border-2">
                          Designs
                        </div>
                      </div>
                      <div className="w-[25%] h-full  border-black border-l-2 ">
                        <img
                          src="/Rectangle10.png"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-80 p-2">
                    <Swiper
                      slidesPerView={2}
                      spaceBetween={20}
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[FreeMode, Pagination]}
                      className="w-full h-full"
                    >
                      <SwiperSlide>
                        <img src="/dp/dp1.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/dp/dp2.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/dp/dp3.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/dp/dp4.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/dp/dp5.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/dp/dp6.png" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="w-full h-90 border-black border-b-2 border-l-2">
                <div className="w-full h-full flex flex-row flex-wrap">
                  {box0 ? (
                    <div
                      className="w-[15%] h-full"
                      onMouseEnter={handleMouseEnter(setBox0)}
                      onMouseLeave={handleMouseLeave(setBox0)}
                    >
                      <div className="w-full h-full bg-white border-white relative p-14">
                        <div className="absolute border-t-2 border-l-2 border-amber-300 border-solid w-30 h-80 left-20 top-10"></div>
                        <div className="w-full h-full flex flex-column flex-wrap justify-center text-center">
                          <div className="w-full h-10 text-blue-500 font-secondary text-7xl">
                            S
                          </div>
                          <div className="w-full h-10 text-green-500 font-secondary   text-7xl">
                            K
                          </div>
                          <div className="w-full h-10 text-red-500 font-secondary   text-7xl">
                            I
                          </div>
                          <div className="w-full h-10 text-orange-500 font-secondary   text-7xl">
                            L
                          </div>
                          <div className="w-full h-10 text-blue-900 font-secondary  text-7xl">
                            L
                          </div>
                          <div className="w-full h-5 text-sky-400 font-secondary  text-7xl"></div>
                          <div className="w-full h-10 text-green-500 font-secondary  text-7xl">
                            S
                          </div>
                          <div className="w-full h-10 text-black font-secondary  text-7xl">
                            E
                          </div>
                          <div className="w-full h-10 text-cyan-400 font-secondary  text-7xl">
                            T
                          </div>
                          <div className="absolute border-r-2 border-b-2 border-amber-300 border-solid w-30 h-80 right-20 bottom-10"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-[15%] h-full bg-white border-white relative p-14"
                      onMouseEnter={handleMouseEnter(setBox0)}
                      onMouseLeave={handleMouseLeave(setBox0)}
                    >
                      <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-80 left-20 top-10"></div>
                      <div className="w-full h-full flex flex-column flex-wrap justify-center text-center">
                        <div className="w-full h-10 text-black font-secondary text-7xl">
                          S
                        </div>
                        <div className="w-full h-10 text-black font-secondary   text-7xl">
                          K
                        </div>
                        <div className="w-full h-10 text-black font-secondary   text-7xl">
                          I
                        </div>
                        <div className="w-full h-10 text-black font-secondary   text-7xl">
                          L
                        </div>
                        <div className="w-full h-10 text-black font-secondary  text-7xl">
                          L
                        </div>
                        <div className="w-full h-5 text-black font-secondary  text-7xl"></div>
                        <div className="w-full h-10 text-black font-secondary  text-7xl">
                          S
                        </div>
                        <div className="w-full h-10 text-black font-secondary  text-7xl">
                          E
                        </div>
                        <div className="w-full h-10 text-black font-secondary  text-7xl">
                          T
                        </div>
                        <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-80 right-20 bottom-10"></div>
                      </div>
                    </div>
                  )}

                  <div className="w-[85%] h-full flex flex-row flex-wrap">
                    {box1 ? (
                      <div
                        className="w-10 h-full bg-gradient-to-b from-amber-300 to-yellow-200"
                        onMouseEnter={handleMouseEnter(setBox1)}
                        onMouseLeave={handleMouseLeave(setBox1)}
                      >
                        <div className="relative w-full h-full border-r-2 border-black border-l-2 flex justify-center items-center">
                          <div className="relative w-full h-80 flex flex-column justify-center items-start">
                            <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                            <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-[90%] flex flex-column flex-wrap justify-center text-center">
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  J
                                </div>
                                <div className="w-full h-10 text-white font-secondary   text-5xl">
                                  A
                                </div>
                                <div className="w-full h-10 text-white font-secondary   text-5xl">
                                  V
                                </div>
                                <div className="w-full h-10 text-white font-secondary   text-5xl">
                                  A
                                </div>
                                <div className="w-full h-10 text-white font-secondary  text-5xl">
                                  S
                                </div>
                                <div className="w-full h-10 text-white font-secondary  text-5xl">
                                  C
                                </div>
                                <div className="w-full h-10 text-white font-secondary  text-5xl">
                                  R
                                </div>
                                <div className="w-full h-10 text-white font-secondary  text-5xl">
                                  I
                                </div>
                                <div className="w-full h-10 text-white font-secondary  text-5xl">
                                  P
                                </div>
                                <div className="w-full h-10 text-white font-secondary  text-5xl">
                                  T
                                </div>
                              </div>
                              <div className="w-full h-[10%] flex justify-center items-end mt-2 ">
                                <JavaScriptColor />
                              </div>
                            </div>
                            <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="relative w-10 h-full border-r-2 border-black border-l-2 flex justify-center items-center"
                        onMouseEnter={handleMouseEnter(setBox1)}
                        onMouseLeave={handleMouseLeave(setBox1)}
                      >
                        <div className="relative w-full h-80 flex flex-column justify-center items-start">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                          <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                            <div className="w-full h-[90%] flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                J
                              </div>
                              <div className="w-full h-10 text-black font-secondary   text-5xl">
                                A
                              </div>
                              <div className="w-full h-10 text-black font-secondary   text-5xl">
                                V
                              </div>
                              <div className="w-full h-10 text-black font-secondary   text-5xl">
                                A
                              </div>
                              <div className="w-full h-10 text-black font-secondary  text-5xl">
                                S
                              </div>
                              <div className="w-full h-10 text-black font-secondary  text-5xl">
                                C
                              </div>
                              <div className="w-full h-10 text-black font-secondary  text-5xl">
                                R
                              </div>
                              <div className="w-full h-10 text-black font-secondary  text-5xl">
                                I
                              </div>
                              <div className="w-full h-10 text-black font-secondary  text-5xl">
                                P
                              </div>
                              <div className="w-full h-10 text-black font-secondary  text-5xl">
                                T
                              </div>
                            </div>
                            <div className="w-full h-[10%] flex justify-center items-end">
                              <JavaScript />
                            </div>
                          </div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                        </div>
                      </div>
                    )}
                    {box2 ? (
                      <div
                        className="w-10 h-full bg-gradient-to-b from-blue-500 to-blue-300"
                        onMouseEnter={handleMouseEnter(setBox2)}
                        onMouseLeave={handleMouseLeave(setBox2)}
                      >
                        <div className="relative w-full h-full border-r-2 border-black flex justify-center items-center">
                          <div className="relative w-full h-80 flex flex-column justify-center items-start">
                            <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                            <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-[90%] flex flex-column flex-wrap justify-center text-center">
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  T
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  Y
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  P
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  E
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  S
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  C
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  R
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  I
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  P
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  T
                                </div>
                              </div>
                              <div className="w-full h-[10%] flex justify-center items-end mt-2">
                                <TypeScriptColor />
                              </div>
                            </div>
                            <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="relative w-10 h-full border-r-2 border-black flex justify-center items-center"
                        onMouseEnter={handleMouseEnter(setBox2)}
                        onMouseLeave={handleMouseLeave(setBox2)}
                      >
                        <div className="relative w-full h-80 flex flex-column justify-center items-start">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                          <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                            <div className="w-full h-[90%] flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                T
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                Y
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                P
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                E
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                S
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                C
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                R
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                I
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                P
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                T
                              </div>
                            </div>
                            <div className="w-full h-[10%] flex justify-center items-end">
                              <TypeScriptIcon />
                            </div>
                          </div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                        </div>
                      </div>
                    )}
                    {box3 ? (
                      <div className="w-10 h-full bg-gradient-to-b from-green-500 to-green-200">
                        <div
                          className="relative w-full h-full border-r-2 border-black flex justify-center items-center"
                          onMouseEnter={handleMouseEnter(setBox3)}
                          onMouseLeave={handleMouseLeave(setBox3)}
                        >
                          <div className="relative w-full h-80 flex flex-column justify-center items-start">
                            <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                            <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-[60%] flex flex-column flex-wrap justify-center text-center">
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  N
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  O
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  D
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  E
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl items-center flex justify-center text-center pb-6">
                                  .
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  J
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  S
                                </div>
                              </div>
                              <div className="w-full h-[40%] flex justify-center items-end">
                                <NodeColor />
                              </div>
                            </div>
                            <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="relative w-10 h-full border-r-2 border-black flex justify-center items-center"
                        onMouseEnter={handleMouseEnter(setBox3)}
                        onMouseLeave={handleMouseLeave(setBox3)}
                      >
                        <div className="relative w-full h-80 flex flex-column justify-center items-start">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                          <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                            <div className="w-full h-[60%] flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                N
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                O
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                D
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                E
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl items-center flex justify-center text-center pb-6">
                                .
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                J
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                S
                              </div>
                            </div>
                            <div className="w-full h-[40%] flex justify-center items-end">
                              <NodeIcon />
                            </div>
                          </div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                        </div>
                      </div>
                    )}
                    {box4 ? (
                      <div
                        className="w-10 h-full bg-gradient-to-b from-red-500 to-orange-400"
                        onMouseEnter={handleMouseEnter(setBox4)}
                        onMouseLeave={handleMouseLeave(setBox4)}
                      >
                        <div className="relative w-full h-full border-r-2 border-black flex justify-center items-center">
                          <div className="relative w-full h-80 flex flex-column justify-center items-start">
                            <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                            <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-[60%] flex flex-column flex-wrap justify-center text-center">
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  F
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  I
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  G
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  M
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  A
                                </div>
                              </div>
                              <div className="w-full h-[40%] flex justify-center items-end mt-1">
                                <FigmaColor />
                              </div>
                            </div>
                            <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="relative w-10 h-full border-r-2 border-black flex justify-center items-center"
                        onMouseEnter={handleMouseEnter(setBox4)}
                        onMouseLeave={handleMouseLeave(setBox4)}
                      >
                        <div className="relative w-full h-80 flex flex-column justify-center items-start">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                          <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                            <div className="w-full h-[60%] flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                F
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                I
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                G
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                M
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                A
                              </div>
                            </div>
                            <div className="w-full h-[40%] flex justify-center items-end mt-1">
                              <FigmaIcon />
                            </div>
                          </div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                        </div>
                      </div>
                    )}
                    {box5 ? (
                      <div
                        className="w-10 h-full bg-gradient-to-b from-orange-500 to-orange-200"
                        onMouseEnter={handleMouseEnter(setBox5)}
                        onMouseLeave={handleMouseLeave(setBox5)}
                      >
                        <div className="relative w-full h-full border-r-2 border-black flex justify-center items-center">
                          <div className="relative w-full h-80 flex flex-column justify-center items-start">
                            <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                            <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-[60%] flex flex-column flex-wrap justify-center text-center">
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  H
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  T
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  M
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  L
                                </div>
                              </div>
                              <div className="w-full h-[40%] flex justify-center items-end mt-1">
                                <HtmlColor />
                              </div>
                            </div>
                            <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="relative w-10 h-full border-r-2 border-black flex justify-center items-center"
                        onMouseEnter={handleMouseEnter(setBox5)}
                        onMouseLeave={handleMouseLeave(setBox5)}
                      >
                        <div className="relative w-full h-80 flex flex-column justify-center items-start">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                          <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                            <div className="w-full h-[60%] flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                H
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                T
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                M
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                L
                              </div>
                            </div>
                            <div className="w-full h-[40%] flex justify-center items-end">
                              <HtmlIcon />
                            </div>
                          </div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                        </div>
                      </div>
                    )}
                    {box6 ? (
                      <div
                        className="w-10 h-full bg-gradient-to-b from-blue-900 to-blue-500"
                        onMouseEnter={handleMouseEnter(setBox6)}
                        onMouseLeave={handleMouseLeave(setBox6)}
                      >
                        <div className="relative w-full h-full border-r-2 border-black flex justify-center items-center">
                          <div className="relative w-full h-80 flex flex-column justify-center items-start">
                            <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                            <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-[50%] flex flex-column flex-wrap justify-center text-center">
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  C
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  S
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  S
                                </div>
                              </div>
                              <div className="w-full h-[50%] flex justify-center items-end mt-2">
                                <CssColor />
                              </div>
                            </div>
                            <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="relative w-10 h-full border-r-2 border-black flex justify-center items-center"
                        onMouseEnter={handleMouseEnter(setBox6)}
                        onMouseLeave={handleMouseLeave(setBox6)}
                      >
                        <div className="relative w-full h-80 flex flex-column justify-center items-start">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                          <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                            <div className="w-full h-[50%] flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                C
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                S
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                S
                              </div>
                            </div>
                            <div className="w-full h-[50%] flex justify-center items-end mt-2">
                              <CssIcon />
                            </div>
                          </div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                        </div>
                      </div>
                    )}
                    {box7 ? (
                      <div
                        className="w-10 h-full bg-gradient-to-b from-sky-400 to-slate-200"
                        onMouseEnter={handleMouseEnter(setBox7)}
                        onMouseLeave={handleMouseLeave(setBox7)}
                      >
                        <div className="relative w-full h-full border-r-2 border-black flex justify-center items-center">
                          <div className="relative w-full h-80 flex flex-column justify-center items-start">
                            <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                            <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-[80%] flex flex-column flex-wrap justify-center text-center">
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  R
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  E
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  A
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  C
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  T
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl items-center flex justify-center text-center pb-6">
                                  .
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  J
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  S
                                </div>
                              </div>
                              <div className="w-full h-[20%] flex justify-center items-end ">
                                <ReactColor />
                              </div>
                            </div>
                            <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="relative w-10 h-full border-r-2 border-black flex justify-center items-center"
                        onMouseEnter={handleMouseEnter(setBox7)}
                        onMouseLeave={handleMouseLeave(setBox7)}
                      >
                        <div className="relative w-full h-80 flex flex-column justify-center items-start">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                          <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                            <div className="w-full h-[80%] flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                R
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                E
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                A
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                C
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                T
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl items-center flex justify-center text-center pb-6">
                                .
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                J
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                S
                              </div>
                            </div>
                            <div className="w-full h-[20%] flex justify-center items-end">
                              <ReactIcon />
                            </div>
                          </div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                        </div>
                      </div>
                    )}
                    {box8 ? (
                      <div
                        className="w-10 h-full bg-gradient-to-b from-green-500 to-gray-600"
                        onMouseEnter={handleMouseEnter(setBox8)}
                        onMouseLeave={handleMouseLeave(setBox8)}
                      >
                        <div className="relative w-full h-full border-r-2 border-black flex justify-center items-center">
                          <div className="relative w-full h-80 flex flex-column justify-center items-start">
                            <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                            <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-[70%] flex flex-column flex-wrap justify-center text-center">
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  V
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  U
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  E
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl items-center flex justify-center text-center pb-6">
                                  .
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  J
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  S
                                </div>
                              </div>
                              <div className="w-full h-[30%] flex justify-center items-end">
                                <VueColor />
                              </div>
                            </div>
                            <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="relative w-10 h-full border-r-2 border-black flex justify-center items-center"
                        onMouseEnter={handleMouseEnter(setBox8)}
                        onMouseLeave={handleMouseLeave(setBox8)}
                      >
                        <div className="relative w-full h-80 flex flex-column justify-center items-start">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                          <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                            <div className="w-full h-[70%] flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                V
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                U
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                E
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl items-center flex justify-center text-center pb-6">
                                .
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                J
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                S
                              </div>
                            </div>
                            <div className="w-full h-[30%] flex justify-center items-end">
                              <VueJS />
                            </div>
                          </div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                        </div>
                      </div>
                    )}
                    {box9 ? (
                      <div
                        className="w-10 h-full bg-gradient-to-b from-black to-slate-300"
                        onMouseEnter={handleMouseEnter(setBox9)}
                        onMouseLeave={handleMouseLeave(setBox9)}
                      >
                        <div className="relative w-full h-full border-r-2 border-black flex justify-center items-center">
                          <div className="relative w-full h-80 flex flex-column justify-center items-start">
                            <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                            <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-[80%] flex flex-column flex-wrap justify-center text-center">
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  N
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  E
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  X
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  T
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl items-center flex justify-center text-center pb-6">
                                  .
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  J
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  S
                                </div>
                              </div>
                              <div className="w-full h-[20%] flex justify-center items-end">
                                <NextJs />
                              </div>
                            </div>
                            <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="relative w-10 h-full border-r-2 border-black flex justify-center items-center"
                        onMouseEnter={handleMouseEnter(setBox9)}
                        onMouseLeave={handleMouseLeave(setBox9)}
                      >
                        <div className="relative w-full h-80 flex flex-column justify-center items-start">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                          <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                            <div className="w-full h-[80%] flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                N
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                E
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                X
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                T
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl items-center flex justify-center text-center pb-6">
                                .
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                J
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                S
                              </div>
                            </div>
                            <div className="w-full h-[20%] flex justify-center items-end">
                              <NextJs />
                            </div>
                          </div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                        </div>
                      </div>
                    )}
                    {box10 ? (
                      <div
                        className="w-10 h-full bg-gradient-to-b from-cyan-400 to-cyan-200"
                        onMouseEnter={handleMouseEnter(setBox10)}
                        onMouseLeave={handleMouseLeave(setBox10)}
                      >
                        <div className="relative w-full h-full border-r-2 border-black flex justify-center items-center">
                          <div className="relative w-full h-80 flex flex-column justify-center items-start">
                            <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                            <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-[80%] flex flex-column flex-wrap justify-center text-center">
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  T
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  A
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  I
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  L
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  W
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  I
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  N
                                </div>
                                <div className="w-full h-10 text-white font-secondary text-5xl">
                                  D
                                </div>
                              </div>
                              <div className="w-full h-[20%] flex justify-center items-end mt-1">
                                <TailwindColor />
                              </div>
                            </div>
                            <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="relative w-10 h-full border-r-2 border-black flex justify-center items-center"
                        onMouseEnter={handleMouseEnter(setBox10)}
                        onMouseLeave={handleMouseLeave(setBox10)}
                      >
                        <div className="relative w-full h-80 flex flex-column justify-center items-start">
                          <div className="absolute border-t-2 border-l-2 border-black border-solid w-30 h-50 right-20 top-[-5%]"></div>
                          <div className="w-50 h-full flex flex-column flex-wrap justify-center text-center">
                            <div className="w-full h-[80%] flex flex-column flex-wrap justify-center text-center">
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                T
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                A
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                I
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                L
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                W
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                I
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                N
                              </div>
                              <div className="w-full h-10 text-black font-secondary text-5xl">
                                D
                              </div>
                            </div>
                            <div className="w-full h-[20%] flex justify-center items-end mt-1">
                              <TailWind />
                            </div>
                          </div>
                          <div className="absolute border-r-2 border-b-2 border-black border-solid w-30 h-50 left-20 bottom-[-5%]"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full h-60 flex flex-col flex-wrap ">
                <div className="w-full h-20  border-black border-b-2 flex flex-row justify-between">
                  <div className="w-70 h-full  border-black border-l-2 border-r-2">
                    <img
                      src="/Rectangle10.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-30 h-full border-black border-r-2  p-0 flex  ">
                    <div className="w-full font-secondary text-white text-5xl text-center items-center h-full flex justify-center pb-4 bg-black border-white border-2">
                      Contacts
                    </div>
                  </div>
                </div>
                <div
                  className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row"
                  onMouseEnter={handleMouseEnter(setContact1)}
                  onMouseLeave={handleMouseLeave(setContact1)}
                >
                  {contact1 ? (
                    <>
                      <div className="w-full h-fulltext-white text-5xl font-secondary bg-white flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                        <div className="w-60 flex flex-row flex-wrap justify-end gap-4">
                          <div className="text-6xl font-secondary text-black">
                            Mail me{" "}
                          </div>
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#000000"
                              stroke-width="1"
                              stroke-linecap="square"
                              stroke-linejoin="bevel"
                            >
                              <path d="M5 12h13M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        <div className="w-40 flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000">
                          <a
                            href="mailto:bfung0011@gmail.com"
                            target="_blank"
                            className="text-black p-2"
                          >
                            bfung0011@gmail.com
                          </a>
                          <div className="border-2 border-black w-80"></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-70 h-full   text-white text-5xl font-secondary bg-black flex justify-center items-center flex-col gap-2 transition-all ease-in-out duration-1000">
                        <a href="mailto:bfung0011@gmail.com" target="_blank">
                          bfung0011@gmail.com
                        </a>
                      </div>
                      <div className="w-30 h-full text-black font-secondary text-5xl flex flex-row justify-center items-center border-black border-l-2 transition-all ease-in-out duration-1000">
                        Gmail
                      </div>
                    </>
                  )}
                </div>
                <div
                  className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row"
                  onMouseEnter={handleMouseEnter(setContact2)}
                  onMouseLeave={handleMouseLeave(setContact2)}
                >
                  {contact2 ? (
                    <>
                      <div className="w-full h-fulltext-white text-5xl font-secondary bg-white flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                        <div className="w-40 flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000">
                          <a
                            href="https://linkedin.com/in/biefung/"
                            target="_blank"
                            className="text-black p-2"
                          >
                            linkedin.com/in/biefung/
                          </a>
                          <div className="border-2 border-black w-80"></div>
                        </div>
                        <div className="w-60 flex flex-row flex-wrap justify-start gap-4">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#000000"
                              stroke-width="1"
                              stroke-linecap="square"
                              stroke-linejoin="bevel"
                            >
                              <path d="M19 12H6M12 5l-7 7 7 7" />
                            </svg>
                          </div>
                          <div className="text-6xl font-secondary text-black">
                            See my profile{" "}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-30 h-full  border-black border-r-2 text-black text-5xl font-secondary  flex justify-center items-center transition-all ease-in-out duration-1000">
                        LinkedIn
                      </div>
                      <div className="w-70 h-full text-white font-secondary text-5xl flex flex-col justify-center items-center   bg-black gap-2 transition-all ease-in-out duration-1000">
                        <a
                          href="https://linkedin.com/in/biefung"
                          target="_blank"
                        >
                          linkedin.com/in/biefung
                        </a>
                      </div>
                    </>
                  )}
                </div>
                <div
                  className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row"
                  onMouseEnter={handleMouseEnter(setContact3)}
                  onMouseLeave={handleMouseLeave(setContact3)}
                >
                  {contact3 ? (
                    <>
                      <div className="w-full h-fulltext-white text-5xl font-secondary bg-white flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                        <div className="w-60 flex flex-row flex-wrap justify-end gap-4">
                          <div className="text-6xl font-secondary text-black">
                            See my code{" "}
                          </div>
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#000000"
                              stroke-width="1"
                              stroke-linecap="square"
                              stroke-linejoin="bevel"
                            >
                              <path d="M5 12h13M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        <div className="w-40 flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000">
                          <a
                            href="https://github.com/Bfungcode"
                            target="_blank"
                            className="text-black p-2"
                          >
                            github.com/Bfungcode
                          </a>
                          <div className="border-2 border-black w-80"></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-70 h-full  text-white text-5xl font-secondary bg-black flex justify-center items-center flex-col gap-2 transition-all ease-in-out duration-1000">
                        <a href="https://github.com/Bfungcode" target="_blank">
                          github.com/Bfungcode
                        </a>
                      </div>
                      <div className="w-30 h-full text-black font-secondary text-5xl flex flex-row justify-center items-center border-black border-l-2 transition-all ease-in-out duration-1000">
                        Github
                      </div>
                    </>
                  )}
                </div>
                <div
                  className="w-full h-20 border-black border- border-l-2 border-r-2 border-b-2 flex flex-row"
                  onMouseEnter={handleMouseEnter(setContact4)}
                  onMouseLeave={handleMouseLeave(setContact4)}
                >
                  {contact4 ? (
                    <>
                      <div className="w-full h-fulltext-white text-5xl font-secondary bg-white flex justify-center items-center text-center flex-row gap-2 transition-all ease-in-out duration-1000">
                        <div className="w-40 flex flex-column flex-wrap justify-center items-center transition-all ease-in-out duration-1000">
                          <a
                            href="https://twitter.com/bei_fg"
                            target="_blank"
                            className="text-black p-2"
                          >
                            twitter.com/bei_fg
                          </a>
                          <div className="border-2 border-black w-80"></div>
                        </div>
                        <div className="w-60 flex flex-row flex-wrap justify-start gap-4">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#000000"
                              stroke-width="1"
                              stroke-linecap="square"
                              stroke-linejoin="bevel"
                            >
                              <path d="M19 12H6M12 5l-7 7 7 7" />
                            </svg>
                          </div>
                          <div className="text-6xl font-secondary text-black">
                            See my tweets{" "}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-30 h-full  border-black border-r-2 text-black text-5xl font-secondary  flex justify-center items-center transition-all ease-in-out duration-1000">
                        X / Twitter
                      </div>
                      <div className="w-70 h-full text-white font-secondary text-5xl flex flex-col justify-center items-center bg-black gap-2 transition-all ease-in-out duration-1000">
                        <a href="https://twitter.com/bei_fg" target="_blank">
                          twitter.com/bei_fg
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="w-full h-4"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
