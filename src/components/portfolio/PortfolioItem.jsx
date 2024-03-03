import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, description }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-md border-2 border-stone-900 dark:border-white"
    >
      <div className="group relative">
        <img
          src={imgUrl}
          alt="portfolio"
          className="h-36 w-full cursor-pointer object-cover group-hover:opacity-70 md:h-48"
        />
        <p className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-center font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-2">
          {description}
        </p>
      </div>

      <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold dark:text-white md:mb-3 md:text-xl ">
          {title}
        </h3>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs dark:text-white md:text-sm ">
          {stack.map((item) => (
            <span key={item} className="inline-block rounded-md border-2 border-stone-900 px-2 py-1 font-semibold dark:border-white">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
