export default function Home() {
  return (
    <section className="container mx-auto px-4 pt-16! bg-amber-50">
      {/* Hero Section */}
      <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden mb-12">
        <img
          src="https://png.pngtree.com/background/20210709/original/pngtree-male-doctor-minimalist-background-picture-picture-image_962441.jpg"
          alt="Doctor consultation"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-8xl! text-blue-950 font-bold mb-10!">
            Healing Through Homeopathy
          </h1>
          <p className="text-3xl text-blue-950 font-bold max-w-2xl">
            Experience holistic and natural healing with Dr. Mony, trusted by
            families for over 30 years.
          </p>
          <a
            href="/contact"
            className="mt-10! bg-amber-600 p-5! rounded-lg shadow hover:bg-green-700"
          >
            Book Appointment
          </a>
        </div>
      </div>

      {/* Services Preview */}
      <div className="grid md:grid-cols-3 gap-8 text-center p-10! bg-[#7DDEFD]!">
        <div className="bg-[#7DDEFD] shadow-md p-6 rounded-xl">
          <img
            src="https://media.istockphoto.com/id/1988844230/photo/paediatric-medical-check-up.jpg?s=612x612&w=0&k=20&c=hz7jXpJmcvxSVkJLBucMOem1CYpjTGF-z0dUPGNSCgA="
            alt="Kids homeopathy"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl! text-blue-950 font-semibold mb-2">
            Children’s Care
          </h3>
          <p className="text-sm text-gray-800">
            Gentle, safe remedies for children’s health and immunity.
          </p>
        </div>

        <div className="bg-[#7DDEFD] shadow-md p-6 rounded-xl">
          <img
            src="https://www.janeylhammonsnpc.com/wp-content/uploads/chronic-disease-management-2107.jpg"
            alt="Chronic care"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl! text-blue-950 font-semibold mb-2">
            Chronic Conditions
          </h3>
          <p className="text-sm text-gray-800">
            Effective long-term care for asthma, arthritis, and more.
          </p>
        </div>

        <div className="bg-[#7DDEFD] shadow-md p-6 rounded-xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsSXYYyX_Lkkxr4EBs26_9KihpBiSDM-30g&s"
            alt="Women health"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl! text-blue-950 font-semibold mb-2">
            Women’s Wellness
          </h3>
          <p className="text-sm text-gray-800">
            Natural treatments for hormonal balance and well-being.
          </p>
        </div>
      </div>
    </section>
  );
}
