import { useState, useEffect } from "react";
import omImage from "../assets/om-image.png";

const BuyTheDip = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open modal every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true);

      // Auto-close after 15 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 15000);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-gradient-to-br from-red-900 to-black p-4 sm:p-6 rounded-lg w-full max-w-md sm:max-w-lg border-2 border-red-500 fire-glow intense-fire">
        {/* Decorative fire particles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="fire-flames absolute left-1/4 top-0 w-8 h-12 bg-gradient-to-t from-red-600 to-yellow-500 rounded-b-full blur-sm -translate-y-1/2"></div>
          <div className="fire-flames absolute left-1/2 top-0 w-6 h-8 bg-gradient-to-t from-red-600 to-yellow-500 rounded-b-full blur-sm -translate-y-1/2"></div>
          <div className="fire-flames absolute left-3/4 top-0 w-10 h-14 bg-gradient-to-t from-red-600 to-yellow-500 rounded-b-full blur-sm -translate-y-1/2"></div>
          <div
            className="ash absolute left-10 bottom-10"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="ash absolute left-20 bottom-20"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="ash absolute right-10 bottom-15"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="ash absolute right-20 bottom-25"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <div className="flex items-center">
            <div className="rounded-full bg-gradient-to-br from-red-600 to-orange-500 p-1 fire-flicker">
              <img
                src={omImage}
                alt="$FINE"
                className="h-6 w-6 sm:h-8 sm:w-8 mr-2"
              />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 filter blur-md opacity-70 fire-flicker"></div>
            </div>
            <h2 className="text-white text-lg sm:text-xl font-bold ml-2 relative">
              Buy <span className="flame-text burning-text">$Fine</span>
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-red-600 to-orange-500 opacity-70"></div>
            </h2>
          </div>
          <button
            className="text-red-400 hover:text-red-300 hover:scale-110 transition-all p-1"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="aspect-video bg-black mb-3 sm:mb-4 rounded overflow-hidden fire-border fire-glow">
          <video controls autoPlay className="w-full h-full object-contain">
            <source src="/src/assets/new-buy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="text-center">
          <p className="text-red-200 mb-3 sm:mb-4 text-sm sm:text-base">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-bold text-base sm:text-lg">
              $6B+ WORTH OF $OM WIPED OUT IN 30 MINS
            </span>
            <br />
            Despite the market <span className="line-through">crash</span>{" "}
            conditions, <span className="flame-text fire-flicker">$FINE</span>{" "}
            remains a strong project. This is just temporary volatility -
            everything is <span className="burning-text font-bold">FINE</span>!
          </p>

          <div className="flex justify-center gap-4 sm:gap-6 mt-3 sm:mt-4">
            <a
              href="https://x.com/fineonerc20"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-900 to-black p-2 sm:p-3 rounded-full hover:bg-red-800 transition-all flex flex-col items-center fire-border hover:scale-110"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ff3a33"
                  viewBox="0 0 24 24"
                  className="fire-flicker"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 filter blur-sm opacity-70 fire-flicker"></div>
              </div>
              <span className="text-red-200 text-xs mt-1 font-bold">
                Twitter
              </span>
            </a>
            <a
              href="https://t.me/Everythingisfineeth"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-900 to-black p-2 sm:p-3 rounded-full hover:bg-red-800 transition-all flex flex-col items-center fire-border hover:scale-110"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ff3a33"
                  viewBox="0 0 24 24"
                  className="fire-flicker"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 filter blur-sm opacity-70 fire-flicker"></div>
              </div>
              <span className="text-red-200 text-xs mt-1 font-bold">
                Telegram
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTheDip;
