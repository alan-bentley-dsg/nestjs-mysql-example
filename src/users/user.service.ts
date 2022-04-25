import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
        return await this.usersRepository.find();
    }

    async findUser(userId: number): Promise<User> {
        const user = await this.usersRepository.findOne(userId);
        if (!user) {
            throw new NotFoundException(`User #${userId} not found`);
        }
        return user;
    }

    async insert(createUserDTO: CreateUserDTO): Promise<User> {
        const user = new User();
        user.firstName = createUserDTO.firstName;
        user.lastName = createUserDTO.lastName;
        user.age = createUserDTO.age;

        return await this.usersRepository.save(user);
    }
}