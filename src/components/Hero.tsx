import Player from "lottie-react";

type HeroProps = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  ctaText: string;
  ctaLink: string;
  heroAnimation?: any;
};

export default function Hero({
  title,
  subtitle,
  imageUrl,
  ctaText,
  ctaLink,
  heroAnimation,
}: HeroProps) {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Hero image"
          className="w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-[#E8F6F6] bg-opacity-40 flex items-center px-6 z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-20">
          {/* Left */}
          <div className="w-full md:w-1/2 text-center z-30">
            <h1 className="text-5xl md:text-7xl font-bold text-[#03045e] mb-4 mt-20 md:mt-0">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-[#0077b6] max-w-lg mx-auto mb-6">
              {subtitle}
            </p>
            <a
              href={ctaLink}
              className="relative z-40 bg-[#0077b6] hover:bg-[#03045e] text-white px-8 py-3 rounded-lg text-lg font-medium inline-block"
            >
              {ctaText}
            </a>
          </div>

          {/* Right */}
          {heroAnimation && (
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 pointer-events-none">
              <div className="scale-125 md:scale-150">
                <Player
                  autoplay
                  loop
                  animationData={heroAnimation}
                  className="w-64 h-64 md:w-80 md:h-80"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
