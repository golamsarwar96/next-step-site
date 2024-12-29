import { BiComment, BiLike, BiShare } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

const Blog = ({ blog }) => {
  const { title, author, date, blog_img, category, rating } = blog;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-[500px] h-[300px] object-cover"
          src={blog_img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Category: {category}</p>
        <p>Author: {author}</p>
        <p className="flex items-center gap-1">
          Rating: {rating}{" "}
          <span className="text-yellow-300">
            <FaStar></FaStar>
          </span>
        </p>
        <p>Publish Date: {date}</p>

        <div className="card-actions flex justify-between">
          <button className="btn bg-blue-600 text-white">Read Now</button>
          <div className="flex gap-2 mt-2 text-medium">
            <button className="border-2 border-gray-400 p-2 rounded-full">
              <BiLike></BiLike>
            </button>
            <button className="border-2 border-gray-400 p-2 rounded-full">
              <BiComment></BiComment>
            </button>
            <button className="border-2 border-gray-400 p-2 rounded-full">
              <BiShare></BiShare>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
