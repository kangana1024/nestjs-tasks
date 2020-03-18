import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'admin',
    database: process.env.DATABASE_NAME || 'taskmanagement',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
}