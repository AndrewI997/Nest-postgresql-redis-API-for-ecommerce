import { Injectable, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemEntity } from './entities/item.entity'
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity)
    public repository: Repository<ItemEntity>,
  ) { }

  async create(createItemDto: CreateItemDto) {
    await this.repository.save(createItemDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  findByType(typeId: number) {
    return this.repository.find({
      where: {
        type: {
          id: typeId
        }   }
    })
  }

  findBySubTypeId( item: {typeId: number, subTypeId: number} ) {
    return this.repository.find( {
      where: {
        type: {
          id: item.typeId
        },
        subType: {
          id: item.subTypeId
        } 
      }
    } );
  }

  findByKindId(item: {typeId: number, subTypeId: number, kindId: number}) {
    return this.repository.find({ 
      where: {
        type: {
          id: item.typeId
        },
        subType: {
          id: item.subTypeId
        },
        kind: {
          id: item.kindId
        }
      }
     });
  }

  findByStyleId(item: {typeId: number, subTypeId: number, styleId: number, kindId: number}) {
    return this.repository.find({ 
      where: {
        type: {
          id: item.typeId
        },
        subType: {
          id: item.subTypeId
        },
        kind: {
          id: item.kindId
        },
        style: {
          id: item.styleId
        }
      }
     });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = this.findOne(id)
    if (item) {
      await this.repository.update(id, updateItemDto);
    } else {
      throw new HttpException('', HttpStatus.BAD_REQUEST)
    };
  }

  async remove(id: number) {
    const item = this.findOne(id)
    if (item) {
      await this.repository.delete(id);;
    } else {
      throw new HttpException('', HttpStatus.BAD_REQUEST)
    };
  }
}
