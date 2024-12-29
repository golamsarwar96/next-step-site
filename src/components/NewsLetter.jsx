import confetti from "../assets/confetti.png";
const NewsLetter = () => {
  const handleNewsletter = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div className="mt-28">
      <h1 className="text-4xl font-bold text-center">
        Join Our <span className="text-blue-600">News Letter</span> Today
      </h1>
      <p className="text-center mt-4 w-5/6 mx-auto text-gray-700">
        Get all the latest course update and productivity tips and tricks from
        our very best Instructors.
      </p>
      <div className="mt-10 shadow-lg border p-10 rounded-3xl mb-20">
        <h1 className="text-center text-blue-600 text-5xl font-bold mb-5">
          Newsletter
        </h1>
        <form
          onSubmit={handleNewsletter}
          className="lg:w-[40%] mx-auto space-y-2 bg-blue-600 p-10 rounded-3xl"
        >
          <label className="input input-bordered flex rounded-3xl items-center text-blue-600 gap-2">
            Name
            <input type="text" className="grow" placeholder="Jhankar" />
          </label>
          <label className="input input-bordered rounded-3xl flex items-center gap-2 text-blue-600">
            Email
            <input type="text" className="grow" placeholder="abc@efg.com" />
          </label>
          <label className="input input-bordered flex rounded-3xl items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="What are you interested in?"
            />
          </label>
          <div className="flex justify-center">
            {/* className="btn bg-white mt-5 px-10" */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-white mt-5 px-10 text-blue-600"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Subscribe
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <img src={confetti} className="w-20 mx-auto mb-5" alt="" />
                <p className="text-lg font-bold text-center">
                  You have been{" "}
                  <span className="text-green-600 font-bold">Successfully</span>{" "}
                  Subscribed
                </p>
                <div className="flex justify-center ">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn bg-blue-600 text-white">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
