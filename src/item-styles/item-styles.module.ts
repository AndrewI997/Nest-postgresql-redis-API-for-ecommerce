import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemStylesService } from './item-styles.service';
import { ItemStylesController } from './item-styles.controller';
import { ItemStyleEntity } from './entities/item-style.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemStyleEntity])],
  controllers: [ItemStylesController],
  providers: [ItemStylesService]
})
export class ItemStylesModule {}
