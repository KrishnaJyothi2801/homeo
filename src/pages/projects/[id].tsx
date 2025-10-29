'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from 'lucide-react'
import { projectsData } from '@/assets/projectsData'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProjectDetail() {
  const router = useRouter()
  const { id } = router.query

  const project = projectsData.find(p => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-white">
        <Header />
        <div className="pt-32 px-6 text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <Link href="/" className="text-gray-600 hover:text-black">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-24 px-6 text-black">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-black mb-8 transition-colors"
          >
            <ArrowLeftIcon size={20} />
            <span>Back to Projects</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                {project.category}
              </p>
              <h1 className="text-5xl font-light mb-6">{project.title}</h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-200">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Year</div>
                  <div className="text-lg font-light">{project.year}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="text-lg font-light">{project.location}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Area</div>
                  <div className="text-lg font-light">{project.area}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={project.images[selectedImage]}
                  alt={`${project.title} image`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square overflow-hidden ${
                      selectedImage === index
                        ? 'ring-2 ring-black opacity-100'
                        : 'opacity-60 hover:opacity-100'
                    } transition-all`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-light mb-4">The Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.details.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-light mb-4">Our Solution</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.details.solution}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-light mb-4">The Result</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.details.result}
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200 text-center">
            <h3 className="text-2xl font-light mb-4">
              Interested in working together?
            </h3>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
