import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StackItem({ title, icon }) {
  return (
    <div className="relative group">
      <p className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-stone-300 dark:text-stone-700">{title}</p>
      <FontAwesomeIcon icon={icon} className="text-3xl relative z-0" />
    </div>
  );
}

export default StackItem;
