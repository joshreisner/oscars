import React from "react";

import Movies from "./Movies";
import Categories from "./Categories";

export default function App() {
  return (
    <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      <Movies />
      <Categories />
    </main>
  );
}
