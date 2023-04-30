import React from "react";
import { Link } from "react-router-dom";

export default function Button({ destination }) {
  return (
    <Link
      to={`${destination}`}
      className="bg-blue-500 hover:bg-blue-400 text-light font-bold py-2 px-4 rounded-lg"
    >
      Read more
    </Link>
  );
}
