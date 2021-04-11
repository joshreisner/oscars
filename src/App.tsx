import React, { useEffect, useState } from "react";

import { Movies, Categories, Loading } from "./components";

import { Data, Storage, setStorage } from "./contentful";

export default function App() {
  const { loading, movies, categories } = Data();
  const { initialWatched, initialPicks } = Storage();
  const [watched, setWatched] = useState<string[]>(initialWatched);
  const [picks, setPicks] = useState<string[]>(initialPicks);

  //observe and save changes
  useEffect(() => {
    setStorage(watched, picks);
  }, [watched, picks]);

  return loading ? (
    <Loading />
  ) : (
    <main className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen">
      <Movies movies={movies} watched={watched} setWatched={setWatched} />
      <Categories
        categories={categories}
        watched={watched}
        picks={picks}
        setPicks={setPicks}
      />
    </main>
  );
}
