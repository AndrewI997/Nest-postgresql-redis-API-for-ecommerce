import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemSubTypesService } from './item-sub-types.service';
import { ItemSubTypesController } from './item-sub-types.controller';
import { ItemSubTypeEntity } from './entities/item-sub-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemSubTypeEntity])],
  controllers: [ItemSubTypesController],
  providers: [ItemSubTypesService]
})
export class ItemSubTypesModule {}
