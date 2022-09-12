import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, JoinColumn } from 'typeorm';
import { ItemTypeEntity } from 'src/item-types/entities/item-type.entity';
import { ItemEntity } from 'src/items/entities/item.entity';

@Entity('item-sub-type')
export class ItemSubTypeEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => ItemTypeEntity, (types) => types.id, {
    cascade: true,
  })
  @JoinTable()
  typeId: ItemTypeEntity[]

  @OneToMany(() => ItemEntity, item => item.subType)
  items: ItemEntity[]

}