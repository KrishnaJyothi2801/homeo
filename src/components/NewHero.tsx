import { ArrowRightIcon } from 'lucide-react'

export default function NewHero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                <h1
                    className="text-5xl md:text-7xl font-light mb-6 tracking-[0.06em]"
                    style={{ fontFamily: 'Inter, sans-serif' }}

                >
                    Designing Spaces
                    <br />
                    That Inspire
                </h1>

                <p
                    className="text-xl md:text-2xl font-light mb-8 text-gray-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    Contemporary architecture that blends form, function, and innovation
                </p>

                <a
                    href="#projects"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    <span>View Our Work</span>
                    <ArrowRightIcon size={20} />
                </a>
            </div>
        </section>
    )
}
