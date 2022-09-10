export class CreateItemDto {
    id: number;

    typeId: number;

    subTypeId: number;

    styleId: number;

    kindId: number;

    name: string;

    price: number;

    raiting: number;

    description?: string;
}
