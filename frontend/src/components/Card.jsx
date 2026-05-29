function Card({ title, value }) {
  return (
    <div
      className="
        bg-white 
        p-4 md:p-6 
        rounded-2xl 
        shadow-sm 
        hover:shadow-lg 
        duration-300
        w-full
      "
    >

      {/* TITLE */}
      <h1
        className="
          text-base 
          md:text-xl 
          text-gray-500
        "
      >
        {title}
      </h1>

      {/* VALUE */}
      <p
        className="
          text-2xl 
          md:text-4xl 
          font-bold 
          text-teal-700 
          mt-4
          break-words
        "
      >
        {value}
      </p>

    </div>
  );
}

export default Card;