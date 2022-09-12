import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemSubTypesService } from './item-sub-types.service';
import { CreateItemSubTypeDto } from './dto/create-item-sub-type.dto';
import { UpdateItemSubTypeDto } from './dto/update-item-sub-type.dto';

@Controller('item-sub-type')
export class ItemSubTypesController {
  constructor(private readonly itemSubTypesService: ItemSubTypesService) {}

  @Post()
  create(@Body() createItemSubTypeDto: CreateItemSubTypeDto) {
    return this.itemSubTypesService.create(createItemSubTypeDto);
  }

  @Get()
  findAll() {
    return this.itemSubTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemSubTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemSubTypeDto: UpdateItemSubTypeDto) {
    return this.itemSubTypesService.update(+id, updateItemSubTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemSubTypesService.remove(+id);
  }
}
