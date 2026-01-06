import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">
          {user?.displayName || "No Name Found"}
        </h2>
        <p className="text-base-content/70">{user?.email}</p>

        <img
          src={`${
            user ? user.photoURL : "https://i.ibb.co/ZYW3VTp/brown-brim.png"
          }`}
          alt="profile"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="mt-6">
        <button
          onClick={() => navigate("/update-profile")}
          className="btn btn-primary"
        >
          Update Info
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
