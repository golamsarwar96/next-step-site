import { Helmet } from "react-helmet-async";
import BlogBanner from "./BlogBanner";
import Blogs from "./Blogs";
import Courses from "./Courses";

const ExtraSection = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Next Step | Blog</title>
      </Helmet>
      <BlogBanner></BlogBanner>
      <h1 className="text-5xl text-center font-bold my-10">
        Read Our Latest <span className="text-blue-600">Blogs</span>
      </h1>
      <Blogs></Blogs>
      <Courses></Courses>
    </div>
  );
};

export default ExtraSection;
