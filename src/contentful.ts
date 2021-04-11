import { gql, useQuery } from "@apollo/client";
import { category, movie } from "./types";

type oscarNominationsCollection = {
  oscarNominationsCollection: {
    items: {
      sys: {
        id: string;
      };
      nominee?: string;
      category: {
        sys: {
          id: string;
        };
        title: string;
      };
      movie: {
        title: string;
        poster: {
          height: number;
          width: number;
          url: string;
        };
        sys: {
          id: string;
        };
      };
    }[];
  };
};

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

  let movies: movie[] = [];
  let categories: category[] = [];

  //process data
  if (data && !loading) {
    //unique set of movies
    const movieRegister: { [key: string]: movie } = {};
    const categoryRegister: { [key: string]: category } = {};
    data.oscarNominationsCollection.items.forEach((nomination) => {
      //add to registry of movies
      if (!movieRegister.hasOwnProperty(nomination.movie.sys.id)) {
        movieRegister[nomination.movie.sys.id] = {
          id: nomination.movie.sys.id,
          title: nomination.movie.title,
          poster: nomination.movie.poster,
          nominations: [],
        };
      }
      movieRegister[nomination.movie.sys.id].nominations.push({
        category: nomination.category.title,
        nominee: nomination.nominee,
      });

      //add to registry of categories
      if (!categoryRegister.hasOwnProperty(nomination.category.sys.id)) {
        categoryRegister[nomination.category.sys.id] = {
          id: nomination.category.sys.id,
          title: nomination.category.title,
          nominees: [],
        };
      }
      categoryRegister[nomination.category.sys.id].nominees.push({
        nominee: nomination.nominee,
        title: nomination.movie.title,
        watched: false,
      });
    });

    //finalize and sort movies
    movies = Object.values(movieRegister);
    movies.sort((a, b) => compare(a.title, b.title));
    movies.map((movie) => {
      movie.nominations.sort((a, b) => compare(a.category, b.category));
    });

    //finalize and sort categories
    categories = Object.values(categoryRegister);
    categories.sort((a, b) => compare(a.title, b.title));
    categories.map((category) => {
      category.nominees.sort((a, b) => compare(a.title, b.title));
    });
  }

  return { movies, categories };
}

function compare(a: string, b: string) {
  const aNoArticles = removeArticles(a);
  const bNoArticles = removeArticles(b);
  return aNoArticles.localeCompare(bNoArticles);
}

function removeArticles(str: string) {
  const words = str.toLowerCase().split(" ");
  if (words.length > 1 && ["a", "an", "the"].includes(words[0])) words.shift();
  return words.join(" ");
}
