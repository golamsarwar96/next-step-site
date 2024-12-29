import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const handleUpdate = (e) => {
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    updateUserProfile({
      displayName: name,
      photoURL: photo,
    })
      .then((result) => {
        // console.log(result);
      })
      .catch((err) => {
        // console.error(err);
      });
    // update user info here
  };
  return (
    <div>
      <Helmet>
        <title>Next Step | My Profile</title>
      </Helmet>
      <div className="hero mt-10 bg-blue-600 md:w-[75%] mx-auto p-10 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img src={user?.photoURL} className="max-w-sm rounded-3xl" />
          <div className="text-white">
            <h1 className="md:text-5xl text-center md:text-left text-4xl font-bold">
              Name : {user?.displayName}
            </h1>
            <p className="py-6 text-lg text-center md:text-left">
              Email : {user?.email}
            </p>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h1 className="text-center text-5xl font-bold mb-10">
          <span className="text-blue-600">Update</span> Your Infos
        </h1>
        <form
          onSubmit={handleUpdate}
          className="flex gap-3 justify-center items-center flex-col"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered input-info w-full max-w-xs border-blue-600"
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered input-info w-full max-w-xs border-blue-600"
          />
          <button className="btn bg-blue-600 text-white px-10">Update</button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
