import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository:UserRepository){}
    async create(createUserDto:createUserDto){
         return this.userRepository.create(createUserDto)
    }
}
