import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StackItem({ title, icon }) {
  return (
    <div className="group flex flex-col justify-center">
      <FontAwesomeIcon
        icon={icon}
        className="transform text-3xl transition-transform group-hover:scale-150"
      />
      <p className="transform rounded bg-gray-800 px-2 py-1 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-stone-300 dark:text-stone-700 mt-5">
        {title}
      </p>
    </div>
  );
}

export default StackItem;
