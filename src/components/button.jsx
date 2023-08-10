import React from "react";

export default function Button({
  text = "Button",
  onClick = () => {},
  type = "submit",
  loading = false,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" +
        className
      }
    >
      {loading ? "Loading..." : text}
    </button>
  );
}
