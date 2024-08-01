export interface SinglePost {
    name: string;
    image: string;
    likes: number;
    isLiked: boolean;
    comments: Array<{name:string, text:string}>;
  }