import {Entity, Column, OneToMany} from 'typeorm';
import { Post } from './Post';
import { _BaseEntity } from './_BaseEntity';

@Entity('user')
export class User extends _BaseEntity {
  @Column({
    type: 'text'
  })
  name: string;

  @Column({
    type: 'text',
  })
  email: string

  @Column({
    type: 'text',
  })
  cardNumber: string;

  @Column({
    type: 'numeric'
  })
  balance: number;

  @OneToMany(
    () => Post,
    post => post.user
  )
  posts: Post[]
}