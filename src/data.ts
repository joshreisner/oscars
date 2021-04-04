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
        category: "Director",
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
        nominee: "",
      },
      {
        category: "Best Picture",
        nominee: "",
      },
      {
        category: "Film Editing",
        nominee: "",
      },
      {
        category: "Production Design",
        nominee: "",
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
  {
    title: "Hillbilly Elegy",
    nominations: [
      {
        category: "Actress in a Supporting Role",
        nominee: "Glenn Close",
      },
      {
        category: "Makeup and Hair Styling",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BZGI4NzRkNDgtYzQyOS00YWVjLTllYzctNmQ5NzkzOGIxMDBhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
  },
  {
    title: "Judas and the Black Messiah",
    nominations: [
      {
        category: "Actor in a Supporting Role",
        nominee: "Daniel Kaluuya",
      },
      {
        category: "Actor in a Supporting Role",
        nominee: "Lakeith Stanfield",
      },
      {
        category: "Best Picture",
        nominee: "",
      },
      {
        category: "Cinematography",
        nominee: "Sean Bobbitt",
      },
      {
        category: "Original Song",
        nominee: "Fight For You",
      },
      {
        category: "Original Screenplay",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BOTYwNWNmM2UtNDhlOC00ZGQzLWI1MTMtMmZlMTFjM2Y1N2ZhXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_.jpg",
  },
  {
    title: "The Life Ahead (La Vita Davanti a Se)",
    nominations: [
      {
        category: "Original Song",
        nominee: "lo Sì (Seen)",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BMTljOGM2NzQtYzY5Yi00YzUwLTljZDktMDZlOGFiYmRiZTA3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  },
  {
    title: "Love and Monsters",
    nominations: [
      {
        category: "Visual Effects",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BYWVkMWEyMDUtZTVmOC00MTYxLWE1ZTUtNjk4M2IzMjY2OTIxXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
  },
  {
    title: "Ma Rainey's Black Bottom",
    nominations: [
      {
        category: "Actress in a Leading Role",
        nominee: "Viola Davis",
      },
      {
        category: "Actor in a Leading Role",
        nominee: "Chadwick Boseman",
      },
      {
        category: "Costume Design",
        nominee: "",
      },
      {
        category: "Makeup and Hair Styling",
        nominee: "",
      },
      {
        category: "Production Design",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BNTBlZGY1OTAtN2RjMC00ZThiLWFiZmUtN2VkOGMxNmMyYjQwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  },
  {
    title: "The Man Who Sold His Skin",
    nominations: [
      {
        category: "International Feature Film",
        nominee: "Tunisia",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BN2JmZDg0MzUtNDYzOC00OWExLThlMjAtZDExYTNlOTcyODMzXkEyXkFqcGdeQXVyNTU5Mzk0NjE@._V1_.jpg",
  },
  {
    title: "Mank",
    nominations: [
      {
        category: "Achievement in Sound",
        nominee: "",
      },
      {
        category: "Actress in a Supporting Role",
        nominee: "Amanda Seyfried",
      },
      {
        category: "Actor in a Leading Role",
        nominee: "Gary Oldman",
      },
      {
        category: "Best Picture",
        nominee: "",
      },
      {
        category: "Cinematography",
        nominee: "Erik Messerschmidt",
      },
      {
        category: "Director",
        nominee: "David Fincher",
      },
      {
        category: "Makeup and Hair Styling",
        nominee: "",
      },
      {
        category: "Original Score",
        nominee: "",
      },
      {
        category: "Production Design",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BZTllMjI0ZGYtM2FmZC00ZmY4LTlkNTYtZThlOWQ1OGQyZTA3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  },
  {
    title: "The Midnight Sky",
    nominations: [
      {
        category: "Visual Effects",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BNDQwYjJjODMtOWNmNC00NDJjLThiNDgtNzVkOTM1MjY5NDQ5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
  },
  {
    title: "Minari",
    nominations: [
      {
        category: "Actress in a Supporting Role",
        nominee: "Youn Yuh-jung",
      },
      {
        category: "Actor in a Leading Role",
        nominee: "Steven Yeun",
      },
      {
        category: "Best Picture",
        nominee: "",
      },
      {
        category: "Director",
        nominee: "Lee Isaac Chung",
      },
      {
        category: "Original Score",
        nominee: "",
      },
      {
        category: "Original Screenplay",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BM2I4N2NmYTUtMjY4MS00ZTg4LTg1Y2YtOWZkMzk4Yzc4M2M2XkEyXkFqcGdeQXVyMTI5MzA0ODcy._V1_.jpg",
  },
  {
    title: "The Mole Agent",
    nominations: [
      {
        category: "Documentary Feature",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BNzAxNDJlYTktZTgxYy00NjFmLTgwZDAtM2RmZGIyZmIxOTBmXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg",
  },
  {
    title: "Mulan",
    nominations: [
      {
        category: "Costume Design",
        nominee: "",
      },
      {
        category: "Visual Effects",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BNDliY2E1MjUtNzZkOS00MzJlLTgyOGEtZDg4MTI1NzZkMTBhXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_.jpg",
  },
  {
    title: "My Octopus Teacher",
    nominations: [
      {
        category: "Documentary Feature",
        nominee: "",
      },
    ],
    image:
      "https://i.pinimg.com/originals/af/78/f4/af78f4ff430c91d32874df55147e9a32.png",
  },
  {
    title: "News of the World",
    nominations: [
      {
        category: "Achievement in Sound",
        nominee: "",
      },
      {
        category: "Cinematography",
        nominee: "Dariusz Wolski",
      },
      {
        category: "Original Score",
        nominee: "",
      },
      {
        category: "Production Design",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BMDNlNmVlNDItMjE3Yi00ZTA3LWIyOTktNDhhMGFlZjk5ZDQ0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  },
  {
    title: "Nomadland",
    nominations: [
      {
        category: "Actress in a Leading Role",
        nominee: "Frances McDormand",
      },
      {
        category: "Adapted Screenplay",
        nominee: "",
      },
      {
        category: "Best Picture",
        nominee: "",
      },
      {
        category: "Cinematography",
        nominee: "Joshua James Richards",
      },
      {
        category: "Director",
        nominee: "Chloe Zhao",
      },
      {
        category: "Film Editing",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BMDRiZWUxNmItNDU5Yy00ODNmLTk0M2ItZjQzZTA5OTJkZjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  },
  {
    title: "The One and Only Ivan",
    nominations: [
      {
        category: "Visual Effects",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BZWY3OTNhNWUtMDk2My00ZGVhLWE5ODQtM2NkOTZiMWM2MGY2XkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_FMjpg_UY863_.jpg",
  },
  {
    title: "One Night in Miami…",
    nominations: [
      {
        category: "Actor in a Supporting Role",
        nominee: "Leslie Odom Jr.",
      },
      {
        category: "Adapted Screenplay",
        nominee: "",
      },
      {
        category: "Original Song",
        nominee: "Speak Now",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BYmNmM2JkZDQtYzdiMi00NWU0LWEwNjMtMDk1MTdmZTQwZjZlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
  },
  {
    title: "Onward",
    nominations: [
      {
        category: "Animated Feature Film",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
  },
  {
    title: "Over the Moon",
    nominations: [
      {
        category: "Animated Feature Film",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BNTI0ZjVhM2ItMmFkOS00ZmFiLTg4NGQtODJjNTZmMDYxMWMyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  },
  {
    title: "Pieces of a Woman",
    nominations: [
      {
        category: "Actress in a Leading Role",
        nominee: "Vanessa Kirby",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BMGE3MzMzOTAtOTExMy00MzFiLWFjNDItN2ZiZmYyYjY2MWUwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
  },
  {
    title: "Pinocchio",
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
      "https://m.media-amazon.com/images/M/MV5BNzgxNWJiOWQtZDA5Mi00NjBkLWIxMzUtZTg3Yjk5NjYyMDZjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
  },
  {
    title: "Promising Young Woman",
    nominations: [
      {
        category: "Actress in a Leading Role",
        nominee: "Carey Mulligan",
      },
      {
        category: "Best Picture",
        nominee: "",
      },
      {
        category: "Director",
        nominee: "Emerald Fennell",
      },
      {
        category: "Film Editing",
        nominee: "",
      },
      {
        category: "Original Screenplay",
        nominee: "",
      },
    ],
    image:
      "https://m.media-amazon.com/images/M/MV5BODg1MDBmYzQtY2ZjZC00ZTU0LTk5OGUtNjdmYWJhY2E5OTY1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  },
];
