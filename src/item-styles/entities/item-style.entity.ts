import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ItemSubTypeEntity } from 'src/item-sub-types/entities/item-sub-type.entity';
import { ItemEntity } from 'src/items/entities/item.entity';

@Entity('item-style')
export class ItemStyleEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => ItemSubTypeEntity, (types) => types.id, {
    cascade: true,
  })
  @JoinTable()
  subTypeId: ItemSubTypeEntity[]

  @OneToMany(() => ItemEntity, item => item.style)
  items: ItemEntity[]

}