import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa6";
import { IoChatbox } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [comment, setComment] = useState("");
  const handleComment = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const userComment = form.get("comment");
    setComment(userComment);
    // console.log(comment);
  };
  const services = useLoaderData();
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const singleService = services.find(
      (service) => service.id === parseInt(id)
    );
    setService(singleService);
  }, [services, id]);
  return (
    // Service details
    <div>
      <div className="card card-compact bg-base-100 border rounded-2xl p-5 w-[75%] mx-auto mb-10">
        <Helmet>
          <title>Next Step | Service Details</title>
        </Helmet>
        <figure>
          <img
            src={service.image}
            className="h-[350px] w-[350px] object-contain rounded-2xl"
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-5 flex md:flex-row justify-between">
          <div className="space-y-3 md:w-[60%]">
            <h2 className="card-title text-2xl">{service.service_name}</h2>
            <div className="flex items-center gap-5">
              <div className="badge badge-secondary">{service.category}</div>
              <div className="card-actions flex items-center justify-between gap-[100px]">
                <div className="flex items-center gap-2 justify-center">
                  <p className="text-base">Rating : {service.rating}</p>
                  <div>
                    <span className="text-yellow-400 text-lg">
                      <FaStar></FaStar>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600">
              {service.description}
            </p>
            <div className=" space-y-1 mt-4">
              <p className="md:text-lg text-base">
                <span className="font-semibold text-blue-600">
                  Counselor Name :
                </span>{" "}
                {service.counselor}
              </p>
              <p className="md:text-lg text-base">
                <span className="font-semibold text-blue-600">Duration :</span>{" "}
                {service.duration}
              </p>
              <p className="md:text-lg text-base">
                <span className="font-semibold text-blue-600">
                  Target Audience :
                </span>{" "}
                {service.target_audience}
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg text-right">
              <span className="font-semibold text-blue-600 text-xl">
                Price :
              </span>{" "}
              {service.pricing}
            </p>
            <p className="text-right text-2xl md:mt-0">
              {service.availability}
            </p>
          </div>
        </div>
      </div>
      {/*User Feedback Added */}
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold mt-8">
          Give Us Your <span className="text-blue-600">Feedback</span>
        </h1>
        <form onSubmit={handleComment}>
          <div className="md:w-full w:1/2 mx-auto">
            <textarea
              className="textarea border-blue-600 "
              name="comment"
              placeholder="Comment your feedback here"
              row="10"
              cols="50"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn bg-blue-600 text-white px-10">
              Comment
            </button>
          </div>
        </form>
        {comment !== "" ? (
          <div className="bg-blue-600 w-1/2 text-white p-5 rounded-3xl">
            <div className="flex gap-3 items-center">
              <p className="text-2xl font-semibold text-left flex items-center gap-2">
                User Feedback <IoChatbox />
              </p>
            </div>
            <p className="text-medium">{comment}</p>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
