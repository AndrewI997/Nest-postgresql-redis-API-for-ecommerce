import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { ItemTypeEntity } from 'src/item-types/entities/item-type.entity';
import { ItemSubTypeEntity } from 'src/item-sub-types/entities/item-sub-type.entity';
import { ItemStyleEntity } from 'src/item-styles/entities/item-style.entity';
import { ItemKindEntity } from 'src/item-kinds/entities/item-kind.entity';
import { Type } from '@nestjs/common';

@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column({default: 0})
    price: number;

    @Column({default: 0, nullable: true})
    raiting: number;

    @Column({ nullable: true })
    description?: string;

    @ManyToOne(() => ItemTypeEntity, type => type.items)
    type: ItemTypeEntity[]

    @ManyToOne(() => ItemSubTypeEntity, subType => subType.items)
    subType: ItemTypeEntity[]

    @ManyToOne(() => ItemStyleEntity, style => style.items)
    style: ItemStyleEntity[]

    @ManyToOne(() => ItemKindEntity, kind => kind.items, { nullable: true })
    kind: ItemKindEntity[]

}