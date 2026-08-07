import { FaExclamationCircle } from "react-icons/fa";

const TextField = ({
  label,
  id,
  type,
  errors,
  register,
  required,
  message,
  className,
  min,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      <label
        htmlFor={id}
        className={`${
          className || ""
        } text-sm font-semibold text-slate-700`}
      >
        {label}
      </label>

      {/* Input */}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className={`
          w-full
          px-4
          py-3
          rounded-xl
          border
          bg-slate-50
          text-slate-800
          placeholder:text-slate-400
          transition-all
          duration-300
          outline-none
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
          ${
            errors[id]
              ? "border-red-500 bg-red-50"
              : "border-slate-300 hover:border-blue-300"
          }
          ${className || ""}
        `}
        {...register(id, {
          required: {
            value: required,
            message,
          },

          minLength: min
            ? {
                value: min,
                message: "Minimum 6 characters required",
              }
            : undefined,

          pattern:
            type === "email"
              ? {
                  value:
                    /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email",
                }
              : type === "url"
              ? {
                  value:
                    /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                  message: "Please enter a valid URL",
                }
              : undefined,
        })}
      />

      {/* Error */}

      {errors[id] && (
        <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
          <FaExclamationCircle />
          <span>{errors[id].message}</span>
        </div>
      )}
    </div>
  );
};

export default TextField;