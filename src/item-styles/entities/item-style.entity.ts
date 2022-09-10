import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item-styles')
export class ItemStyleEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}