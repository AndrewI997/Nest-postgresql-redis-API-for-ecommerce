import { Injectable, HttpException, HttpCode, HttpStatus  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAdminDto } from './dto/create-admin.dto';
// import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminEntity } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private repository: Repository<AdminEntity>,
  ) { }

  async create(CreateAdminDto: CreateAdminDto) {
    await this.repository.save(CreateAdminDto)
  }

  findAll(): Promise<AdminEntity[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<AdminEntity> {
    return this.repository.findOne({where: {
      id: id
  }});
  }

  async remove(id: number) {
    const item = this.findOne(id)
    if (item) {
      await this.repository.delete(id);;
    } else {
      throw new HttpException('', HttpStatus.BAD_REQUEST)
    };
  }
}
