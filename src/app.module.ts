import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ItemTypesModule } from './item-types/item-types.module';
import { ItemSubTypesModule } from './item-sub-types/item-sub-types.module';
import { ItemStylesModule } from './item-styles/item-styles.module';
import { ItemKindsModule } from './item-kinds/item-kinds.module';

import { ItemEntity } from './items/entities/item.entity';
import { AdminEntity } from './admin/entities/admin.entity';
import { ItemTypeEntity } from './item-types/entities/item-type.entity';
import { ItemSubTypeEntity } from './item-sub-types/entities/item-sub-type.entity';
import { ItemStyleEntity } from './item-styles/entities/item-style.entity';
import { ItemKindEntity } from './item-kinds/entities/item-kind.entity';

import { ConfigModule } from '@nestjs/config';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as redisStore from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/common/cache';
import { ClientOpts } from 'redis';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5000,
      username: 'postgres',
      password: 'output44w',
      database: 'drugayamebel2',
      entities: [
        ItemEntity,
        AdminEntity,
        ItemTypeEntity,
        ItemSubTypeEntity,
        ItemStyleEntity,
        ItemKindEntity
      ],
      synchronize: true,
    }),
    CacheModule.register<ClientOpts>({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
      // ttl: 1000,
      // max: 1000,
    }),
    ItemsModule,
    AdminModule,
    AuthModule,
    ItemTypesModule,
    ItemSubTypesModule,
    ItemStylesModule,
    ItemKindsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
