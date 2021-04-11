export type category = {
  id: string;
  title: string;
  nominees: nominee[];
};

export type movie = {
  id: string;
  title: string;
  nominations: nomination[];
  poster: {
    url: string;
    width: number;
    height: number;
  };
};

export type nomination = {
  category: string;
  nominee?: string;
};

export type nominee = {
  title: string;
  nominee?: string;
  watched: boolean;
  id?: string;
};
