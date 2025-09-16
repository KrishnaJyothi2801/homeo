// app/services/page.tsx
export default function Services() {
  const services = [
    {
      title: "Children’s Care",
      desc: "Safe and natural remedies for common childhood illnesses and immunity building.",
      img: "https://media.istockphoto.com/id/1988844230/photo/paediatric-medical-check-up.jpg?s=612x612&w=0&k=20&c=hz7jXpJmcvxSVkJLBucMOem1CYpjTGF-z0dUPGNSCgA="
    },
    {
      title: "Chronic Illness",
      desc: "Long-term management for conditions like asthma, arthritis, and migraines.",
      img: "https://www.janeylhammonsnpc.com/wp-content/uploads/chronic-disease-management-2107.jpg"
    },
    {
      title: "Skin & Allergies",
      desc: "Gentle treatment for eczema, psoriasis, and seasonal allergies.",
      img: "https://www.janeylhammonsnpc.com/wp-content/uploads/chronic-disease-management-2107.jpg"
    },
    {
      title: "Women’s Wellness",
      desc: "Hormonal balance, menstrual health, and holistic women’s care.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsSXYYyX_Lkkxr4EBs26_9KihpBiSDM-30g&s"
    }
  ]

  return (
    <section className="container mx-auto p-16! pt-28! bg-[#7DDEFD]">
      <h1 className="text-5xl! font-bold! text-center text-blue-950 mb-12!">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {services.map((s, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden">
            <img src={s.img} alt={s.title} className="w-full h-56 object-cover" />
            <div className="p-6!">
              <h2 className="text-2xl! font-semibold mb-2 text-blue-950">{s.title}</h2>
              <p className="text-gray-800">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
