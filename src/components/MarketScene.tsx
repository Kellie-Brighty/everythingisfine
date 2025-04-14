import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import omImage from "../assets/om-image.png";

const MarketScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dogRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [showBuyModal, setShowBuyModal] = useState(false);

  // Setup animations once component mounts
  useEffect(() => {
    if (dogRef.current) {
      // Animate dog slightly up and down
      gsap.to(dogRef.current, {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    if (bubbleRef.current) {
      // Animate speech bubble
      gsap.to(bubbleRef.current, {
        y: -5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Create falling candlesticks
    if (containerRef.current) {
      // Create OM tokens falling - reduced for better performance and less crowding
      const tokenCount = window.innerWidth < 768 ? 8 : 15;
      for (let i = 0; i < tokenCount; i++) {
        createOMToken(containerRef.current);
      }

      // Create candles - reduced for mobile
      const candleCount = window.innerWidth < 768 ? 5 : 10;
      for (let i = 0; i < candleCount; i++) {
        createCandle(containerRef.current);
      }

      // Create flames - reduced for mobile
      const flameCount = window.innerWidth < 768 ? 15 : 30;
      for (let i = 0; i < flameCount; i++) {
        createFlame(containerRef.current);
      }
    }

    // Show buy modal occasionally - less frequently on mobile
    const interval = window.innerWidth < 768 ? 60000 : 45000;
    const buyInterval = setInterval(() => {
      setShowBuyModal(true);
      setTimeout(() => setShowBuyModal(false), 5000);
    }, interval);

    return () => clearInterval(buyInterval);
  }, []);

  // Function to create falling OM tokens
  const createOMToken = (container: HTMLDivElement) => {
    const token = document.createElement("div");

    // Random position
    const size = 15 + Math.random() * 25; // Slightly smaller tokens
    const startX = Math.random() * window.innerWidth;
    const startY = -100 - Math.random() * 500;
    const rotation = Math.random() * 360;

    // Create the token with the OM image
    token.style.position = "absolute";
    token.style.width = `${size}px`;
    token.style.height = `${size}px`;
    token.style.backgroundImage = `url(${omImage})`;
    token.style.backgroundSize = "contain";
    token.style.backgroundRepeat = "no-repeat";
    token.style.left = `${startX}px`;
    token.style.top = `${startY}px`;
    token.style.transform = `rotate(${rotation}deg)`;
    token.className = "absolute";

    container.appendChild(token);

    // Animate the token falling with slower speed
    gsap.to(token, {
      y: window.innerHeight + 100,
      rotation: `+=${Math.random() * 720 - 360}`,
      duration: 8 + Math.random() * 10, // Slower falling
      ease: "none",
      onComplete: () => {
        container.removeChild(token);
        createOMToken(container);
      },
    });
  };

  // Function to create a falling candlestick
  const createCandle = (container: HTMLDivElement) => {
    const candle = document.createElement("div");

    // Random size and position
    const height = 40 + Math.random() * 80;
    const width = 10;
    const startX = Math.random() * window.innerWidth;
    const startY = -100 - Math.random() * 500;
    const rotation = Math.random() * 360;

    // Style the candle
    candle.style.position = "absolute";
    candle.style.width = `${width}px`;
    candle.style.height = `${height}px`;
    candle.style.backgroundColor = "#ff3a33";
    candle.style.left = `${startX}px`;
    candle.style.top = `${startY}px`;
    candle.style.transform = `rotate(${rotation}deg)`;
    candle.className = "absolute";

    container.appendChild(candle);

    // Animate the candle falling with slower speed
    gsap.to(candle, {
      y: window.innerHeight + 100,
      rotation: `+=${Math.random() * 720 - 360}`,
      duration: 9 + Math.random() * 10, // Slower falling
      ease: "none",
      onComplete: () => {
        container.removeChild(candle);
        createCandle(container);
      },
    });
  };

  // Function to create flames at the bottom
  const createFlame = (container: HTMLDivElement) => {
    const flame = document.createElement("div");

    // Random size and position
    const size = 10 + Math.random() * 40;
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight - 50 - Math.random() * 50;

    // Create a hue variation around red/orange
    const hue =
      Math.random() < 0.8 ? 0 + Math.random() * 10 : 30 + Math.random() * 10; // More reds, fewer oranges
    const lightness = 50 + Math.random() * 30;

    // Style the flame
    flame.style.position = "absolute";
    flame.style.width = `${size}px`;
    flame.style.height = `${size}px`;
    flame.style.borderRadius = "50%";
    flame.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
    flame.style.left = `${startX}px`;
    flame.style.top = `${startY}px`;
    flame.style.filter = "blur(3px)";
    flame.style.opacity = "0.85";
    flame.style.boxShadow = "0 0 20px 0 rgba(255, 0, 0, 0.5)";
    flame.className = "absolute";

    container.appendChild(flame);

    // Animate the flame with slower movement
    gsap.to(flame, {
      y: `-=${50 + Math.random() * 150}`,
      scale: 0.1,
      opacity: 0,
      duration: 3 + Math.random() * 4, // Slower movement
      ease: "power1.out",
      onComplete: () => {
        container.removeChild(flame);
        createFlame(container);
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden fire-gradient pt-20 sm:pt-24"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-red-900/30 z-0"></div>

      {/* Background images */}
      <div className="absolute w-full h-full opacity-10">
        <img
          src={image1}
          alt=""
          className="absolute top-1/4 left-5 sm:left-10 w-2/5 sm:w-1/3 rounded-lg rotate-3"
        />
        <img
          src={image2}
          alt=""
          className="absolute top-1/3 right-5 sm:right-10 w-2/5 sm:w-1/3 rounded-lg -rotate-3"
        />
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 w-full h-1/6 sm:h-1/5 bg-gradient-to-t from-red-900 to-red-700 fire-glow"></div>

      {/* Chart line */}
      <div className="absolute bottom-1/6 sm:bottom-1/5 w-full h-32 sm:h-40 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L50,20 L100,15 L150,40 L200,30 L250,35 L300,15 L350,25 L400,15 L450,40 L500,10 L550,30 L600,5 L650,25 L700,0 L750,30 L800,10 L850,40 L900,5 L950,70 L1000,90"
            stroke="#ff3333"
            strokeWidth="4"
            fill="none"
            className="fire-flicker"
            strokeLinecap="round"
            strokeDasharray="1, 15"
          />
          <path
            d="M0,10 L50,30 L100,25 L150,50 L200,40 L250,45 L300,25 L350,35 L400,25 L450,50 L500,20 L550,40 L600,15 L650,35 L700,10 L750,40 L800,20 L850,50 L900,15 L950,80 L1000,100"
            stroke="#ff0000"
            strokeWidth="2"
            fill="none"
            className="fire-flicker"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Price information - Centered on mobile, moved to left on desktop */}
      <div className="absolute top-4 sm:top-20 md:top-36 left-1/2 sm:left-auto right-auto sm:right-4 md:left-10 md:right-auto transform -translate-x-1/2 sm:translate-x-0 bg-gradient-to-br from-red-900/80 to-black/80 p-3 sm:p-4 rounded-lg backdrop-blur-md fire-border fire-glow z-10 max-w-[220px] sm:max-w-[180px] md:max-w-none">
        <div className="text-red-300 font-bold mb-1 text-base md:text-lg">
          $FINE Token <span className="text-xs text-yellow-400">(was $OM)</span>
        </div>
        <div className="text-red-100 text-xs md:text-sm mt-1">
          Everything is <span className="flame-text">FINE</span>
        </div>
        <div className="text-red-100 text-xs md:text-sm">
          Just a <span className="text-red-400">-99.7%</span> correction
        </div>
        <a
          href="https://t.me/Everythingisfineeth"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 md:mt-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white py-1 md:py-2 px-3 md:px-4 rounded-full text-xs md:text-sm font-bold transition-colors inline-block fire-glow"
        >
          Buy the ashes 🔥
        </a>
      </div>

      {/* Dog character with table and coffee - Sized properly for mobile */}
      <div
        ref={dogRef}
        className="absolute left-1/2 bottom-1/6 sm:bottom-1/5 transform -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64"
        style={{ willChange: "transform" }}
      >
        {/* Flames around the dog */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-36 sm:w-48 h-6 sm:h-8 rounded-full bg-red-600 filter blur-lg opacity-50 fire-flicker"></div>

        {/* Table */}
        <div className="absolute bottom-0 left-1/2 w-32 sm:w-40 h-8 sm:h-10 bg-[#8B4513] rounded-lg transform -translate-x-1/2"></div>

        {/* Table legs */}
        <div className="absolute bottom-0 left-12 sm:left-16 w-2 sm:w-3 h-16 sm:h-20 bg-[#8B4513] -mb-16 sm:-mb-20"></div>
        <div className="absolute bottom-0 right-12 sm:right-16 w-2 sm:w-3 h-16 sm:h-20 bg-[#8B4513] -mb-16 sm:-mb-20"></div>

        {/* Coffee cup */}
        <div className="absolute bottom-8 sm:bottom-10 right-8 sm:right-10 w-8 sm:w-10 h-10 sm:h-12 bg-[#ff3333] rounded-lg fire-glow">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 sm:w-6 h-1.5 sm:h-2 bg-red-600 filter blur-md opacity-70 fire-flicker"></div>
        </div>

        {/* Dog body */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 w-20 sm:w-24 h-24 sm:h-32 bg-[#C4A484] rounded-full transform -translate-x-1/2"></div>

        {/* Dog head */}
        <div className="absolute bottom-36 sm:bottom-48 left-1/2 w-16 sm:w-20 h-16 sm:h-20 bg-[#D2B48C] rounded-full transform -translate-x-1/2"></div>

        {/* Dog ears */}
        <div className="absolute bottom-42 sm:bottom-56 left-16 sm:left-20 w-8 sm:w-10 h-12 sm:h-16 bg-[#C4A484] rounded-full rotate-12"></div>
        <div className="absolute bottom-42 sm:bottom-56 right-16 sm:right-20 w-8 sm:w-10 h-12 sm:h-16 bg-[#C4A484] rounded-full -rotate-12"></div>

        {/* Dog eyes - panicked */}
        <div className="absolute bottom-38 sm:bottom-50 left-1/3 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full"></div>
        <div className="absolute bottom-38 sm:bottom-50 right-1/3 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full"></div>

        {/* Dog pupils - wide with fear */}
        <div className="absolute bottom-38 sm:bottom-50 left-1/3 w-2 sm:w-3 h-2 sm:h-3 bg-black rounded-full transform translate-x-0.5 translate-y-0.5"></div>
        <div className="absolute bottom-38 sm:bottom-50 right-1/3 w-2 sm:w-3 h-2 sm:h-3 bg-black rounded-full transform -translate-x-0.5 translate-y-0.5"></div>

        {/* Sweat drops */}
        <div className="absolute bottom-34 sm:bottom-44 left-12 sm:left-14 w-1.5 sm:w-2 h-3 sm:h-4 bg-blue-300 rounded-full transform rotate-15 opacity-80"></div>

        {/* Dog hat */}
        <div className="absolute bottom-48 sm:bottom-64 left-1/2 w-12 sm:w-16 h-10 sm:h-12 bg-[#FF0000] rounded-full transform -translate-x-1/2 fire-glow">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-2 sm:h-3 bg-red-600 filter blur-md opacity-70 fire-flicker"></div>
        </div>
      </div>

      {/* Speech bubble - Repositioned for mobile */}
      <div
        ref={bubbleRef}
        className="absolute left-1/2 top-[45%] sm:top-32 transform -translate-x-1/2 sm:-translate-x-1/4 bg-white p-2 sm:p-3 rounded-xl w-36 sm:w-40 md:w-48 text-center fire-border"
        style={{ willChange: "transform" }}
      >
        <div className="text-black font-bold text-xs sm:text-sm md:text-base">
          Everything is <span className="flame-text fire-flicker">fine</span>
        </div>
        <div className="text-[10px] sm:text-xs md:text-sm text-red-600">
          This is <span className="line-through">not</span> financial advice
        </div>
        <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-white transform rotate-45 -translate-x-1/2 fire-border"></div>
      </div>

      {/* Buy modal - Made responsive for mobile */}
      {showBuyModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
          <div className="bg-gradient-to-br from-red-900 to-black p-4 sm:p-6 rounded-xl border-2 border-red-500 w-full max-w-xs animate-bounce fire-glow">
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src={omImage}
                  alt="$FINE"
                  className="h-10 w-10 sm:h-12 sm:w-12 mr-2"
                />
                <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-red-600 filter blur-md opacity-70 fire-flicker"></div>
              </div>
              <div className="text-lg sm:text-xl text-white font-bold">
                Buy <span className="flame-text fire-flicker">$FINE!</span>
              </div>
            </div>
            <div className="text-red-300 text-center mt-2 text-sm">
              <span className="line-through text-red-400">-99.7%</span>{" "}
              <span className="text-yellow-400">OPPORTUNITY!</span>
            </div>
            <a
              href="https://t.me/Everythingisfineeth"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto block w-full mt-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white py-2 px-4 rounded-full text-sm font-bold transition-colors"
            >
              <span className="fire-flicker">🔥</span> Buy $Fine{" "}
              <span className="fire-flicker">🔥</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketScene;
