import React from "react";
import cx from "classnames";
import { category, movie } from "../types";

type CategoriesProps = {
  movies: movie[];
  categories: category[];
  watched: string[];
  picks: string[];
  setPicks: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Categories({
  movies,
  categories,
  watched,
  picks,
  setPicks,
}: CategoriesProps) {
  return (
    <section>
      <h2 className="text-2xl text-center font-bold pb-4">
        {categories.length} categories
        {picks.length > 0 && (
          <span className="text-gray-500">
            {` / ${categories.length - picks.length} remaining`}
          </span>
        )}
      </h2>
      <h4 className="bg-gray-50 text-gray-500 border-gray-200 border-t-2 py-2 text-center">
        🎯 make your predictions
      </h4>
      {categories.map((category, index) => (
        <article key={index} className="border-gray-200 border-t-2 py-4 ">
          <h3 className="font-bold">{category.name}</h3>
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
                  if (e.target.checked && nominee.id) newPicks.push(nominee.id);
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
      ))}
    </section>
  );
}
