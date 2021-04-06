import React, { useState } from "react";
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
  const [filtered, setFiltered] = useState(false);
  return (
    <section>
      <h2 className="text-2xl text-center font-bold py-4 sticky top-0 bg-white border-gray-200 border-b-2">
        <span
          className={cx("cursor-pointer", {
            underline: !filtered && watched.length,
            "text-gray-500": filtered,
          })}
          onClick={() => setFiltered(false)}
        >
          {movies.length} movies
        </span>
        {watched.length > 0 && (
          <>
            <span className="mx-2 text-gray-500">/</span>
            <span
              className={cx("cursor-pointer", {
                underline: filtered,
                "text-gray-500": !filtered,
              })}
              onClick={() => setFiltered(true)}
            >
              {movies.length - watched.length} remaining
            </span>
          </>
        )}
      </h2>
      <h4 className="bg-gray-50 py-2 text-center text-gray-500">
        ✅ track your progress
      </h4>
      {movies.map((movie, index) => {
        const isWatched = watched.includes(movie.id);
        return !filtered || !isWatched ? (
          <label
            key={index}
            className="border-gray-200 border-t-2 cursor-pointer flex items-start py-4"
          >
            <div className="pr-2">
              <input
                type="checkbox"
                checked={isWatched}
                onChange={(e) => {
                  const newWatched = watched.filter((id) => id !== movie.id);
                  if (e.target.checked) newWatched.push(movie.id);
                  setWatched(newWatched);
                  localStorage.setItem(
                    "watched2021",
                    JSON.stringify(newWatched)
                  );
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
                "text-gray-500": isWatched,
              })}
            >
              <h3
                className={cx("font-bold", {
                  "line-through": isWatched,
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
        ) : null;
      })}
    </section>
  );
}
