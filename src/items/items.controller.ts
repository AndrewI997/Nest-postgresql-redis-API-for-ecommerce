import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';


@Controller('item')
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
  findOne(@Param('id') item: Partial<CreateItemDto>) {
    return this.itemsService.findOne(item);
  }

  @Get('type/:typeId')
  findByType(@Param('typeId') item: Partial<CreateItemDto>) {
    return this.itemsService.findByType(item);
  }

  @Get('type/:typeId/:subTypeId')
  findBySubTypeId(@Param() @Query('item') item: Partial<CreateItemDto>) {
    return this.itemsService.findBySubTypeId(item);
  }
  
  @Get('type/:typeId/:subTypeId/:styleId/:kindId')
  findByStyleId(@Param() @Query('item') item: Partial<CreateItemDto> ) {
    return this.itemsService.findByStyleId(item);
  }

  @Get('type/:typeId/:subTypeId/:kindId')
  findByKindId(@Param() @Query('item') item: Partial<CreateItemDto> ) {
    return this.itemsService.findByKindId(item);
  }

  @Patch(':id')
  update(@Param('id') item: Partial<CreateItemDto>, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(item, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') item: Partial<CreateItemDto>) {
    return this.itemsService.remove(item);
  }
}
