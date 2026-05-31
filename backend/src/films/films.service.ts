import { Injectable, NotFoundException } from '@nestjs/common';
import {
  FilmDto,
  GetFilmsDto,
  GetScheduleDto,
  ScheduleDto,
} from './dto/films.dto';
import { FilmsRepository } from './films.repository';
import { Film, Schedule } from './schemas/film.schema';

@Injectable()
export class FilmsService {
  constructor(private readonly filmsRepository: FilmsRepository) {}
  async findAll(): Promise<GetFilmsDto> {
    const films = await this.filmsRepository.findAll();
    return {
      total: films.length,
      items: films.map((film) => this.toFilmDto(film)),
    };
  }
  async filmById(id: string): Promise<GetScheduleDto> {
    const film = await this.filmsRepository.findById(id);
    if (!film) {
      throw new NotFoundException(`Фильм ${id} не найден`);
    }
    const schedule = film.schedule.map((s) => this.toScheduleDto(s));
    return { total: schedule.length, items: schedule };
  }

  private toScheduleDto(schedule: Schedule): ScheduleDto {
    return {
      id: schedule.id,
      daytime: schedule.daytime,
      hall: String(schedule.hall),
      rows: schedule.rows,
      seats: schedule.seats,
      price: schedule.price,
      taken: schedule.taken,
    };
  }

  private toFilmDto(film: Film): FilmDto {
    return {
      id: film.id,
      rating: film.rating,
      director: film.director,
      tags: film.tags,
      image: film.image,
      cover: film.cover,
      title: film.title,
      about: film.about,
      description: film.description,
      schedule: film.schedule.map((s) => this.toScheduleDto(s)),
    };
  }
}
