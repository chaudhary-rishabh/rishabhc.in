import React from "react";

const SkillsText = () => {
    return (
        <>
            <div className="mx-auto w-80 grid grid-cols-2">
                <div className="w-36 mt-5 border gap-2 text-4xl text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-4 animate-border-gradient">
                    <div className="text-base font-bold" title="Next.js">DSA</div>{/* make a vertical slider here with all the skills */}
                </div>
                <div className="w-40 mt-5 border gap-4 text-3xl text-blue-500/80 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-4 animate-border-gradient">
                    <ol>
                        <li className="text-base font-bold text-shadow">Full-Stack</li>
                        <li className="text-base font-bold text-shadow">DevOps</li>
                        <li className="text-base font-bold text-shadow">System Design</li>
                        <li className="text-base font-bold text-shadow">Cloud</li>
                    </ol>
                </div>
            </div>
            <div className="mx-auto w-80 grid grid-cols-2">
                <div className="grid grid-cols-5 w-80 mt-4 border gap-5 text-blue-500 border-blue-300 rounded-3xl shadow-2xl shadow-blue-300 bg-white p-4 animate-border-gradient">
                    <div className="font-sm font-bold" title="Next.js">SEO</div>
                    <div className="font-sm font-bold" title="Next.js">ReactJs</div>
                    <div className="font-sm font-bold" title="Next.js">NextJs</div>
                    <div className="font-sm font-bold" title="Next.js">Jenkins</div>
                    <div className="font-sm font-bold" title="Next.js">AWS</div> {/* make a horizontal slider here with all the skills */}
                    <div className="font-sm font-bold" title="Next.js">NextJs</div>
                    <div className="font-sm font-bold" title="Next.js">Tailwind</div>
                </div>
            </div>

        </>
    );
};

export default SkillsText;
