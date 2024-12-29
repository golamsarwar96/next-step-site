import codingIcon from "../assets/coding.png";
import cyberIcon from "../assets/cyber-security.png";
import dataIcon from "../assets/data-science.png";
import settingsIcon from "../assets/settings.png";
const Courses = () => {
  return (
    <div className="hero rounded-3xl min-h-screen p-10 border shadow-xl mb-20">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="w-[75%]">
          <h1 className="text-5xl text-center md:text-left font-bold">
            <span className="text-blue-600">Upcoming</span> Course Topic
          </h1>
          <p className="py-6 text-[16px] mt-1 text-center md:text-left">
            We are creating new and exiting courses on new topics. We are
            focusing on the relevant skills and knowledge that will help you
            succeed in your career. Our courses are designed to help you achieve
            your goals.
          </p>
          <p className="mt-5 mb-5 text-sm font-semibold w-[75%] mx-auto md:mx-0 text-center md:text-left">
            Subscribe to our newsletter to get the latest updates on our courses
            and get exciting discounts.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="btn bg-blue-600 text-white">Subscribe</button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 ">
          <div className="card shadow-xl bg-orange-50">
            <div className="card-body">
              <img className="w-16" src={codingIcon} alt="" />
              <h2 className="card-title text-2xl">Development</h2>
              <p>Learn development using JavaScript and react library</p>
              <div className="card-actions">
                <button className="btn bg-blue-600 text-white px-10">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card shadow-xl bg-pink-100">
            <div className="card-body">
              <img className="w-16" src={cyberIcon} alt="" />
              <h2 className="card-title text-2xl">Cyber Security</h2>
              <p>Learn about different cyber attacks and securing systems.</p>
              <div className="card-actions">
                <button className="btn bg-blue-600 text-white px-10">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card shadow-xl bg-violet-100">
            <div className="card-body">
              <img className="w-16" src={settingsIcon} alt="" />
              <h2 className="card-title text-2xl">Dev Ops</h2>
              <p>Learn strong dev ops using python.</p>
              <div className="card-actions">
                <button className="btn bg-blue-600 text-white px-10">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card shadow-xl bg-lime-50">
            <div className="card-body">
              <img className="w-16" src={dataIcon} alt="" />
              <h2 className="card-title text-2xl">Data Science</h2>
              <p>Learn Data Science using python and R.</p>
              <div className="card-actions">
                <button className="btn bg-blue-600 text-white px-10">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
