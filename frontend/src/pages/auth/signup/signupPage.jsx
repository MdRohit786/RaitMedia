import { Link } from "react-router-dom";
import { useState } from "react";

import XSvg from "../../../components/svgs/X";

import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { application } from "express";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullname: "",
    password: "",
  });
  
  const queryClient = useQueryClient();

	const { mutate, isError, isPending, error } = useMutation({
		mutationFn: async ({ email, username, fullname, password }) => {
			try {
				const res = await fetch("/api/auth/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, username, fullname, password }),
				});

				const data = await res.json();
				if (!res.ok) throw new Error(data.error || "Failed to create account");
				console.log(data);
				return data;
			} catch (error) {
				console.error(error);
				throw error;
			}
		},
		onSuccess: () => {
			toast.success("Account created successfully");

			{
				/* Added this line below, after recording the video. I forgot to add this while recording, sorry, thx. */
			}
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault(); // page won't reload
		mutate(formData);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};


  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6">
      <div className="hidden lg:flex items-center justify-center w-1/2">
        <XSvg className="lg:w-3/4 fill-white" />
      </div>

      <div className="w-full max-w-md flex flex-col justify-center items-center rounded-lg p-6">
        <form className="w-full flex gap-4 flex-col" onSubmit={handleSubmit}>
          <XSvg className="w-24 lg:hidden fill-white" />
          <h1 className="text-4xl font-extrabold text-white">Join today.</h1>

          <label className="input input-bordered rounded flex items-center gap-2 w-full">
            <MdOutlineMail />
            <input
              type="email"
              className="grow"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </label>

          <div className="flex gap-4 flex-wrap">
            <label className="input input-bordered rounded flex items-center gap-2  w-full">
              <FaUser />
              <input
                type="text"
                className="grow"
                placeholder="Username"
                name="username"
                onChange={handleInputChange}
                value={formData.username}
              />
            </label>
            <label className="input input-bordered rounded flex items-center gap-2 w-full">
              <MdDriveFileRenameOutline />
              <input
                type="text"
                className="grow"
                placeholder="Full Name"
                name="fullname"
                onChange={handleInputChange}
                value={formData.fullname}
              />
            </label>
          </div>

          <label className="input input-bordered rounded flex items-center gap-2 w-full">
            <MdPassword />
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>

          <button
            type="submit"
            className="btn bg-blue-500 hover:bg-blue-600 rounded-full text-white w-full"
          >
            {isPending ? "Loading..." : "Sign up"}
          </button>
          {isError && (
            <p className="text-red-500">
              {error.message || "An error occurred during signup"}
            </p>
          )}
        </form>

        <div className="flex flex-col w-full gap-2 mt-4 items-center">
          <p className="text-white text-lg">Already have an account?</p>
          <Link to="/login" className="w-full">
            <button className="btn bg-blue-500 hover:bg-blue-600 rounded-full text-white btn-outline w-full">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
