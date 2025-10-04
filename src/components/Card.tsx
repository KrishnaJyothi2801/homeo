type CardProps = {
  imageUrl: string
  title: string
  description: string
}

export default function Card({ imageUrl, title, description }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-contain bg-gray-100" />
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-[#03045e] mb-3">{title}</h3>
        <p className="text-[#0077b6]">{description}</p>
      </div>
    </div>
  )
}
