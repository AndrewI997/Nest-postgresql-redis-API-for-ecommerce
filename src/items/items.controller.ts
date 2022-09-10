import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';


@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }

  @Get('type/:typeId')
  findByType(@Param('typeId') typeId: string) {
    return this.itemsService.findByType(+typeId);
  }

  @Get('type/:typeId/:subTypeId')
  findBySubTypeId(@Param() @Query('item') item: {typeId: number, subTypeId: number}) {
    return this.itemsService.findBySubTypeId(item);
  }
  
  @Get('type/:typeId/:subTypeId/:styleId/:kindId')
  findByStyleId(@Param() @Query('item') item: {typeId: number, subTypeId: number, styleId: number, kindId: number} ) {
    return this.itemsService.findByStyleId(item);
  }

  @Get('type/:typeId/:subTypeId/:kindId')
  findByKindId(@Param() @Query('item') item: {typeId: number, subTypeId: number, kindId: number} ) {
    return this.itemsService.findByKindId(item);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}
