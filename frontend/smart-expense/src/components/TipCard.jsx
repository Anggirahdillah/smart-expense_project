function TipCard({ image, category, title }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg duration-300">

      <img
        src={image}
        alt="tip"
        className="w-full h-[180px] object-cover"
      />

      <div className="p-5">

        <p className="text-teal-700 font-semibold">
          {category}
        </p>

        <h1 className="text-xl font-bold mt-2 leading-snug">
          {title}
        </h1>

      </div>
    </div>
  )
}

export default TipCard