import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ItemSubTypeEntity } from 'src/item-sub-types/entities/item-sub-type.entity';
import { ItemEntity } from 'src/items/entities/item.entity';

@Entity('item-kind')
export class ItemKindEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => ItemSubTypeEntity, (type) => type.id, {
    cascade: true,
  })
  @JoinTable()
  subTypeId: ItemSubTypeEntity[]

  @OneToMany(() => ItemEntity, item => item.kind)
  items: ItemEntity[]

}