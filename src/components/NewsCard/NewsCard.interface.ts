interface AuthorProps {
  id: number;
  name: string;
  image: string;
}

interface ReplyCommentsProps {
  id: number;
  author: AuthorProps;
  text: string;
  date: string;
}

interface CommentsProps {
  id: number;
  author: AuthorProps;
  text: string;
  date: string;
  reply?: ReplyCommentsProps[];
}

export interface NewsCardProps {
  id: number;
  title: string;
  content: string;
  image: string;
  publishDate: string;
  comments?: CommentsProps[];
}