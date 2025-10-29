import {
  HomeIcon,
  BuildingIcon,
  PencilRulerIcon,
  ClipboardCheckIcon,
} from 'lucide-react'

const services = [
  {
    icon: HomeIcon,
    title: 'Residential Design',
    description:
      'Custom homes and renovations that reflect your lifestyle and vision',
  },
  {
    icon: BuildingIcon,
    title: 'Commercial Projects',
    description:
      'Innovative office spaces and retail environments that inspire productivity',
  },
  {
    icon: PencilRulerIcon,
    title: 'Interior Design',
    description:
      'Thoughtful interior spaces that balance aesthetics with functionality',
  },
  {
    icon: ClipboardCheckIcon,
    title: 'Project Management',
    description: 'Full-service oversight from concept to completion',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive architectural solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-8 hover:shadow-lg transition-shadow"
              >
                <Icon size={40} className="mb-4 text-black" />
                <h3 className="text-xl font-light mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
