import React from "react";
import { movies } from "./data";

type category = {
  name: string;
  nominees: string[];
};

export default function Categories() {
  const categories: category[] = [];
  movies.forEach((movie) => {
    movie.nominations.forEach((nomination) => {
      const index = categories.findIndex(
        (category) => category.name === nomination.category
      );
      if (index === -1) {
        categories.push({
          name: nomination.category,
          nominees: [movie.title],
        });
      } else {
        categories[index].nominees.push(movie.title);
      }
    });
  });
  categories.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <section>
      <h2 className="text-2xl font-bold pb-4">
        {categories.length} categories
      </h2>
      {categories.map((category, index) => (
        <article key={index} className="border-gray-200 border-t-2 py-4 ">
          <h3 className="font-bold">{category.name}</h3>
          {category.nominees.map((nominee, index) => (
            <label
              className="block flex items-center cursor-pointer"
              key={index}
            >
              <input type="radio" className="mr-1" name={category.name} />
              {nominee}
            </label>
          ))}
        </article>
      ))}
    </section>
  );
}
