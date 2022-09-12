import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { ItemEntity } from 'src/items/entities/item.entity';
import { ItemSubTypeEntity } from 'src/item-sub-types/entities/item-sub-type.entity';

@Entity('item-type')
export class ItemTypeEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ItemEntity, item => item.type)
  items: ItemEntity[]

}