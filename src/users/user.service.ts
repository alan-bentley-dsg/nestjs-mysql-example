import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { ListUsersDTO } from './dto/list-users.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async findAll(): Promise<ListUsersDTO> {
        const users =  await this.usersRepository.find();
        return {
            data: users,
            paging: {
                previous: '',
                next: '',
            }
        };
    }

    async findAllPaging(skip: number, take: number): Promise<ListUsersDTO> {
        console.log('skip is: ' + skip);

        const users = await this.usersRepository.find({ skip, take });
        console.log('users is: ' + users);

        return {
            data: users,
            paging: {
                previous: (+skip === 0) ? `` : `/api/v1/user?offset=${+skip - +take}&limit=${take}`,
                next: (users.length === 0) ? `` : `/api/v1/user?offset=${+skip + +take}&limit=${take}`
            }
        }
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