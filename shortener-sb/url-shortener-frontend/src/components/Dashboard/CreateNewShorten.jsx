import { useState } from "react";
import { useForm } from "react-hook-form";
import { Tooltip } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FaLink } from "react-icons/fa";

import { useStoreContext } from "../../contextApi/ContextApi";
import TextField from "../TextField";
import api from "../../api/api";
import toast from "react-hot-toast";

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (formData) => {
    setLoading(true);

    try {
      const { data: res } = await api.post(
        "/api/urls/shorten",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      const shortUrl = `${import.meta.env.VITE_BACKEND_URL}/${res.shortUrl}`;

      try {
        await navigator.clipboard.writeText(shortUrl);

        toast.success("Short URL copied to clipboard!", {
          position: "bottom-center",
          duration: 3000,
        });
      } catch {
        toast.success("Short URL created successfully!");
      }

      if (refetch) {
        await refetch();
      }

      reset();
      setOpen(false);
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message || "Failed to create short URL."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative overflow-hidden">

      {/* Close Button */}
      {!loading && (
        <Tooltip title="Close">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 p-2 rounded-full hover:bg-slate-100 transition"
          >
            <RxCross2 className="text-2xl text-slate-600" />
          </button>
        </Tooltip>
      )}

      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="px-8 py-8"
      >
        {/* Header */}

        <div className="flex justify-center mb-5">
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
            <FaLink className="text-white text-2xl" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-slate-800">
          Create Short URL
        </h1>

        <p className="text-center text-slate-500 mt-2 mb-8">
          Paste your long URL below and generate a secure short link instantly.
        </p>

        <TextField
          label="Original URL"
          required
          id="originalUrl"
          placeholder="https://example.com"
          type="url"
          message="URL is required"
          register={register}
          errors={errors}
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] hover:shadow-xl transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Creating..." : "Create Short URL"}
        </button>
      </form>
    </div>
  );
};

export default CreateNewShorten;