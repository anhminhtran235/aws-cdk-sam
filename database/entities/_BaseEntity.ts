import {Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class _BaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createDate: Date

  @UpdateDateColumn()
  updateDate: Date
}