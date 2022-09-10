import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item-kinds')
export class ItemKindEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}