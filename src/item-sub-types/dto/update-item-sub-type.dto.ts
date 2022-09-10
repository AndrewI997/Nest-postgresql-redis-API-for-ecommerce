import { PartialType } from '@nestjs/mapped-types';
import { CreateItemSubTypeDto } from './create-item-sub-type.dto';

export class UpdateItemSubTypeDto extends PartialType(CreateItemSubTypeDto) {}
