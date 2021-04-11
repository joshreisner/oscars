import { gql, useQuery } from "@apollo/client";
import { category, movie, oscarNominationsCollection } from "./types";

export function Data() {
  const { loading, error, data } = useQuery<oscarNominationsCollection>(
    gql`
      {
        oscarNominationsCollection {
          items {
            sys {
              id
            }
            year
            nominee
            movie {
              sys {
                id
              }
              title
              poster {
                url
                width
                height
              }
            }
            category {
              sys {
                id
              }
              title
            }
          }
        }
      }
    `
  );

  if (error) console.error(error);

  let categories: category[] = [];
  let movies: movie[] = [];

  //process unique set of categories & movies
  if (data && !loading) {
    const categoryRegistry: { [key: string]: category } = {};
    const movieRegistry: { [key: string]: movie } = {};
    data.oscarNominationsCollection.items.forEach((nomination) => {
      //add to registry of categories
      if (!categoryRegistry.hasOwnProperty(nomination.category.sys.id)) {
        categoryRegistry[nomination.category.sys.id] = {
          id: nomination.category.sys.id,
          title: nomination.category.title,
          nominees: [],
        };
      }
      categoryRegistry[nomination.category.sys.id].nominees.push({
        id: nomination.movie.sys.id,
        nominee: nomination.nominee,
        movie: nomination.movie.title,
      });

      //add to registry of movies
      if (!movieRegistry.hasOwnProperty(nomination.movie.sys.id)) {
        movieRegistry[nomination.movie.sys.id] = {
          id: nomination.movie.sys.id,
          title: nomination.movie.title,
          poster: nomination.movie.poster,
          nominations: [],
        };
      }
      movieRegistry[nomination.movie.sys.id].nominations.push({
        category: nomination.category.title,
        nominee: nomination.nominee,
      });
    });

    //finalize and sort categories
    categories = Object.values(categoryRegistry);
    categories.sort((a, b) => compare(a.title, b.title));
    categories.map((category) => {
      category.nominees.sort((a, b) =>
        compare(a.nominee ?? a.movie, b.nominee ?? b.movie)
      );
      return category;
    });

    //finalize and sort movies
    movies = Object.values(movieRegistry);
    movies.sort((a, b) => compare(a.title, b.title));
    movies.map((movie) => {
      movie.nominations.sort((a, b) => compare(a.category, b.category));
      return movie;
    });
  }

  return { loading, categories, movies };
}

function compare(a: string, b: string) {
  const aNoArticles = noFirstArticle(a);
  const bNoArticles = noFirstArticle(b);
  return aNoArticles.localeCompare(bNoArticles);
}

function noFirstArticle(str: string) {
  const words = str.toLowerCase().split(" ");
  if (words.length > 1 && ["a", "an", "the"].includes(words[0])) words.shift();
  return words.join(" ");
}

export function Storage() {
  const rawJson = window.localStorage.getItem("2021");
  const json = rawJson ? JSON.parse(rawJson) : { watched: [], picks: [] };
  return { initialWatched: json.watched, initialPicks: json.picks };
}

export function setStorage(watched: string[], picks: string[]) {
  window.localStorage.setItem(
    "2021",
    JSON.stringify({
      watched: watched,
      picks: picks,
    })
  );
}
