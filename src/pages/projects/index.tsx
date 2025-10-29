import Link from 'next/link'
import { projectsData } from '@/assets/projectsData'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-black mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg">
            A selection of our recent architectural works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-light">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
