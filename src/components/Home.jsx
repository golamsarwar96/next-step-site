import { NavLink, useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import Service from "./Service";
import Stats from "./Stats";
import NewsLetter from "./NewsLetter";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import Loading from "./Loading";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      <Helmet>
        <title>Next Step | Home</title>
      </Helmet>
      <Slider></Slider>
      <h1 className="text-center font-bold text-4xl md:my-7 mt-10 my-4">
        Available Services On <span className="text-blue-600">Next</span> Step
      </h1>
      <p className="text-center text-sm md:w-1/2 w-[85%] mx-auto">
        Explore tailored career services, including counseling, resume reviews,
        skill development, and workshops. Designed for all stages, our
        expert-led sessions offer guidance online, offline, or in groups to
        achieve your goals.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10 md:p-0 p-3">
        {services.slice(0, 6).map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div>
        <button className="btn bg-blue-600 text-white px-10 mx-auto block">
          <NavLink to="/allservices">See More</NavLink>
        </button>
      </div>
      <section>
        <Stats></Stats>
      </section>
      <section>
        <NewsLetter></NewsLetter>
      </section>
    </div>
  );
};

export default Home;
