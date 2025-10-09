"use client";

type PricingCardProps = {
    title: string;
    price: string;
    features: string[];
    ctaText?: string;
    popular?: boolean;
};

export default function PricingCard({
    title,
    price,
    features,
    ctaText,
    popular = false,
}: PricingCardProps) {
    return (
        <div className="relative bg-gradient-to-br from-white to-[#E0F7FA] rounded-xl shadow-md p-6 flex flex-col justify-between transform hover:scale-105 hover:shadow-xl transition-transform duration-300">
            {popular && (
                <span className="absolute top-4 right-4 bg-[#0077b6] text-white px-3 py-1 text-sm rounded-full font-medium">
                    Popular
                </span>
            )}

            <div>
                <h3 className="text-2xl font-semibold text-[#03045e] mb-2">{title}</h3>
                <p className="text-3xl font-bold text-[#0077b6] mb-6">{price}</p>
                <ul className="mb-6 space-y-3 text-[#0077b6]">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <svg
                                className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.293 10.879a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {ctaText && (
                <a
                    href="/book_appointment"
                    className="cursor-pointer bg-[#0077b6] hover:bg-[#03045e] text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                    {ctaText}
                </a>
            )}
        </div>
    );
}
