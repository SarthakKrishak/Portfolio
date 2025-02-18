import React from "react";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-[#0F0F0F] text-white z-50">
            {/* Jumping Ball with Effects */}
            <div className="relative">
                <div className="w-6 h-6 bg-[#14B8A6] rounded-full animate-jump-glow shadow-lg"></div>
            </div>

            {/* Tailwind Animations */}
            <style>
                {`
          @keyframes jumpGlow {
            0%, 100% { transform: translateY(0) scale(1); box-shadow: 0px 0px 8px rgba(20, 184, 166, 0.7); }
            50% { transform: translateY(-35px) scale(1.1); box-shadow: 0px 0px 16px rgba(20, 184, 166, 1); }
          }
          .animate-jump-glow {
            animation: jumpGlow 1.2s infinite cubic-bezier(0.5, 0, 0.5, 1);
          }
        `}
            </style>
        </div>
    );
};

export default Loader;
