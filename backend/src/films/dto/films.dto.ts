export class ScheduleDto {
  id: string;
  daytime: string;
  hall: string;
  rows: number;
  seats: number;
  price: number;
  taken: string[];
}

export class FilmDto {
  id: string;
  director: string;
  title: string;
  about: string;
  description: string;
  image: string;
  cover: string;
  rating: number;
  tags: string[];
  schedule: ScheduleDto[];
}

export class GetFilmsDto {
  total: number;
  items: FilmDto[];
}

export class GetScheduleDto {
  total: number;
  items: ScheduleDto[];
}
