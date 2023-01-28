import "reflect-metadata";
import {DataSource} from 'typeorm';
import { Post } from './entities/Post';
import {User} from './entities/User';

const getDataSource = () => {
  // mysql running on docker
  return new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'my-secret-pw',
    database: 'test',
    entities: [User, Post],
    synchronize: true,
    logging: false,
  });
}

export const connectToDb = async (): Promise<void> => {
  try {
    const AppDataSource = getDataSource();
    await AppDataSource.initialize();
    console.log('Connected to Database');
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to db');
  }
}
