type HeroProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
};

export default function Hero({ title, subtitle, imageUrl, ctaText, ctaLink }: HeroProps) {
  return (
    <div className="relative w-full h-[500px]">
      <img src={imageUrl} alt="Hero image" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl mb-6">{subtitle}</p>
        <a href={ctaLink} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg">
          {ctaText}
        </a>
      </div>
    </div>
  );
}
