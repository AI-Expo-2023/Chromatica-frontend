export interface RankProps {
  photoID: number;
  photo: string;
  head: string;
  name: string;
  like: number;
  rank?: number;
}

export const Data: RankProps[] = [{
  photoID: 1,
  photo: 'abc',
  head: '흔한 제목',
  name: '그저 이름',
  like: 123,
  rank: 1
}, {
  photoID: 2,
  photo: 'abc',
  head: '흔한 제목',
  name: '그저 이름',
  like: 123,
  rank: 2
}, {
  photoID: 3,
  photo: 'abc',
  head: '흔한 제목',
  name: '그저 이름',
  like: 123,
  rank: 3
}, {
  photoID: 4,
  photo: 'abc',
  head: '흔한 제목',
  name: '그저 이름',
  like: 123,
  rank: 4
}, {
  photoID: 5,
  photo: 'abc',
  head: '흔한 제목',
  name: '그저 이름',
  like: 123,
  rank: 5
}, {
  photoID: 6,
  photo: 'abc',
  head: '흔한 제목',
  name: '그저 이름',
  like: 123,
  rank: 6
}
]