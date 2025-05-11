import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cloud, Cpu, Layout, Database } from "lucide-react";
import { FaPython, FaLinux, FaGitAlt, FaDocker, FaAndroid, FaApple } from "react-icons/fa";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { SiFirebase, SiLaravel, SiPytorch, SiScikitlearn, SiMysql, SiSwagger } from "react-icons/si";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/20">
    {/* Shimmer effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="relative z-10 p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-gray-800/50 ${color}`}>  
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge bg-gray-800/50 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 hover:bg-gray-700/80 hover:scale-105 transition-transform duration-200"
          >
            {skill.icon}
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        { name: "C/C++", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "Python", icon: <FaPython className="w-4 h-4" /> },
        { name: "Java", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "JavaScript", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "PHP", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "Swift", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "SQL", icon: <Database className="w-4 h-4" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Web & Backend",
      color: "text-green-400",
      skills: [
        { name: "Laravel", icon: <SiLaravel className="w-4 h-4" /> },
        { name: "Swagger",   icon: <SiSwagger className="w-4 h-4" /> },
        { name: "REST API", icon: <BsGrid1X2 className="w-4 h-4" /> },
        { name: "GitHub", icon: <FaGitAlt className="w-4 h-4" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4" /> },
      ],
    },
    {
      icon: Layout,
      title: "Mobile Development",
      color: "text-orange-400",
      skills: [
        { name: "Android", icon: <FaAndroid className="w-4 h-4" /> },
        { name: "iOS", icon: <FaApple className="w-4 h-4" /> },
      ],
    },
    {
      icon: Database,
      title: "Databases & Storage",
      color: "text-purple-400",
      skills: [
        { name: "MySQL", icon: <SiMysql className="w-4 h-4" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4" /> },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Infrastructure",
      color: "text-yellow-400",
      skills: [
        { name: "Linux Shell", icon: <FaLinux className="w-4 h-4" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4" /> },
        { name: "GitHub Actions", icon: <FaGitAlt className="w-4 h-4" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Machine Learning & Data Science",
      color: "text-pink-400",
      skills: [
        { name: "Deep Learning", icon: <Cpu className="w-4 h-4" /> },
        { name: "PyTorch", icon: <SiPytorch className="w-4 h-4" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <main className="pt-24 text-white min-h-screen bg-[#04081A] relative">
      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} icon={category.icon} title={category.title} skills={category.skills} color={category.color} />
          ))}
        </div>
      </section>
      {/* Shimmer animation styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
