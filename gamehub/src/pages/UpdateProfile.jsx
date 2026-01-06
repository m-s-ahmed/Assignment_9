import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMsg("");
    setErr("");

    const cleanName = name.trim();
    const cleanPhoto = photoURL.trim();

    if (!cleanName) return setErr("Name is required.");
    if (!cleanPhoto) return setErr("Photo URL is required.");

    try {
      setLoading(true);
      await updateUserProfile(cleanName, cleanPhoto);
      setMsg("Profile updated successfully ");

      // go back to profile
      navigate("/my-profile", { replace: true });
    } catch (error) {
      setErr(error?.code || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center px-4">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Update Information
        </h2>

        <form onSubmit={handleUpdate} className="card-body">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label mt-2">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="url"
            className="input input-bordered"
            placeholder="https://..."
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />

          {/* Preview */}
          <div className="mt-4 flex items-center gap-3">
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
                  alt="preview"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="text-sm text-base-content/70">Preview</p>
          </div>

          {err && <p className="text-error text-sm mt-3">{err}</p>}
          {msg && <p className="text-success text-sm mt-3">{msg}</p>}

          <button
            type="submit"
            className="btn btn-primary mt-5"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
