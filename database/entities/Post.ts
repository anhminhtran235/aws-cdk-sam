import {Entity, Column, ManyToOne, JoinColumn} from 'typeorm';
import { User } from './User';
import { _BaseEntity } from './_BaseEntity';

@Entity('post')
export class Post extends _BaseEntity {
  @Column({
    type: 'text',
  })
  content: string;

  @ManyToOne(
    () => User,
    user => user.posts
  )
  @JoinColumn({
    name: 'user_id'
  })
  user: User
}