type nomination = {
  category: string;
  nominee?: string;
};

type movie = {
  title: string;
  nominations: nomination[];
  image?: string;
  services?: string[];
};

export const movies: movie[] = [
  {
    title: "Another Round",
    nominations: [
      {
        category: "Directing",
        nominee: "Thomas Vinterberg",
      },
      {
        category: "International Feature Film",
        nominee: "Denmark",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BOTNjM2Y2ZjgtMDc5NS00MDQ1LTgyNGYtYzYwMTAyNWQwYTMyXkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_.jpg",
    services: [
      "https://www.hulu.com/movie/another-round-08c2a90b-c9fb-461d-859c-7417c4c255b7",
    ],
  },
  {
    title: "Better Days",
    nominations: [
      {
        category: "International Feature Film",
        nominee: "Hong Kong",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BMTlmNGY5OWQtZDU3OS00YTViLTk1M2QtZTc2ODBmY2Y2NTkzXkEyXkFqcGdeQXVyMTAyNzgyNjQ0._V1_.jpg",
    services: [
      "https://www.amazon.com/Better-Days-Dongyu-Zhou/dp/B087YKHX3M/ref=nodl_",
    ],
  },
  {
    title: "Borat Subsequent Moviefilm",
    nominations: [
      {
        category: "Actress in a Supporting Role",
        nominee: "Maria Bakalova",
      },
      {
        category: "Adapted Screenplay",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BYjIyMTdjYmUtYzYyOS00YzY0LTkxYmQtYjUxYjViMzRhOGNjXkEyXkFqcGdeQXVyMTAzNTQ1MjEz._V1_.jpg",
    services: [],
  },
  {
    title: "Collective",
    nominations: [
      {
        category: "Documentary Feature",
        nominee: "",
      },
      {
        category: "International Feature Film",
        nominee: "Romania",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BNDc5MTA2ZjgtOWU4OC00YjU4LTk3ZGUtYmMwZjRhODJiYTdiXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_.jpg",
    services: [],
  },
  {
    title: "Crip Camp",
    nominations: [
      {
        category: "Documentary Feature",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BMTNlMDI3MGYtY2FmNy00ZDdmLTkzZDMtMDg1MWYyM2M4YzQxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    services: [],
  },
  {
    title: "Da 5 Bloods",
    nominations: [
      {
        category: "Original Score",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BNjE4ODEwNzktYjg5Yi00N2YxLWExMmEtMmQyZTBiYWI4MGQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    services: [],
  },
  {
    title: "Emma",
    nominations: [
      {
        category: "Costume Design",
        nominee: "",
      },
      {
        category: "Makeup and Hair Styling",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BOGRiODEzM2QtOTUyYi00MWRlLTg4MzMtZGI0YmUzNWUyMjQ0XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UY864_.jpg",
    services: [],
  },
  {
    title: "Eurovision Song Contest: The Story of Fire Saga",
    nominations: [
      {
        category: "Original Song",
        nominee: "Husavik",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BYzRjYzA5NTQtOTE3MC00OTYzLWEzODItMzQxYWE1NDJkMDA0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  },
  {
    title: "The Father",
    nominations: [
      {
        category: "Actress in a Supporting Role",
        nominee: "Olivia Colman",
      },
      {
        category: "Actor in a Leading Role",
        nominee: "Anthony Hopkins",
      },
      {
        category: "Adapted Screenplay",
        nominee: "Olivia Colman",
      },
      {
        category: "Best Picture",
        nominee: "Olivia Colman",
      },
      {
        category: "Film Editing",
        nominee: "Olivia Colman",
      },
      {
        category: "Production Design",
        nominee: "Olivia Colman",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  },
  {
    title: "Greyhound",
    nominations: [
      {
        category: "Achievement in Sound",
        nominee: "",
      },
    ],
    image:
      "https://sf1-dycdn-tos.pstatp.com/obj/ies-music/storm_cover_1f9c9f2b32d04b7022ed042569e50958",
  },
];
