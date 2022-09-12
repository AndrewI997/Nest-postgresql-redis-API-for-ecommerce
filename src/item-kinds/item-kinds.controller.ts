import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemKindsService } from './item-kinds.service';
import { CreateItemKindDto } from './dto/create-item-kind.dto';
import { UpdateItemKindDto } from './dto/update-item-kind.dto';

@Controller('item-kind')
export class ItemKindsController {
  constructor(private readonly itemKindsService: ItemKindsService) {}

  @Post()
  create(@Body() createItemKindDto: CreateItemKindDto) {
    return this.itemKindsService.create(createItemKindDto);
  }

  @Get()
  findAll() {
    return this.itemKindsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemKindsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemKindDto: UpdateItemKindDto) {
    return this.itemKindsService.update(+id, updateItemKindDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemKindsService.remove(+id);
  }
}
