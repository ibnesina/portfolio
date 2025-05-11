import React from "react";
import {
  Mail,
  MapPin,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl transition-all hover:shadow-blue-500/30 duration-300">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-500/20 p-3 rounded-xl shadow-md">
              <Mail className="w-6 h-6 text-blue-300" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium text-white">ibnesina10@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-purple-500/20 p-3 rounded-xl shadow-md">
              <MapPin className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-medium text-white">Mohakhali, Dhaka</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/md.sina.9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition duration-300"
          >
            <Facebook className="w-6 h-6 text-blue-400 hover:text-blue-500" />
          </a>
          <a
            href="https://github.com/ibnesina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition duration-300"
          >
            <Github className="w-6 h-6 text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/ibnesina10/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition duration-300"
          >
            <Linkedin className="w-6 h-6 text-sky-400 hover:text-sky-500" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition duration-300"
          >
            <Twitter className="w-6 h-6 text-sky-300 hover:text-sky-400" />
          </a>
        </div>
      </div>
    </main>
  );
}
