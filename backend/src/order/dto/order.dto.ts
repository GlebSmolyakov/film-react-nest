export class TicketDto {
  id?: string;
  film: string;
  session: string;
  daytime: string;
  row: number;
  seat: number;
  price: number;
}

export class CreateOrderDto {
  email: string;
  phone: string;
  tickets: TicketDto[];
}

export class GetOrderDto {
  total: number;
  items: TicketDto[];
}
