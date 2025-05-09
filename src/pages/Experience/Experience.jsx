import React from "react";
import { Code2, Layers } from "lucide-react";

const ExperienceCard = ({ title, company, period, description, icon: Icon }) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glassmorphism background */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 border border-gray-800/50 shadow-xl backdrop-blur-xl">
      <div className="mb-6">
        <Icon className="w-12 h-12 text-cyan-400" />
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">{period}</span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Layers,
      title: "Team Lead, PHP Stack",
      company: "Learnathon 3.0 - BanglaHire",
      period: "Jan 2025 – Present",
      description:
        "Led a team of three to design and implement BanglaHire, a freelancer hiring platform using PHP, Laravel, and MySQL.",
    },
    {
      icon: Code2,
      title: "Competitive Programmer",
      company: "Codeforces, LeetCode, HackerRank",
      period: "Ongoing",
      description:
        "Solved over 600 coding challenges across various competitive programming platforms, honing problem-solving and algorithmic skills.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#04081A] relative overflow-hidden pt-32 pb-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F20] to-[#04081A]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Section header */}
      <div className="relative container mx-auto px-6 mt-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          Professional Journey
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-medium mt-4">
          Transforming ideas into digital reality, one project at a time
        </p>
      </div>

      {/* Experiences grid */}
      <div className="relative container mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>

      {/* Subtle decorative glows */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />

      {/* Shimmer animation */}
      <style jsx>{`
        @keyframes gradient-xy {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default ExperienceSection;
