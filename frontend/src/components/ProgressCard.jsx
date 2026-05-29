function ProgressCard({ title, amount, percent }) {
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

      {/* TOP */}
      <div className="flex justify-between items-start gap-4 mb-4">

        <h1
          className="
            text-lg 
            md:text-2xl 
            font-semibold 
            text-gray-800
            break-words
          "
        >
          {title}
        </h1>

        <span
          className="
            text-sm 
            md:text-lg 
            text-teal-700 
            font-bold
            whitespace-nowrap
          "
        >
          {percent}%
        </span>

      </div>

      {/* AMOUNT */}
      <p
        className="
          text-2xl 
          md:text-3xl 
          font-bold 
          text-gray-700
          break-words
        "
      >
        {amount}
      </p>

      {/* PROGRESS BAR */}
      <div
        className="
          w-full 
          bg-gray-200 
          h-3 
          rounded-full 
          mt-5
          overflow-hidden
        "
      >
        <div
          className="
            bg-teal-700 
            h-3 
            rounded-full 
            duration-500
          "
          style={{ width: `${percent}%` }}
        ></div>
      </div>

    </div>
  );
}

export default ProgressCard;