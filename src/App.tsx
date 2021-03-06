import React, { useState } from "react";

import Movies from "./components/Movies";
import Categories from "./components/Categories";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Settings from "./components/Settings";

import { rawMovies } from "./data/2021";
import { category, movie } from "./types";
import slug from "slug";

import firebase from "firebase/app";
import "firebase/auth";
import { config } from "./firebase.config";

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";

let renderCounter = 0;

export default function App() {
  const rawWatched = localStorage.getItem("watched2021");
  const [watched, setWatched] = useState<string[]>(
    rawWatched ? JSON.parse(rawWatched) : []
  );
  const rawPicks = localStorage.getItem("picks2021");
  const [picks, setPicks] = useState<string[]>(
    rawPicks ? JSON.parse(rawPicks) : []
  );

  const movies: movie[] = [];

  rawMovies.forEach((rawMovie) => {
    movies.push({
      ...rawMovie,
      id: slug(rawMovie.title),
    });
  });

  const categories: category[] = [];
  movies.forEach((movie) => {
    movie.nominations.forEach((nomination) => {
      const index = categories.findIndex(
        (category) => category.name === nomination.category
      );
      const newNomination = {
        title: movie.title,
        nominee: nomination.nominee,
        watched: watched.includes(movie.id),
        id: slug(
          [nomination.category, nomination.nominee, movie.title].join("-")
        ),
      };
      if (index === -1) {
        categories.push({
          name: nomination.category,
          nominees: [newNomination],
          id: slug(nomination.category),
        });
      } else {
        categories[index].nominees.push(newNomination);
      }
    });
  });
  categories.sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user }) => {
          renderCounter++;
          return isSignedIn ? (
            <>
              <main className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen">
                <Movies
                  movies={movies}
                  watched={watched}
                  setWatched={setWatched}
                  picks={picks}
                />
                <Categories
                  movies={movies}
                  categories={categories}
                  watched={watched}
                  picks={picks}
                  setPicks={setPicks}
                />
              </main>
              <Settings user={user} />
            </>
          ) : renderCounter === 1 ? (
            <Loading />
          ) : (
            <Login />
          );
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
}
