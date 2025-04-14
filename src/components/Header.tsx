import omImage from "../assets/om-image.png";

const Header = () => {
  // Simulate price changes

  return (
    <div className="fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-red-900/90 to-black/90 backdrop-blur-md fire-glow intense-fire">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="rounded-full bg-gradient-to-br from-red-500 to-orange-500 p-1 fire-flicker">
              <img
                src={omImage}
                alt="$FINE"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain relative"
              />
              <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-red-600 filter blur-md opacity-70 fire-flicker rounded-full"></div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 relative">
              <span className="opacity-20 absolute -top-3 sm:-top-4 left-0 text-red-500 blur-sm">
                FINE
              </span>
              Everything is{" "}
              <span className="flame-text burning-text font-bold">Fine</span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-500 opacity-70 rounded-full fire-flicker"></div>
            </h1>
          </div>
        </div>
      </div>

      {/* Decorative fire particles - Adjusted visibility for mobile */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
        <div className="fire-flames absolute left-2 sm:left-10 bottom-0 w-6 sm:w-8 h-8 sm:h-12 bg-gradient-to-b from-yellow-500 to-red-600 rounded-t-full blur-sm"></div>
        <div className="fire-flames absolute left-12 sm:left-20 bottom-0 w-4 sm:w-6 h-6 sm:h-8 bg-gradient-to-b from-yellow-500 to-red-600 rounded-t-full blur-sm"></div>
        <div className="fire-flames absolute left-24 sm:left-30 bottom-0 w-6 sm:w-10 h-10 sm:h-14 bg-gradient-to-b from-yellow-500 to-red-600 rounded-t-full blur-sm hidden sm:block"></div>
        <div className="fire-flames absolute right-2 sm:right-10 bottom-0 w-6 sm:w-8 h-8 sm:h-12 bg-gradient-to-b from-yellow-500 to-red-600 rounded-t-full blur-sm"></div>
        <div className="fire-flames absolute right-12 sm:right-20 bottom-0 w-4 sm:w-6 h-6 sm:h-8 bg-gradient-to-b from-yellow-500 to-red-600 rounded-t-full blur-sm"></div>
        <div className="fire-flames absolute right-24 sm:right-30 bottom-0 w-6 sm:w-10 h-10 sm:h-14 bg-gradient-to-b from-yellow-500 to-red-600 rounded-t-full blur-sm hidden sm:block"></div>
      </div>
    </div>
  );
};

export default Header;
