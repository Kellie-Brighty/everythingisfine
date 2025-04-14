import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MotivationalQuotes from "./components/MotivationalQuotes";
import MarketScene from "./components/MarketScene";
import BuyTheDip from "./components/BuyTheDip";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a minimum loading time to ensure UI is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App w-full min-h-screen bg-dark overflow-hidden relative">
      <Header />

      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <div className="text-white text-xl bg-gradient-to-r from-red-900/90 to-black/90 p-6 rounded-lg fire-border fire-glow">
            <div className="animate-pulse">Loading market chaos...</div>
            <div className="mt-2 text-sm text-red-300">
              Stay calm, everything is <span className="flame-text">fine</span>.
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section - Market Chaos */}
          <section id="market-chaos" className="relative">
            <MarketScene />
          </section>

          {/* Motivational Quotes Section */}
          <section
            id="motivation"
            className="relative py-12 md:py-16 bg-gradient-to-b from-black/95 to-red-950/80 z-10"
          >
            <div className="container mx-auto px-4">
              <h2 className="market-title text-center mb-8">This Is Fine</h2>
              <MotivationalQuotes />
            </div>
          </section>

          {/* Community Section */}
          <section
            id="community"
            className="relative py-12 md:py-16 bg-gradient-to-b from-red-950/80 to-black/95 z-10"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <SocialLinks />
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="relative py-8 bg-black border-t border-red-900/50 z-10">
            <div className="container mx-auto px-4 text-center text-red-300 text-sm">
              <p>$FINE — Everything is fire. But it's fine.</p>
              <p className="mt-2 text-xs text-red-500">
                This is definitely not financial advice.
              </p>
            </div>
          </footer>

          {/* Buy The Dip Modal (floating/popup) */}
          <BuyTheDip />
        </>
      )}
    </div>
  );
}

export default App;
