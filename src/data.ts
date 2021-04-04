type nomination = {
  category: string;
  nominee?: string;
};

type movie = {
  title: string;
  nominations: nomination[];
  image: string;
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
    image: "/images/another-round.jpg",
  },
  {
    title: "Better Days",
    nominations: [
      {
        category: "International Feature Film",
        nominee: "Hong Kong",
      },
    ],
    image: "/images/better-days.jpg",
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
    image: "/images/borat.jpg",
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
    image: "/images/collective.jpg",
  },
  {
    title: "Crip Camp",
    nominations: [
      {
        category: "Documentary Feature",
        nominee: "",
      },
    ],
    image: "/images/crip-camp.jpg",
  },
  {
    title: "Da 5 Bloods",
    nominations: [
      {
        category: "Original Score",
        nominee: "",
      },
    ],
    image: "/images/da-5-bloods.jpg",
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
    image: "/images/emma.jpg",
  },
  {
    title: "Eurovision Song Contest: The Story of Fire Saga",
    nominations: [
      {
        category: "Original Song",
        nominee: "Husavik",
      },
    ],
    image: "/images/eurovision.jpg",
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
    image: "/images/the-father.jpg",
  },
  {
    title: "Greyhound",
    nominations: [
      {
        category: "Achievement in Sound",
        nominee: "",
      },
    ],
    image: "/images/greyhound.jpg",
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
    image: "/images/hillbilly-elegy.jpg",
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
    image: "/images/judas-and-the-black-messiah.jpg",
  },
  {
    title: "The Life Ahead (La Vita Davanti a Se)",
    nominations: [
      {
        category: "Original Song",
        nominee: "lo Sì (Seen)",
      },
    ],
    image: "/images/the-life-ahead.jpg",
  },
  {
    title: "Love and Monsters",
    nominations: [
      {
        category: "Visual Effects",
        nominee: "",
      },
    ],
    image: "/images/love-and-monsters.jpg",
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
    image: "/images/ma-raineys-black-bottom.jpg",
  },
  {
    title: "The Man Who Sold His Skin",
    nominations: [
      {
        category: "International Feature Film",
        nominee: "Tunisia",
      },
    ],
    image: "/images/the-man-who-sold-his-skin.jpg",
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
    image: "/images/mank.jpg",
  },
  {
    title: "The Midnight Sky",
    nominations: [
      {
        category: "Visual Effects",
        nominee: "",
      },
    ],
    image: "/images/the-midnight-sky.jpg",
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
    image: "/images/minari.jpg",
  },
  {
    title: "The Mole Agent",
    nominations: [
      {
        category: "Documentary Feature",
        nominee: "",
      },
    ],
    image: "/images/the-mole-agent.jpg",
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
    image: "/images/mulan.jpg",
  },
  {
    title: "My Octopus Teacher",
    nominations: [
      {
        category: "Documentary Feature",
        nominee: "",
      },
    ],
    image: "/images/my-octopus-teacher.png",
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
    image: "/images/news-of-the-world.jpg",
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
    image: "/images/nomadland.jpg",
  },
  {
    title: "The One and Only Ivan",
    nominations: [
      {
        category: "Visual Effects",
        nominee: "",
      },
    ],
    image: "/images/the-one-and-only-ivan.jpg",
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
    image: "/images/one-night-in-miami.jpg",
  },
  {
    title: "Onward",
    nominations: [
      {
        category: "Animated Feature Film",
        nominee: "",
      },
    ],
    image: "/images/onward.jpg",
  },
  {
    title: "Over the Moon",
    nominations: [
      {
        category: "Animated Feature Film",
        nominee: "",
      },
    ],
    image: "/images/over-the-moon.jpg",
  },
  {
    title: "Pieces of a Woman",
    nominations: [
      {
        category: "Actress in a Leading Role",
        nominee: "Vanessa Kirby",
      },
    ],
    image: "/images/pieces-of-a-woman.jpg",
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
    image: "/images/pinocchio.jpg",
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
    image: "/images/promising-young-woman.jpg",
  },
  {
    title: "Quo Vadis, Aida?",
    nominations: [
      {
        category: "International Feature Film",
        nominee: "Bosnia and Herzegovina",
      },
    ],
    image: "/images/quo-vadis-aida.jpg",
  },
  {
    title: "A Shaun the Sheep Movie: Farmageddon",
    nominations: [
      {
        category: "Animated Feature Film",
        nominee: "",
      },
    ],
    image: "/images/shaun-the-sheep.jpg",
  },
  {
    title: "Soul",
    nominations: [
      {
        category: "Achievement in Sound",
        nominee: "",
      },
      {
        category: "Animated Feature Film",
        nominee: "",
      },
      {
        category: "Original Score",
        nominee: "",
      },
    ],
    image: "/images/soul.jpg",
  },
  {
    title: "Sound of Metal",
    nominations: [
      {
        category: "Achievement in Sound",
        nominee: "",
      },
      {
        category: "Actor in a Leading Role",
        nominee: "Riz Ahmed",
      },
      {
        category: "Actor in a Supporting Role",
        nominee: "Paul Raci",
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
        category: "Original Screenplay",
        nominee: "",
      },
    ],
    image: "/images/sound-of-metal.png",
  },
  {
    title: "Tenet",
    nominations: [
      {
        category: "Production Design",
        nominee: "",
      },
      {
        category: "Visual Effects",
        nominee: "",
      },
    ],
    image: "/images/tenet.jpg",
  },
];
