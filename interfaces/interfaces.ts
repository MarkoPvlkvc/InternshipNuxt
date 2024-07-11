export interface BlogPost {
  id: number;
  title: string;
  shortContent: string;
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

export interface Employee {
  id: number;
  imageUrl: string;
  imageAlt: string;
  fullName: string;
  position: string;
}

export interface Product {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  imageSide: "left" | "right";
}
