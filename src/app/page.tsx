"use client"
import { GmailIcon, GithubIcon, LinkedInIcon, TwitterIcon, DotsIcon, MenuIcon } from "./media/svg"
import { useState } from 'react';

export default function Home() {
  const [menuActive, setMenuActive] = useState(false);

  const openMenu = () => {
    setMenuActive(!menuActive);
  }
  return (
    <div className="w-full h-screen">
      {/* <img src="/noise.gif" className="w-screen h-screen object-cover absolute opacity-5 pointer-events-none" /> */}
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
            <div className="w-30 h-full border-black border-r-2  p-0 flex  ">
              <div className="w-full font-secondary text-white text-5xl text-center items-center h-full flex justify-center pb-4 bg-black">
                Projects
              </div>
            </div>
            <div className="w-70 h-full object-fill">
              <img src="/Rectangle10.png" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col flex-wrap pl-5 pr-5 ">
        <div className="w-full h-full">
          <div className="w-full h-30 flex flex-row justify-between">
            <div className="w-30 h-full border-black border-r-2 border-b-2  border-l-2 p-0 flex  ">
              <div className="w-full font-secondary text-white text-3xl ">
                test
              </div>
            </div>
            <div className="w-70 h-full object-fill border-black border-b-2 border-r-2">
            </div>
          </div>
          <div className="w-full h-30 flex flex-row justify-between">
            <div className="w-70 h-full  border-r-2 border-b-2 border-l-2 border-black p-0 flex  ">
              <div className="w-full font-secondary text-white text-3xl">
                test
              </div>
            </div>
            <div className="w-30 h-full object-fill border-black border-b-2 border-r-2">
            </div>
          </div>
          <div className="w-full h-30 flex flex-row justify-between">
            <div className="w-30 h-full border-black border-r-2 border-b-2  border-l-2 p-0 flex  ">
              <div className="w-full font-secondary text-white text-3xl ">
                test
              </div>
            </div>
            <div className="w-70 h-full object-fill border-black border-b-2 border-r-2">
            </div>
          </div>
          <div className="w-full h-30 flex flex-row justify-between">
            <div className="w-70 h-full  border-r-2 border-b-2 border-l-2 border-black p-0 flex  ">
              <div className="w-full font-secondary text-white text-3xl">
                test
              </div>
            </div>
            <div className="w-30 h-full object-fill border-black border-b-2 border-r-2">
            </div>
          </div>
          <div className="w-full h-30 flex flex-row justify-between">
            <div className="w-30 h-full border-black border-r-2 border-b-2  border-l-2 p-0 flex  ">
              <div className="w-full font-secondary text-white text-3xl ">
                test
              </div>
            </div>
            <div className="w-70 h-full object-fill border-black border-b-2 border-r-2">
            </div>
          </div>
          <div className="w-full h-60 flex flex-col flex-wrap ">
            <div className="w-full h-20  border-black border-b-2 flex flex-row justify-between">
              <div className="w-70 h-full object-fill border-black border-l-2">
                <img src="/Rectangle10.png" className="w-full h-full" />
              </div>
              <div className="w-30 h-full border-black border-r-2  p-0 flex  ">
                <div className="w-full font-secondary text-white text-5xl text-center items-center h-full flex justify-center pb-4 bg-black">
                  Contacts
                </div>
              </div>
            </div>
            <div className="w-full h-20 border-black border-l-2 border-r-2 border-b-2 flex flex-row">
              <div className="w-70 h-full border-black border-r-2"></div>
              <div className="w-30 h-full"></div>
            </div>
            <div className="w-full h-20 border-black border-l-2 border-r-2 border-b-2 flex flex-row">
              <div className="w-30 h-full border-black border-r-2"></div>
              <div className="w-70 h-full"></div>
            </div>
            <div className="w-full h-20 border-black border-l-2 border-r-2 border-b-2 flex flex-row">
              <div className="w-70 h-full border-black border-r-2"></div>
              <div className="w-30 h-full"></div>
            </div>
            <div className="w-full h-20 border-black border-l-2 border-r-2 border-b-2 flex flex-row">
              <div className="w-30 h-full border-black border-r-2"></div>
              <div className="w-70 h-full"></div>
            </div>
          </div>
          <div className="w-full h-4"></div>
        </div>

      </div>
    </div >
  )
}




