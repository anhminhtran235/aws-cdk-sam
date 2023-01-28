import "reflect-metadata";
import {DataSource} from 'typeorm';
import { Post } from './entities/Post';
import {User} from './entities/User';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'test-db.cqh0awti98kr.us-east-1.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'qwertyuioP_123',
  database: 'test',
  entities: [User, Post],
  synchronize: true,
  logging: false,
});

export const connectToDb = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log('Connected to Database');
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to db');
  }
}
