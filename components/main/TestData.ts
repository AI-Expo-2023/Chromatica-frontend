export interface RankProps {
  photoID: number;
  photo: string;
  head: string;
  name: string;
  like: number;
  rank?: number;
}

export const Data: RankProps[] = []