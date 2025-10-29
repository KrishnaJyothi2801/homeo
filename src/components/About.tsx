import Counter from "./Counter";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-white text-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light mb-6">
                            Our Philosophy
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            We believe architecture is more than just buildings—it is about
                            creating experiences, shaping communities, and improving lives.
                            Our approach combines timeless design principles with innovative
                            thinking to deliver spaces that are both beautiful and functional.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            With over 15 years of experience, we have completed projects
                            ranging from intimate residential homes to large-scale commercial
                            developments. Each project receives our full attention and
                            commitment to excellence.
                        </p>

                        <div className="grid grid-cols-3 gap-8 mt-8">
                            <div>
                                <div className="text-4xl font-light mb-2">
                                    <Counter end={150} />+
                                </div>
                                <div className="text-gray-600">Projects</div>
                            </div>

                            <div>
                                <div className="text-4xl font-light mb-2">
                                    <Counter end={15} />
                                </div>
                                <div className="text-gray-600">Years</div>
                            </div>

                            <div>
                                <div className="text-4xl font-light mb-2">
                                    <Counter end={25} />
                                </div>
                                <div className="text-gray-600">Awards</div>
                            </div>
                        </div>

                    </div>

                    <div className="relative h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                            alt="Architecture studio"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
