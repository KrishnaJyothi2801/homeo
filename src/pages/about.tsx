import Player from "lottie-react";
import heroAnimation from "@/assets/hero-animation.json";

export default function About() {
  return (
    <section className="container mx-auto p-16! pt-28! bg-[#7DDEFD] w-screen h-screen">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* <img src="https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg" alt="Dr. [Name]" className="w-full rounded-2xl shadow-lg" /> */}
        <Player
          animationData={heroAnimation}
          loop
          autoplay
          className="w-full h-[450px]"
        />
        <div>
          <h1 className="text-5xl! font-bold text-blue-950 mb-4!">About Dr. Siva Subramaniyam</h1>
          <p className="text-blue-950 mb-4! mr-10!">
            With over 30 years of dedicated service in homeopathy, Dr. Mony has been a trusted health partner for families, treating patients with care, compassion, and holistic methods.
          </p>
          <p className="text-blue-950 mr-10!">
            Known for expertise in treating chronic conditions and promoting overall wellness, Dr. Mony combines traditional knowledge with modern approaches for safe and lasting results.
          </p>
        </div>
      </div>
    </section>
  )
}
