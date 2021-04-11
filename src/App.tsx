import React, { useState } from "react";

import { Movies, Categories, Loading, Login, Settings } from "./components";

import firebase from "firebase/app";
import "firebase/auth";
import { config } from "./firebase.config";

import { Data } from "./contentful";

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";

let renderCounter = 0;

type AuthProps = {
  isSignedIn: boolean;
  user: firebase.User;
};

export default function App() {
  const [watched, setWatched] = useState<string[]>([]);
  const [picks, setPicks] = useState<string[]>([]);
  const { movies, categories } = Data();

  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user }: AuthProps) => {
          renderCounter++;
          return isSignedIn ? (
            <>
              <main className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen">
                <Movies
                  movies={movies}
                  watched={watched}
                  setWatched={setWatched}
                />
                <Categories
                  movies={movies}
                  categories={categories}
                  watched={watched}
                  picks={picks}
                  setPicks={setPicks}
                />
              </main>
              <div className="container mx-auto px-4 pb-5">
                <Settings user={user} />
              </div>
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
