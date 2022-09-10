import { Injectable, HttpException, HttpCode, HttpStatus  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemSubTypeDto } from './dto/create-item-sub-type.dto';
import { UpdateItemSubTypeDto } from './dto/update-item-sub-type.dto';
import { ItemSubTypeEntity } from './entities/item-sub-type.entity';

@Injectable()
export class ItemSubTypesService {
  constructor(
    @InjectRepository(ItemSubTypeEntity)
    private repository: Repository<ItemSubTypeEntity>,
  ) { }

  async create(CreateItemSubTypeDto: CreateItemSubTypeDto) {
    await this.repository.save(CreateItemSubTypeDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({where: {
      id: id
  }});
  }

  async update(id: number, UpdateItemSubTypeDto: UpdateItemSubTypeDto) {
    const item = this.findOne(id)
    if (item) {
      await this.repository.update(id, UpdateItemSubTypeDto);
    } else {
      throw new HttpException('', HttpStatus.BAD_REQUEST)
    };
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
