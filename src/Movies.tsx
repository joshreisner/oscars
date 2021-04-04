import React from "react";
import { movies } from "./data";

export default function Movies() {
  return (
    <section>
      <h2 className="text-2xl font-bold pb-4">{movies.length} movies</h2>
      {movies.map((movie, index) => (
        <label
          key={index}
          className="flex items-start border-gray-200 border-t-2 py-4 cursor-pointer"
        >
          <div className="pr-4">
            <input type="checkbox" />
          </div>
          <div className="pr-4 w-16 md:w-24">
            <img src={movie.image} alt={movie.title} />
          </div>
          <div className="w-56 md:w-auto">
            <h3 className="font-bold">{movie.title}</h3>
            <ul>
              {movie.nominations?.map((nomination, index) => (
                <li key={index}>
                  {nomination.category}
                  {nomination.nominee && `: ${nomination.nominee}`}
                </li>
              ))}
            </ul>
          </div>
        </label>
      ))}
    </section>
  );
}
