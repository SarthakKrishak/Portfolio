import React, { useState } from "react";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { motion } from "framer-motion";

const ProjectCard = () => {
    const [position, setPosition] = useState({ x: 0, y: 0, opacity: 0 });

    const handleMouseMove = (e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        setPosition({ x, y, opacity: 1 });
    };

    const handleMouseLeave = () => {
        setPosition((prev) => ({ ...prev, opacity: 0 }));
    };

    return (
        <div
            className="relative w-[28.5vw] h-[54vh] border border-[#334155] rounded-xl pl-5 pt-12 pr-4 overflow-hidden transition-all duration-500 hover:scale-[1.002]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Smooth Mouse-Following Gradient */}
            <motion.div
                className="absolute w-60 h-60 bg-gradient-to-br from-[#14B8A6] via-[#293029] to-[#242D2B] rounded-full blur-[90px]"
                animate={{
                    x: position.x - 128, // Centered on cursor
                    y: position.y - 128, // Centered on cursor
                    opacity: position.opacity,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}

                style={{
                    pointerEvents: "none",
                    zIndex: 0, // Keeps it behind text
                }}
            />

            {/* Content (Above the Effect) */}
            <div className="relative z-10">
                <VscActivateBreakpoints className="size-11 mb-3 text-white" />
                <h1 className="font-bold text-[1.5vw] text-white">Project Name</h1>
                <p className="text-[1vw] text-slate-300 pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum
                    hic aut quos exercitationem quasi alias maxime corporis. Quo magni ad
                    tenetur natus consectetur sed reiciendis reprehenderit eum ratione
                    incidunt?
                </p>

                {/* Tech Stack */}
                <div className="flex gap-2 items-center mt-6 flex-wrap">
                    {["Techstack", "Techstack", "Techstack", "Techstack", "Techstack"].map(
                        (tech, index) => (
                            <div
                                key={index}
                                className="text-[0.9vw] rounded-md border border-[#353538] w-17 flex justify-center items-center py-[0.2vw] text-white transition-all duration-300"
                            >
                                {tech}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
