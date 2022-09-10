import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    typeId: number;

    @Column()
    subTypeId: number;

    @Column()
    styleId: number;

    @Column()
    kindId: number;

    @Column()
    name: string;

    @Column({default: 0})
    price: number;

    @Column({default: 0})
    raiting: number;

    @Column({ nullable: true })
    description?: string;

}