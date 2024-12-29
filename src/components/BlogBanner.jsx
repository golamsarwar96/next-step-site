import React from "react";
import bannerImg from "../assets/blogBanner.png";
const BlogBanner = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={bannerImg} alt="" />
    </div>
  );
};

export default BlogBanner;
