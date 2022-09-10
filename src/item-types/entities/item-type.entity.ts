import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item-types')
export class ItemTypeEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}