type nomination = {
  category: string;
  nominee?: string;
};

export type rawMovie = {
  title: string;
  nominations: nomination[];
};

export type movie = {
  title: string;
  nominations: nomination[];
  id: string;
};

export type category = {
  name: string;
  nominees: nominee[];
  id: string;
};

type nominee = {
  title: string;
  nominee?: string;
  watched: boolean;
  id?: string;
};
