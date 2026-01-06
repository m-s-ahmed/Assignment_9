import React, { useState } from "react";

const NewsLatter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const isValidEmail = (value) => {
    //  email check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return setStatus({ type: "error", message: "Please enter your email." });
    }
    if (!isValidEmail(email)) {
      return setStatus({
        type: "error",
        message: "Please enter a valid email.",
      });
    }

    setStatus({ type: "success", message: "Thanks! You’re subscribed." });
    setEmail("");
  };
  return (
    <section className="py-10 border ">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">
          {/* Decorative gradient blobs */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-3xl" />

          <div className="relative grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15">
                  {/* Mail Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M1.5 6.75A3.75 3.75 0 0 1 5.25 3h13.5A3.75 3.75 0 0 1 22.5 6.75v10.5A3.75 3.75 0 0 1 18.75 21H5.25A3.75 3.75 0 0 1 1.5 17.25V6.75Zm3.75-1.5A2.25 2.25 0 0 0 3 6.75v.47l8.36 5.22a1.5 1.5 0 0 0 1.58 0L21 7.22v-.47a2.25 2.25 0 0 0-2.25-2.25H5.25Z" />
                    <path d="M21 9.03l-7.27 4.54a3 3 0 0 1-3.16 0L3 9.03v8.22a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 17.25V9.03Z" />
                  </svg>
                </div>

                <span className="badge badge-primary badge-outline">
                  Newsletter
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Get updates you’ll actually want to play.
              </h2>
              <p className="mt-3 text-base-content/70">
                Subscribe to receive product updates, new features, and curated
                tips—no spam.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <div className="badge outline-1 p-4 badge-ghost">
                  Weekly digest
                </div>
                <div className="badge outline-1 p-4 badge-ghost">
                  New releases
                </div>
                <div className="badge outline-1 p-4 badge-ghost">Tech tips</div>
              </div>
            </div>

            {/* Right Form */}
            <div className="rounded-2xl border border-5 border-base-300 bg-base-200/40 p-5 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="label">
                    <span className="label-text font-medium mb-2">
                      Email address
                    </span>
                  </label>

                  <div className="join w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status.type) setStatus({ type: "", message: "" });
                      }}
                      placeholder="you@example.com"
                      className="input input-bordered join-item w-full"
                    />
                    <button type="submit" className="btn btn-primary join-item">
                      Subscribe
                    </button>
                  </div>

                  {status.type === "error" && (
                    <p className="mt-2 text-sm text-error">{status.message}</p>
                  )}

                  {status.type === "success" && (
                    <div className="mt-3 alert alert-success py-3">
                      <span className="text-sm">{status.message}</span>
                    </div>
                  )}
                </div>

                <div className="divider my-2" />

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm mt-1"
                    defaultChecked
                  />
                  <p className="text-sm text-base-content/70">
                    I agree to receive emails. Unsubscribe anytime. We respect
                    your privacy.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-base-content/60">
                    By subscribing, you agree to our terms.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => setEmail("sajid@example.com")}
                  >
                    Try demo email
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="relative border-t border-base-300 bg-base-100 px-6 py-4 md:px-10">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-base-content/70">
                Join <span className="font-semibold">2,000+</span> people
                getting updates.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline">No spam</span>
                <span className="badge badge-outline">Cancel anytime</span>
                <span className="badge badge-outline">Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLatter;
