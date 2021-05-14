export interface Author{
  id: string;
  name: string;
  image: string;

}
export interface Comment{
  id: string;
  image: string;
  name: string;
  comment: string;
}

export interface Post {
  id: string;
  author: Author;
  post: {
    date: 1617926869849;
    content: string;
    image: string;
    likes: number;
    comments: Array<Comment>;
  };
}

export interface PostState {
  status: "idle" | "loading" | "success" | "error";
  posts: Post[];
}
