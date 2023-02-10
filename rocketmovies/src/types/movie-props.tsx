export interface MovieProps {
  data: {
    id?: string;
    title: string;
    rating: number;
    content: string;
    tags: string[];
  };
}
