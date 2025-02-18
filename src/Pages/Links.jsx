import React from "react";
import Header from "../Components/Header";
import { RxInstagramLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { PiXLogoFill } from "react-icons/pi";
import Footer from "../Components/Footer";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Links = () => {
  const handleClick = () => {
    toast("Coming Soon !", { duration: 1500 });
  };
  const HandleHome = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#18181B] min-h-screen w-full flex justify-center">
      <div className="min-h-[100vh] w-[55vw] mt-10">
        <Header />
        <section className="w-full text-white pl-3 flex flex-col gap-1 mt-10">
          <h1 className="text-[2.8vw] text-white font-bold">Links</h1>
          <p className="text-[#8C8C94] text-[1.1vw] mr-28">
            Dive into my world—projects, source code, socials, and a hint of
            memes. Stay curious!
          </p>
        </section>

        <Toaster />

        {/* Hire me */}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sarthakkrishak/"
          className=" bg-[#18181B] text-white text-[1.1vw] font-bold mt-8 pt-2 pb-2 px-4 pr-10 flex items-center gap-2 rounded ml-3 mr-30 border-2 border-[#27272A] hover:bg-[#27272A]"
        >
          <RxLinkedinLogo />
          <h1>LinkedIn</h1>
        </a>
        <a
          target="_blank"
          href="https://x.com/krishak_sarthak"
          className=" bg-[#18181B] text-white text-[1.1vw] font-bold mt-4 pt-2 pb-2 px-4 pr-10 flex items-center gap-2 rounded ml-3 mr-30 border-2 border-[#27272A] hover:bg-[#27272A]"
        >
          <PiXLogoFill />
          <h1>Twitter</h1>
        </a>
        <a
          target="_blank"
          href="https://github.com/SarthakKrishak"
          className=" bg-[#18181B] text-white text-[1.1vw] font-bold mt-4 pt-2 pb-2 px-4 pr-10 flex items-center gap-2 rounded ml-3 mr-30 border-2 border-[#27272A] hover:bg-[#27272A]"
        >
          <RxGithubLogo />
          <h1>Github</h1>
        </a>
        <a
          onClick={handleClick}
          target="_blank"
          className=" bg-[#18181B] text-white text-[1.1vw] font-bold mt-4 pt-2 pb-2 px-4 pr-10 flex items-center gap-2 rounded ml-3 mr-30 border-2 border-[#27272A] hover:bg-[#27272A] cursor-pointer"
        >
          <img
            className="size-5 rounded-full"
            src="./src/assets/WhatsApp Image 2025-02-18 at 21.09.53_4aea06b6.jpg"
            alt="image"
          />
          <h1>Imaginum</h1>
        </a>
        <a
          onClick={handleClick}
          className=" bg-[#18181B] text-white text-[1.1vw] font-bold mt-4 pt-2 pb-2 px-4 pr-10 flex items-center gap-2 rounded ml-3 mr-30 border-2 border-[#27272A] hover:bg-[#27272A] cursor-pointer"
        >
          <img
            className="size-5 rounded-full"
            src="./src/assets/campus.png"
            alt="image"
          />
          <h1>Campus Mart</h1>
        </a>
        <a
          onClick={handleClick}
          className=" bg-[#18181B] text-white text-[1.1vw] font-bold mt-4 pt-2 pb-2 px-4 pr-10 flex items-center gap-2 rounded ml-3 mr-30 border-2 border-[#27272A] hover:bg-[#27272A] cursor-pointer"
        >
          <img
            className="size-5 rounded-full"
            src="./src/assets/ac69f0bfcbac19ff0f8bb9251568937d.jpg"
            alt="image"
          />
          <h1>Cabsync</h1>
        </a>
        <a target="_blank" href="https://fixi-ai.vercel.app/" className=" bg-[#18181B] text-white text-[1.1vw] font-bold mt-4 pt-2 pb-2 px-4 pr-10 flex items-center gap-2 rounded ml-3 mr-30 border-2 border-[#27272A] hover:bg-[#27272A]">
          <img
            className="size-5 rounded-full"
            src="./src/assets/Designer.jpeg"
            alt="image"
          />
          <h1>Fixi-AI</h1>
        </a>
        <a target="_blank" href="https://www.csedvit.com/" className=" bg-[#18181B] text-white text-[1.1vw] font-bold mt-4 pt-2 pb-2 px-4 pr-10 flex items-center gap-2 rounded ml-3 mr-30 border-2 border-[#27272A] hover:bg-[#27272A]">
          <img
            className="size-5 rounded-full"
            src="/favicon-5.png"
            alt="image"
          />
          <h1>CSED VIT</h1>
        </a>
        <Link
          onClick={HandleHome}
          to={"/"}
          className=" bg-[#18181B] text-white text-[1.1vw] font-bold mt-4 pt-2 pb-2 px-4 pr-10 flex items-center gap-2 rounded ml-3 mr-30 border-2 border-[#27272A] hover:bg-[#27272A]"
        >
          <img
            className="size-5 rounded-full"
            src="./src/assets/logo.jpeg"
            alt="image"
          />
          <h1>Website</h1>
        </Link>
        <a
          href="https://www.instagram.com/sarthak_krishak/"
          target="_blank"
          className=" bg-[#18181B] text-white text-[1.1vw] font-bold mt-4 pt-2 pb-2 px-4 pr-10 flex items-center gap-2 rounded ml-3 mr-30 border-2 border-[#27272A] hover:bg-[#27272A]"
        >
          <RxInstagramLogo />
          <h1>Instagram</h1>
        </a>

        {/* Hire me */}
        <section className=" bg-[#161C31] text-white mt-40 pt-7 pb-9 pl-7 pr-10 flex flex-col gap-1 rounded ml-3 mb-10 mr-1 border border-[#1F2937]">
          <h1 className="text-[1.5vw] font-semibold">
            Want to hire me? Lets discuss.
          </h1>
          <div>
            <h2 className="text-[#e5e3e3] text-[1.2vw] mb-2">
              Drop your message and let's discuss about your project.
            </h2>
            <a
              target="_blank"
              href="https://wa.me/7693004956"
              className="bg-[#4ADE80] text-[#111827] text-[1.1vw] font-bold px-5 rounded-sm py-[0.5vh]"
            >
              Chat on Whatsapp
            </a>
          </div>
          <hr className="text-[#858585] mt-7 mb-7" />
          <h2 className="text-[#e5e3e3] text-[1.2vw] pb-1">
            Drop me a mail and I will get back to you.
          </h2>
          <div className="bg-[#1F2937] w-full h-11 flex justify-between items-center rounded-md">
            <span className="text-[#828282] text-[1.1vw] pl-3">
              sarthakkrishak1234@gmail.com
            </span>
            <a
              href="mailto:sarthakkrishak1234@gmail.com"
              className="bg-[#374151] font-bold text-[1.1vw] px-[1.4vw] mx-1 py-[0.8vh] rounded-md"
            >
              Send me
            </a>
          </div>
        </section>

        <Footer />

        <section className="text-[#9CA3AF] mb-8 text-[1.1vw] ml-4">
          <h1 className="flex items-center gap-1">
            Find me on{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sarthakkrishak/"
              className="text-[#14B8A6]"
            >
              <RxLinkedinLogo />
            </a>{" "}
            and
            <a href="" target="_blank" className="text-[#14B8A6]">
              <PiXLogoFill />
            </a>
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Links;
