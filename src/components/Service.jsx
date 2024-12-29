import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, image, category, counselor, pricing, rating, service_name } =
    service;
  return (
    <div className="card card-compact bg-base-100 border rounded-2xl p-5">
      <figure>
        <img
          src={image}
          className="h-[350px] w-[350px] object-contain rounded-2xl"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">{service_name}</h2>
        <div className="badge badge-secondary">{category}</div>
        <div className="mt-2 space-y-1">
          <p className="text-lg">
            <span className="font-semibold text-blue-600">Price :</span>{" "}
            {pricing}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-600">Name :</span>{" "}
            {counselor}
          </p>
        </div>

        <div className="card-actions flex items-center justify-between gap-[100px] mt-2">
          <div>
            <Link className="btn bg-blue-600 text-white" to={`/details/${id}`}>
              Learn More
            </Link>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <p className="text-base">Rating : {rating}</p>
            <div>
              <span className="text-yellow-400 text-lg">
                <FaStar></FaStar>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
