import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import { ItemTypeEntity } from 'src/item-types/entities/item-type.entity';
import { ItemSubTypeEntity } from 'src/item-sub-types/entities/item-sub-type.entity';
import { ItemStyleEntity } from 'src/item-styles/entities/item-style.entity';
import { ItemKindEntity } from 'src/item-kinds/entities/item-kind.entity';

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

    @ManyToOne(() => ItemTypeEntity, type => type.name)
    @JoinColumn({ name: "typeId" })
    type: ItemTypeEntity

    
    @ManyToOne(() => ItemSubTypeEntity, subType => subType.items)
    @JoinColumn({ name: "subTypeId" })
    subType: ItemSubTypeEntity

    @ManyToOne(() => ItemStyleEntity, style => style.items)
    @JoinColumn({ name: "styleId" })
    style: ItemStyleEntity

    @ManyToOne(() => ItemKindEntity, kind => kind.items, { nullable: true })
    @JoinColumn({ name: "kindId" })
    kind: ItemKindEntity

}