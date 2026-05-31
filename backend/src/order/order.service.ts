import { Injectable } from '@nestjs/common';
import { CreateOrderDto, GetOrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  async createOrder(createOrderDto: CreateOrderDto): Promise<GetOrderDto> {
    const tickets = createOrderDto.tickets;
    return { total: tickets.length, items: tickets };
  }
}
