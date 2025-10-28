"use client";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4 md:mb-0">
            FlashCast ⚡
          </div>
          <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Discord
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Docs
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          © 2025 FlashCast. Built on Linera Protocol.
        </div>
      </div>
    </footer>
  );
}