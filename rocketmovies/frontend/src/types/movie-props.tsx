export interface MovieProps {
  data: {
    id?: number | string;
    title: string;
    rating: number;
    content: string;
    tags: string[];
  };
}
