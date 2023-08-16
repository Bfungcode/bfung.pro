"use client"
import { GmailIcon, GithubIcon, LinkedInIcon, TwitterIcon, DotsIcon, MenuIcon } from "./media/svg"
import { useState } from 'react';

export default function Home() {
  const [menuActive, setMenuActive] = useState(false);

  const openMenu = () => {
    setMenuActive(!menuActive);
  }
  return (
    <div>
      {/* <img src="/noise.gif" className="w-screen h-screen object-cover absolute opacity-5 pointer-events-none" /> */}
      <main className="flex flex-col flex-wrap  w-full h-screen  p-5 bg-gray-100"
      >
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
                <div className="font-primary text-xl font-bold text-black mt-20">Bie Fung</div>
                <div className="font-primary text-sm font-bold text-gray-500">Profile</div>
                <div className="font-primary text-sm font-semibold text-black mt-2 leading-6">
                  <div>Hello, i'm Bie Fung.</div>
                  you can call me Abe or Bei.
                  <div>I’m a Front End Developer</div>
                  and Web Designer. Specializing in JavaScript.
                  I'm a self taught Software Engineer with passion and dreams</div>

              </div>
            </div>
            <div className="w-87 h-full p-4 flex flex-col justify-evenly items-center">
              {menuActive ? (
                <>
                  <div className="w-full h-90 border-black border-2 rounded-xl"></div>
                  <div className="w-5 h-5 flex justify-center items-center cursor-pointer border-2 border-black rounded-2xl" onClick={openMenu}>
                    <MenuIcon />
                  </div>
                </>) : (
                <>
                  <div className="w-full h-90"></div>
                  <div className="w-5 h-5 flex justify-center items-center cursor-pointer border-2 border-black rounded-2xl" onClick={openMenu}>
                    <MenuIcon />
                  </div>
                </>
              )}

            </div>
          </div>
          <div className="w-full h-12 border-t-2 border-black  flex flex-row justify-between">
            <div className="w-13 h-full border-black border-r-2 p-0 m-0 flex bg-black">
              <div className="font-secondary text-white text-5xl text-center items-center w-full h-full mt-5">
                Contacts
              </div>
            </div>
            <div className="w-87 h-full border-black p-0 m-0 flex flex-row justify-evenly items-center ">
              <div className="w-20 cursor-pointer"> <GmailIcon /> </div>
              <div className="w-20 cursor-pointer"> <GithubIcon /> </div>
              <div className="w-20 cursor-pointer"> <LinkedInIcon /> </div>
              <div className="w-20 cursor-pointer"> <TwitterIcon /> </div>
            </div>
          </div>

        </div>
      </main >
    </div >
  )
}




