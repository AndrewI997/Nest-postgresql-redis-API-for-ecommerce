import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item-sub-types')
export class ItemSubTypeEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}