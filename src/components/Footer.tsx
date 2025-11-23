import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold tracking-tighter text-white">
            AI.Studio
          </h3>
          <p className="text-xs text-gray-500 mt-2">
            © {new Date().getFullYear()} Md. Ranju, All rights reserved.
          </p>
        </div>

        <div className="flex gap-8">
          <a
            href="https://mdranju.vercel.app"
            className="text-xs text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/muhammadranju"
            className="text-xs text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
          >
            Github
          </a>
          <a
            href="https://twitter.com/muhammad_ranju"
            target="_blank"
            className="text-xs text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
