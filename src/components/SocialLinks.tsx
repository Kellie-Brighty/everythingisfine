import { useState } from "react";

const SocialLinks = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x0000000000000000000000000000000000000000";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Contract Address */}
      <div className="bg-gradient-to-r from-red-900/90 to-black/90 backdrop-blur-sm p-4 md:p-6 rounded-lg text-center fire-border fire-glow max-w-lg mx-auto w-full">
        <h3 className="text-red-100 text-lg md:text-xl font-bold mb-3">
          Contract Address
        </h3>
        <div
          className="bg-gradient-to-r from-black to-red-950 py-2 px-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-red-950 transition-all fire-border mx-auto max-w-md"
          onClick={handleCopyAddress}
        >
          <div className="text-red-200 text-xs md:text-sm font-medium relative">
            {`${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}`}
            <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-red-600 to-orange-500 opacity-70"></div>
          </div>
          <div className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 p-1.5 rounded text-xs text-white font-bold relative intense-fire">
            {copied ? "Copied!" : "Copy CA"}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 filter blur-sm opacity-70 fire-flicker rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://x.com/fineonerc20"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-900/90 to-black/90 backdrop-blur-sm p-4 rounded-lg hover:bg-red-800 transition-all flex flex-col items-center gap-2 fire-border hover:scale-105 w-[140px] md:w-[160px] group"
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#ff3a33"
              viewBox="0 0 24 24"
              className="fire-flicker"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 filter blur-sm opacity-70 fire-flicker"></div>
          </div>
          <span className="text-red-200 text-sm md:text-base font-bold group-hover:text-red-100">
            Twitter
          </span>
        </a>

        <a
          href="https://t.me/Everythingisfineeth"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-900/90 to-black/90 backdrop-blur-sm p-4 rounded-lg hover:bg-red-800 transition-all flex flex-col items-center gap-2 fire-border hover:scale-105 w-[140px] md:w-[160px] group"
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#ff3a33"
              viewBox="0 0 24 24"
              className="fire-flicker"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 filter blur-sm opacity-70 fire-flicker"></div>
          </div>
          <span className="text-red-200 text-sm md:text-base font-bold group-hover:text-red-100">
            Telegram
          </span>
        </a>

        <a
          href="https://dexscreener.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-900/90 to-black/90 backdrop-blur-sm p-4 rounded-lg hover:bg-red-800 transition-all flex flex-col items-center gap-2 fire-border hover:scale-105 w-[140px] md:w-[160px] group"
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff3a33"
              strokeWidth="2"
              className="fire-flicker"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 filter blur-sm opacity-70 fire-flicker"></div>
          </div>
          <span className="text-red-200 text-sm md:text-base font-bold group-hover:text-red-100">
            Chart
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
