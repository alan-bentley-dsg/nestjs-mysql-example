import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserDTO } from './dto/create-user.dto';
import { ListUsersDTO } from './dto/list-users.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User], { name: 'users'})
    findAll(offset: number, limit: number): Promise<ListUsersDTO> {
        if(!offset && !limit) {
            return this.userService.findAll();
        }

        if(!offset) {
            offset = 0;   
        }

        return this.userService.findAllPaging(offset, limit);
    }

    @Query(() => User, { name: 'user'})
    findUser(@Args('id')id: number): Promise<User> {
        return this.userService.findUser(id);
    }

    @Mutation(() => User)
    insert(@Args('createUserDTO') createUserDTO: CreateUserDTO): Promise<User> {
        return this.userService.insert(createUserDTO);
    }
}