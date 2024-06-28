export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  imageUrl: string;
  imageAlt: string;
}

export interface Review {
  id: number;
  comment: string;
  imageUrl: string;
  imageAlt: string;
  fullName: string;
  position: string;
}
