import Image from "next/image"
import GmailIcon from "./media/gmail"
import GithubIcon from "./media/github"
import LinkedInIcon from "./media/linkedin"
import TwitterIcon from "./media/twitter"
import DotsIcon from "./media/dots"

export default function Home() {
  return (
    <div>
      <img src="/noise.gif" className="w-screen h-screen object-cover absolute opacity-5 pointer-events-none" />
      <main className="flex flex-col flex-wrap bg-white w-full h-screen overflow-hidden p-5"
      >
        <div className="w-full h-full border-2 border-black overflow-hidden p-0 m-0">
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
          <div className="w-13 h-76 border-r-2 border-black flex flex-col">
            <div className="w-full h-50 flex flex-col items-center flex-wrap mt-2">
              <div className="font-primary text-sm font-bold text-gray-500 text-start w-90">Contacts</div>
              <div className="w-full flex justify-center items-center cursor-pointer"> <GmailIcon /> </div>
              <div className="w-full flex justify-center items-center cursor-pointer"> <GithubIcon /> </div>
              <div className="w-full flex justify-center items-center cursor-pointer"> <LinkedInIcon /> </div>
              <div className="w-full flex justify-center items-center cursor-pointer"> <TwitterIcon /> </div>
            </div>
            <div className="p-4 w-full h-50">
              <div className="font-primary text-xl font-bold text-black mt-20">Bie Fung</div>
              <div className="font-primary text-sm font-bold text-gray-500">Profile</div>
              <div className="font-primary text-xs font-semibold text-black mt-2 leading-6">
                <div>Hello, i'm Bie Fung.</div>
                you can call me Abe or Bei.
                <div>I’m a Front End Developer</div>
                and Web Designer. Specializing in JavaScript.
                I'm a self taught Software Engineer with passion and dreams</div>
            </div>
          </div>
          <div className="w-full h-12 border-t-2 border-black  flex flex-row justify-between">
            <div className="w-13 h-full border-black border-r-2 p-0 m-0 flex ">
              <div className="font-secondary text-5xl text-center items-center w-full h-full mt-5">
                Projects
              </div>
            </div>
            <div className="w-87 h-full border-black p-0 m-0">
              <img src="/Rectangle10.png" className="h-full w-full relative right object-fit"></img>
            </div>
          </div>
        </div>
      </main >
    </div >
  )
}
