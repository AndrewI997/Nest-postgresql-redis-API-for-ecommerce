import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemTypesService } from './item-types.service';
import { ItemTypesController } from './item-types.controller';
import { ItemTypeEntity } from './entities/item-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemTypeEntity])],
  controllers: [ItemTypesController],
  providers: [ItemTypesService]
})
export class ItemTypesModule {}
