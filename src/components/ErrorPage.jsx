import errorPage from "../assets/404page.jpg";
const ErrorPage = () => {
  return (
    <div className="p-5 lg:mt-5 mt-36 lg:relative font-poppins">
      <img className="md:w-[50%] mx-auto" src={errorPage} alt="" />
      <h1 className="lg:absolute lg:top-96 lg:left-[36%] text-center font-bold text-5xl">
        Page Not Found
      </h1>
    </div>
  );
};

export default ErrorPage;
