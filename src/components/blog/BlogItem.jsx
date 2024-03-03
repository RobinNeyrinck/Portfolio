import React from "react";
function BlogItem({ title, tags, thumbnail, link }) {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="group rounded-md border-2 border-stone-900 dark:border-white p-2"
    >
      <div className="group-hover:opacity-75 ">
        <h3 className="mb-2 text-lg font-semibold dark:text-white md:mb-3 md:text-xl ">
          {title}
        </h3>{" "}
        <img src={thumbnail} alt={title} />
        <ul className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs dark:text-white md:text-sm pt-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="inline-block rounded-md border-2 border-stone-900 px-2 py-1 font-semibold dark:border-white"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default BlogItem;
