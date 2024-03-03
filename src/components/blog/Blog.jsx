import Title from "../Title";
import BlogItem from "./BlogItem";
import blogs from "../../data/blogs.js";
import React from "react";

function Blog() {
  return (
    <div className="mt-10 flex flex-col justify-center md:flex-row">
      <div className="md:w-7/12">
        <Title>Blog</Title>{" "}
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogItem
                key={blog.title}
                title={blog.title}
                tags={blog.tags}
                thumbnail={blog.thumbnail}
                link={blog.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
