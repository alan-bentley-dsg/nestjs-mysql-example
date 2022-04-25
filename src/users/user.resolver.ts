import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User], { name: 'users'})
    findAll(): Promise<User[]> {
        return this.userService.findAll();
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