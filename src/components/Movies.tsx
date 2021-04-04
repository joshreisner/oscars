import React from "react";
import cx from "classnames";

import { movie } from "../types";

type MoviesProps = {
  movies: movie[];
  watched: string[];
  setWatched: React.Dispatch<React.SetStateAction<string[]>>;
  picks: string[];
};

export default function Movies({
  movies,
  watched,
  setWatched,
  picks,
}: MoviesProps) {
  return (
    <section>
      <h2 className="font-bold pb-4 text-2xl text-center">
        {movies.length} movies
        {watched.length > 0 && (
          <span className="text-gray-500">
            {` / ${movies.length - watched.length} remaining`}
          </span>
        )}
      </h2>
      <h4 className="bg-gray-50 border-gray-200 border-t-2 py-2 text-center text-gray-500">
        ✅ track your progress
      </h4>
      {movies.map((movie, index) => (
        <label
          key={index}
          className="border-gray-200 border-t-2 cursor-pointer flex items-start py-4"
        >
          <div className="pr-2">
            <input
              type="checkbox"
              checked={watched.includes(movie.id)}
              onChange={(e) => {
                const newWatched = watched.filter((id) => id !== movie.id);
                if (e.target.checked) newWatched.push(movie.id);
                setWatched(newWatched);
                localStorage.setItem("watched2021", JSON.stringify(newWatched));
              }}
            />
          </div>
          <div className="pr-4 w-16 md:w-24">
            <img
              src={`/images/${movie.id}.jpg`}
              alt={movie.title}
              className="border rounded"
            />
          </div>
          <div
            className={cx("w-56 md:w-auto", {
              "text-gray-500": watched.includes(movie.id),
            })}
          >
            <h3
              className={cx("font-bold", {
                "line-through": watched.includes(movie.id),
              })}
            >
              {movie.title}
            </h3>
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
