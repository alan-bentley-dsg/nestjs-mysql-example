import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    insert(createUserDTO: CreateUserDTO): Promise<User> {
        const user = new User();
        user.firstName = createUserDTO.firstName;
        user.lastName = createUserDTO.lastName;
        user.age = createUserDTO.age;

        return this.usersRepository.save(user);
    }
}