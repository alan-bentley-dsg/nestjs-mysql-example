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

    @Mutation(() => User)
    insert(@Args('user') createUserDTO: CreateUserDTO): Promise<User> {
        return this.userService.insert(createUserDTO);
    }
}