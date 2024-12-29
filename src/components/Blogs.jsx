import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-24 p-6 ">
      {blogs.map((blog, i) => (
        <Blog key={i} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
