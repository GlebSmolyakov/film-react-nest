import { ConfigService } from '@nestjs/config';

export interface AppConfig {
  port: number;
  database: AppConfigDatabase;
}

export interface AppConfigDatabase {
  driver: string;
  url: string;
}

export const configProvider = {
  provide: 'CONFIG',
  useFactory: (config: ConfigService): AppConfig => ({
    port: config.get<number>('PORT') ?? 3000,
    database: {
      driver: config.get<string>('DATABASE_DRIVER'),
      url: config.get<string>('DATABASE_URL'),
    },
  }),
  inject: [ConfigService],
};
