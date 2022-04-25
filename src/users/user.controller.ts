import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { User } from "./user.entity";
import { UserResolver } from "./user.resolver";

@Controller('/api/v1/users')
export class UserController {
    constructor(
        private readonly userResolver: UserResolver
    ) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userResolver.findAll();
    }

    @Post()
    insert(@Body() createUserDTO: CreateUserDTO): Promise<User> {
        if(!createUserDTO || !createUserDTO.firstName || !createUserDTO.lastName || !createUserDTO.age) {
            throw new BadRequestException('missing one or more parameters');
        }

        return this.userResolver.insert(createUserDTO);
    }
}