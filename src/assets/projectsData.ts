export interface Project {
  id: string
  title: string
  category: string
  image: string
  description: string
  year: string
  location: string
  area: string
  images: string[]
  details: {
    challenge: string
    solution: string
    result: string
  }
}
export const projectsData: Project[] = [
  {
    id: 'modern-villa',
    title: 'Modern Villa',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description:
      'A contemporary residential masterpiece that seamlessly blends indoor and outdoor living spaces with sustainable design principles.',
    year: '2023',
    location: 'Los Angeles, CA',
    area: '4,500 sq ft',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
    ],
    details: {
      challenge:
        'The clients wanted a modern home that maximized natural light while maintaining privacy in a dense urban neighborhood.',
      solution:
        'We designed a multi-level structure with strategic window placement, internal courtyards, and a rooftop garden to create private outdoor spaces while flooding the interior with natural light.',
      result:
        'A stunning 4,500 sq ft residence that feels spacious and connected to nature despite its urban setting, featuring sustainable materials and energy-efficient systems.',
    },
  },
  {
    id: 'urban-office-complex',
    title: 'Urban Office Complex',
    category: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    description:
      'An innovative workspace designed to foster collaboration and creativity in the heart of the city.',
    year: '2022',
    location: 'New York, NY',
    area: '25,000 sq ft',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80',
    ],
    details: {
      challenge:
        'Transform a dated office building into a modern, flexible workspace that attracts top talent and promotes employee wellbeing.',
      solution:
        'We created an open floor plan with flexible workstations, collaborative zones, quiet focus areas, and abundant natural light through floor-to-ceiling windows.',
      result:
        "A vibrant 25,000 sq ft office space that increased employee satisfaction by 40% and became a landmark in the city's downtown district.",
    },
  },
  {
    id: 'minimalist-residence',
    title: 'Minimalist Residence',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    description:
      'A serene sanctuary that embraces simplicity and clean lines while providing all modern comforts.',
    year: '2023',
    location: 'Miami, FL',
    area: '3,200 sq ft',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
    ],
    details: {
      challenge:
        'Design a home that embodies minimalist principles without sacrificing comfort or functionality for a growing family.',
      solution:
        'We employed a neutral color palette, hidden storage solutions, and multi-functional spaces that maintain clean lines while accommodating family life.',
      result:
        'A peaceful 3,200 sq ft home that proves minimalism can be warm, inviting, and perfectly suited for modern family living.',
    },
  },
  {
    id: 'cultural-center',
    title: 'Cultural Center',
    category: 'Public',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80',
    description:
      'A community hub that celebrates local culture and provides spaces for art, performance, and gathering.',
    year: '2021',
    location: 'Seattle, WA',
    area: '15,000 sq ft',
    images: [
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80',
      'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=1200&q=80',
      'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=1200&q=80',
      'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=1200&q=80',
    ],
    details: {
      challenge:
        "Create a welcoming public space that serves diverse community needs while respecting the neighborhood's architectural heritage.",
      solution:
        'We designed a flexible, multi-purpose building with adaptable spaces, sustainable materials, and architectural elements that reference local history.',
      result:
        'A beloved 15,000 sq ft cultural center that hosts over 200 events annually and has become a cornerstone of community life.',
    },
  },
]
