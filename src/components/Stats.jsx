import studentIcon from "../assets/graduation.png";
import instructorIcon from "../assets/male.png";
import courseIcon from "../assets/online-learning.png";
import awardIcon from "../assets/award.png";
const Stats = () => {
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-4xl font-bold text-center">
          Why You Should <span className="text-blue-600">Consider Us</span>
        </h1>
      </div>
      <div className="shadow-lg p-8 my-10 rounded-3xl border flex flex-col md:flex-row justify-center items-center gap-10 bg-blue-600">
        <div className="card bg-base-100 w-64 shadow-xl">
          <div className="card-body">
            <div className="bg-gray-100 w-1/2 mx-auto p-2 rounded-full">
              <img src={studentIcon} className="w-20 mx-auto" alt="" />
            </div>
            <h2 className="font-bold text-4xl text-center mt-2 text-blue-600">
              15K
            </h2>
            <p className="text-center">Students Learning</p>
          </div>
        </div>
        <div className="card bg-base-100 w-64 shadow-xl">
          <div className="card-body">
            <div className="bg-gray-100 w-1/2 mx-auto p-2 rounded-full">
              <img src={instructorIcon} className="w-20 mx-auto" alt="" />
            </div>
            <h2 className="font-bold text-4xl text-center mt-2 text-blue-600">
              50+
            </h2>
            <p className="text-center">Expert Instructors</p>
          </div>
        </div>
        <div className="card bg-base-100 w-64 shadow-xl">
          <div className="card-body">
            <div className="bg-gray-100 w-1/2 mx-auto p-2 rounded-full">
              <img src={courseIcon} className="w-20 mx-auto" alt="" />
            </div>
            <h2 className="font-bold text-4xl text-center mt-2 text-blue-600">
              300+
            </h2>
            <p className="text-center">Course Enrolment</p>
          </div>
        </div>
        <div className="card bg-base-100 w-64 shadow-xl">
          <div className="card-body">
            <div className="bg-gray-100 w-1/2 mx-auto p-2 rounded-full">
              <img src={awardIcon} className="w-20 mx-auto" alt="" />
            </div>
            <h2 className="font-bold text-4xl text-center mt-2 text-blue-600">
              15K
            </h2>
            <p className="text-center">Winning Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
