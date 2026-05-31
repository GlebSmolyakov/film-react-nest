import { Injectable } from '@nestjs/common';
import { GetFilmsDto, GetScheduleDto } from './dto/films.dto';

const films = [
  {
    id: '0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',
    rating: 2.9,
    director: 'Итан Райт',
    tags: ['Документальный'],
    image: '/bg1s.jpg',
    cover: '/bg1c.jpg',
    title: 'Архитекторы общества',
    about:
      'Документальный фильм, исследующий влияние искусственного интеллекта на общество и этические, философские и социальные последствия технологии.',
    description:
      'Документальный фильм Итана Райта исследует влияние технологий на современное общество, уделяя особое внимание роли искусственного интеллекта в формировании нашего будущего. Фильм исследует этические, философские и социальные последствия гонки технологий ИИ и поднимает вопрос: какой мир мы создаём для будущих поколений.',
    schedule: [
      {
        id: 'f2e429b0-685d-41f8-a8cd-1d8cb63b99ce',
        daytime: '2024-06-28T10:00:53+03:00',
        hall: '0',
        rows: 5,
        seats: 10,
        price: 350,
        taken: [],
      },
      {
        id: '5beec101-acbb-4158-adc6-d855716b44a8',
        daytime: '2024-06-28T14:00:53+03:00',
        hall: '1',
        rows: 5,
        seats: 10,
        price: 350,
        taken: [],
      },
      {
        id: '89ee32f3-8164-40a6-b237-f4d492450250',
        daytime: '2024-06-28T16:00:53+03:00',
        hall: '2',
        rows: 5,
        seats: 10,
        price: 350,
        taken: [],
      },
      {
        id: 'd6a4ed9b-51d6-4df2-b66e-d75175deb373',
        daytime: '2024-06-29T11:00:53+03:00',
        hall: '0',
        rows: 5,
        seats: 10,
        price: 350,
        taken: [],
      },
      {
        id: 'a8af36c3-65ee-4224-a77d-c9ebb790ba66',
        daytime: '2024-06-29T15:00:53+03:00',
        hall: '1',
        rows: 5,
        seats: 10,
        price: 350,
        taken: [],
      },
      {
        id: '0cf8b68c-fcf2-4c0a-97ba-45990231fa0e',
        daytime: '2024-06-29T17:00:53+03:00',
        hall: '2',
        rows: 5,
        seats: 10,
        price: 350,
        taken: [],
      },
      {
        id: '2519ca34-32b4-4a7f-971d-3bb585c6450b',
        daytime: '2024-06-30T12:00:53+03:00',
        hall: '0',
        rows: 5,
        seats: 10,
        price: 350,
        taken: [],
      },
      {
        id: 'b105ad4b-ecd2-4556-abaf-9a95403dc01c',
        daytime: '2024-06-30T16:00:53+03:00',
        hall: '1',
        rows: 5,
        seats: 10,
        price: 350,
        taken: [],
      },
      {
        id: '02a9feb2-fc92-4386-a917-aa79e7f8fd7f',
        daytime: '2024-06-30T18:00:53+03:00',
        hall: '2',
        rows: 5,
        seats: 10,
        price: 350,
        taken: [],
      },
    ],
  },
];

@Injectable()
export class FilmsService {
  async findAll(): Promise<GetFilmsDto> {
    return {
      total: films.length,
      items: films,
    };
  }
  async filmById(id: string): Promise<GetScheduleDto> {
    const film = films.find((f) => f.id === id);
    return { total: film.schedule.length, items: film.schedule };
  }
}
