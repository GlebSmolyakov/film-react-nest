import { configProvider } from './app.config.provider';
import { Module } from '@nestjs/common';

@Module({
  providers: [configProvider],
  exports: [configProvider],
})
export class AppConfigModule {}
