export type nomination = {
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

export type nominee = {
  title: string;
  nominee?: string;
  watched: boolean;
  id?: string;
};

export type user = {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
};
