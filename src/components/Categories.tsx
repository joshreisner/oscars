import React, { useState } from "react";
import cx from "classnames";
import { category, movie } from "../types";

type CategoriesProps = {
  movies: movie[];
  categories: category[];
  watched: string[];
  picks: string[];
  setPicks: React.Dispatch<React.SetStateAction<string[]>>;
};

export function Categories({
  movies,
  categories,
  watched,
  picks,
  setPicks,
}: CategoriesProps) {
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
          {categories.length} categories
        </span>
        {picks.length > 0 && (
          <>
            <span className="text-gray-500 mx-2">/</span>
            <span
              className={cx("cursor-pointer", {
                underline: filtered,
                "text-gray-500": !filtered,
              })}
              onClick={() => setFiltered(true)}
            >
              {categories.length - picks.length} remaining
            </span>
          </>
        )}
      </h2>
      <h4 className="bg-gray-50 text-gray-500 py-2 text-center">
        🎯 make your predictions
      </h4>
      {categories.map((category, index) => {
        const hasPick =
          picks.filter((id) => id.startsWith(category.id)).length > 0;
        return !filtered || !hasPick ? (
          <article key={index} className="border-gray-200 border-t-2 py-4 ">
            <h3 className="font-bold">{category.title}</h3>
            {category.nominees.map((nominee, index) => (
              <label className="flex items-center cursor-pointer" key={index}>
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={!!nominee.id && picks.includes(nominee.id)}
                  onChange={(e) => {
                    const newPicks = picks.filter(
                      (id) => !id.startsWith(category.id)
                    );
                    if (e.target.checked && nominee.id)
                      newPicks.push(nominee.id);
                    setPicks(newPicks);
                    localStorage.setItem("picks2021", JSON.stringify(newPicks));
                  }}
                />
                <span
                  className={cx({
                    "line-through text-gray-500": nominee.watched,
                  })}
                >
                  {nominee.nominee
                    ? `${nominee.nominee}: ${nominee.title}`
                    : nominee.title}
                </span>
              </label>
            ))}
          </article>
        ) : null;
      })}
    </section>
  );
}
