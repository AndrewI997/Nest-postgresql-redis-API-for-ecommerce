import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemKindsService } from './item-kinds.service';
import { ItemKindsController } from './item-kinds.controller';
import { ItemKindEntity } from './entities/item-kind.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemKindEntity])],
  controllers: [ItemKindsController],
  providers: [ItemKindsService]
})
export class ItemKindsModule {}
