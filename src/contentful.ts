import { gql, useQuery } from "@apollo/client";
import { category, movie } from "./types";

export const GET_NOMINATIONS = gql`
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
`;

type contentfulNomination = {
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
};

export type oscarNominationsCollection = {
  oscarNominationsCollection: {
    items: contentfulNomination[];
  };
};

export function Data() {
  const { loading, error, data } = useQuery<oscarNominationsCollection>(
    GET_NOMINATIONS
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
      movieRegister[nomination.movie.sys.id] = {
        id: nomination.movie.sys.id,
        title: nomination.movie.title,
        poster: nomination.movie.poster,
        nominations: [],
      };
      categoryRegister[nomination.category.sys.id] = {
        id: nomination.category.sys.id,
        title: nomination.category.title,
        nominees: [],
      };
    });
    movies = Object.values(movieRegister);
    movies.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
    categories = Object.values(categoryRegister);
    categories.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
  }

  return { movies, categories };
}
