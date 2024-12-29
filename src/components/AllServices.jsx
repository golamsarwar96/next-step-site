import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const AllServices = () => {
  const services = useLoaderData();
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10 md:p-0 p-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
