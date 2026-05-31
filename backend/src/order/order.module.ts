import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { FilmsModule } from '../films/films.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [FilmsModule],
})
export class OrderModule {}
