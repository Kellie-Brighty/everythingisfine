import { useState, useEffect } from "react";
import { gsap } from "gsap";

const quotes = [
  "This is totally normal market behavior, right?",
  "Just a slight $6B+ correction, nothing to see here",
  "Remember when we said 'to the moon'? We meant the other direction",
  "Sell low, buy lower... that's how it works, right?",
  "No need to check your portfolio, trust me",
  "Zoom out to the 100 year chart and we're still up!",
  "Diamond hands or just frozen in fear?",
  "Buy the dip! No, wait... THIS dip? Oh...",
  "Who needs money anyway? Money is just paper",
  "I'm sure the team is working on something... right?",
];

const MotivationalQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [_isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      // Animate out current quote
      gsap.to("#quote-text", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          setCurrentQuote((prev) => (prev + 1) % quotes.length);

          // Animate in new quote
          gsap.to("#quote-text", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            onComplete: () => {
              setIsAnimating(false);
            },
          });
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Bold statements about market crash */}
      <div className="bg-gradient-to-r from-red-900/90 to-black/90 backdrop-blur-sm p-4 md:p-6 rounded-lg mx-auto text-center fire-border fire-glow w-full max-w-2xl">
        <p className="text-red-100 font-bold text-sm md:text-lg fire-flicker">
          ALL $OM HOLDERS CAN SAY IS EVERYTHING IS $FINE THOUGH THEY ARE ON FIRE
        </p>
        <p className="text-red-300 font-bold mt-2 text-xs md:text-base">
          $OM IS THE LUNA OF THIS CYCLE
        </p>
        <p className="text-yellow-200 font-bold mt-2 text-xs md:text-sm">
          $6B+ WORTH OF $OM WIPED OUT WITHIN 30MINS
        </p>
      </div>

      {/* Sarcastic quotes carousel */}
      <div className="bg-gradient-to-br from-red-900/70 to-black/70 backdrop-blur-sm p-4 md:p-6 rounded-lg w-full max-w-md mx-auto text-center fire-border fire-glow">
        <p
          id="quote-text"
          className="text-base md:text-xl font-medium text-red-200 flame-text min-h-[3rem]"
        >
          {quotes[currentQuote]}
        </p>
        <div className="text-xs text-red-400 mt-2 italic">
          Everything is <span className="fire-flicker font-bold">$FINE</span>...
          right?
        </div>
      </div>
    </div>
  );
};

export default MotivationalQuotes;
