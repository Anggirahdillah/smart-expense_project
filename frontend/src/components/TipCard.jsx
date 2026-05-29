function TipCard({ image, category, title }) {
  return (
    <div
      className="
        bg-white 
        rounded-2xl 
        overflow-hidden 
        shadow-sm 
        hover:shadow-lg 
        duration-300
        w-full
      "
    >

      {/* IMAGE */}
      <img
        src={image}
        alt="tip"
        className="
          w-full 
          h-[180px] 
          md:h-[220px] 
          object-cover
        "
      />

      {/* CONTENT */}
      <div className="p-4 md:p-5">

        <p
          className="
            text-teal-700 
            font-semibold
            text-sm 
            md:text-base
          "
        >
          {category}
        </p>

        <h1
          className="
            text-lg 
            md:text-xl 
            font-bold 
            mt-2 
            leading-snug
          "
        >
          {title}
        </h1>

      </div>
    </div>
  );
}

export default TipCard;