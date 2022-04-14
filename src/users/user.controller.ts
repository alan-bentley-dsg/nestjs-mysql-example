import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { UserDTO } from "./user.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('/api/v1/users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    insert(@Body() userDTO: UserDTO): Promise<User> {
        if(!userDTO || !userDTO.firstName || !userDTO.lastName) {
            throw new BadRequestException('missing one or more parameters');
        }

        return this.userService.insert(userDTO);
    }
}