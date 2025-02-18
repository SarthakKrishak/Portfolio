import React from "react";
import Header from "../Components/Header";
import { RxLinkedinLogo } from "react-icons/rx";
import { PiXLogoFill } from "react-icons/pi";
import Footer from "../Components/Footer";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div className="bg-[#18181B] min-h-screen w-full flex justify-center">
            <div className="min-h-[100vh] w-[55vw] mt-10">
                <Header />
                <section className="w-full text-white pl-3 flex flex-col gap-1 mt-10">
                    <h1 className="text-[2.8vw] text-white font-bold">Blogs</h1>
                    <p className="text-[#8C8C94] text-[1.1vw] mr-28">
                        Exploring ideas, sharing insights, and inspiring growth—one blog at a time.
                    </p>
                </section>

                <section className="mt-13 ml-3 mr-20">
                    <div className="bg-[#27272A] flex justify-between items-center text-white border border-[#3F3F46] rounded py-5 px-5 text-[1.2vw] font-semibold">
                        <h1>Coming Soon</h1>
                        <h1 className="text-[#5e6e76] text-[1.1vw]">-- views</h1>
                    </div>
                </section>

                {/* Hire me */}
                <section className=" bg-[#161C31] text-white mt-60 pt-7 pb-9 pl-7 pr-10 flex flex-col gap-1 rounded ml-3 mb-10 mr-1 border border-[#1F2937]">
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
    )
}

export default Blog