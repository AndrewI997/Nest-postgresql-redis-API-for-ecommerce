// import { CacheModule, Module, CacheInterceptor } from '@nestjs/common';
// import { ItemsController } from 'src/items/items.controller';
// import { APP_INTERCEPTOR } from '@nestjs/core';
// import * as redisStore from 'cache-manager-redis-store';
// import type { ClientOpts } from 'redis';
// import { ItemsService } from 'src/items/items.service';
// import { ItemsModule } from 'src/items/items.module';
// import { forwardRef } from '@nestjs/common'
// import { ItemEntity } from 'src/items/entities/item.entity';
// import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   imports: [
//     // TypeOrmModule.forFeature([ItemEntity]),
//     // forwardRef(() => ItemsModule),
//     CacheModule.register<ClientOpts>({
//     isGlobal: true,
//     store: redisStore,
//     host: 'localhost',
//     port: 6379,
//     ttl: 1000,
//     max: 1000,
//     })
//   ],
//   controllers: [ItemsController],
//   providers: [
//     {
//       provide: APP_INTERCEPTOR,
//       useClass: CacheInterceptor,
//     },
//     // ItemsService,
    
//   ],
// })
// export class AppCacheModule { }
