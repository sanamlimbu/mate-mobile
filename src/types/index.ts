export interface User {
  id: string;
  name: string;
  gender: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface Post {
  id: string;
  content: string;
  user: User;
  comments?: Comment[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  userId: string;
  user: User;
  postId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
