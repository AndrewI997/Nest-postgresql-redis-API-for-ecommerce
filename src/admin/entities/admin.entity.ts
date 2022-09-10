export class Admin {}
import { Entity, Column, Unique, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class AdminEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
  
}