import React from "react";
import stack from "../../data/stack.js";
import Title from "../Title";
import StackItem from "./StackItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab);
library.add(fas);

function Stack() {
  return (
    <div className="mt-10 flex flex-col justify-center md:flex-row">
      <div className="md:w-7/12">
        <Title>Stack</Title>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Frontend</h3>
          <div className="mt-3 flex flex-row flex-wrap justify-evenly">
            {stack
              .filter((item) => item.technology === "frontend")
              .map((item) => (
                <StackItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                />
              ))}
          </div>
        </div>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Backend</h3>
          <div className="mt-3 flex flex-row flex-wrap justify-evenly">
            {stack
              .filter((item) => item.technology === "backend")
              .map((item) => (
                <StackItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
