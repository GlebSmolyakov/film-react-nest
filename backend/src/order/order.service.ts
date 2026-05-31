import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto, GetOrderDto } from './dto/order.dto';
import { FilmsRepository } from '../films/films.repository';
import { randomUUID } from 'node:crypto';

@Injectable()
export class OrderService {
  constructor(private readonly filmsRepository: FilmsRepository) {}
  async createOrder(createOrderDto: CreateOrderDto): Promise<GetOrderDto> {
    const tickets = createOrderDto.tickets;

    for (const ticket of tickets) {
      const film = await this.filmsRepository.findById(ticket.film);

      if (!film) {
        throw new NotFoundException(`Фильм ${ticket.film} не найден`);
      }

      const session = film.schedule.find((s) => s.id === ticket.session);
      if (!session) {
        throw new NotFoundException(`Сеанс ${ticket.session} не найден`);
      }

      const place = `${ticket.row}:${ticket.seat}`;

      if (session.taken.includes(place)) {
        throw new BadRequestException(`Место ${place} уже занято`);
      }

      session.taken.push(place);

      await this.filmsRepository.updateFilm(film.id, film);
    }
    const items = tickets.map((ticket) => ({
      id: randomUUID(),
      ...ticket,
    }));

    return { total: tickets.length, items };
  }
}
