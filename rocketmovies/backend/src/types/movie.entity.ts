import { TagEntity } from './tag.entity';

export interface MovieEntity {
  title: string;
  description: string;
  rating: number;
  tags: TagEntity[];
}
