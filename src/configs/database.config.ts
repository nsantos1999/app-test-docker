import './environment.config';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

type TypeOrmModuleOptionsWithSeeds = TypeOrmModuleOptions & {
  seeds: string[];
  factories: string[];
  keepConnectionAlive: boolean;
};

const DatabaseConfig: TypeOrmModuleOptionsWithSeeds = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  // schema: process.env.DB_SCHEMA,
  database: process.env.POSTGRES_USER,
  // sid: process.env.DB_SID,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  migrationsRun: true,
  synchronize: false,
  logging: true,
  // cli: { migrationsDir: 'src/database/migrations' },
  seeds: ['dist/database/seeds/**/*.js'],
  factories: ['dist/database/factories/**/*.js'],
  keepConnectionAlive: true,
};

export = DatabaseConfig;
