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
  id: string;
  movie: string;
  nominee?: string;
};

export type oscarNominationsCollection = {
  oscarNominationsCollection: {
    items: {
      sys: {
        id: string;
      };
      nominee?: string;
      category: {
        sys: {
          id: string;
        };
        title: string;
      };
      movie: {
        title: string;
        poster: {
          height: number;
          width: number;
          url: string;
        };
        sys: {
          id: string;
        };
      };
    }[];
  };
};
