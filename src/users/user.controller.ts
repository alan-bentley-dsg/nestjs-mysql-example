import { BadRequestException, Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { CreateUserDTO } from "./dto/create-user.dto";
import { ListUsersDTO } from "./dto/list-users.dto";
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('/api/v1/user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}
    
    @Get()
    @ApiQuery({name: 'offset', required: false})
    @ApiQuery({name: 'limit', required: false})
    findAll(@Query('offset')offset: number, @Query('limit')limit: number): Promise<ListUsersDTO> {
        return this.userService.findAll(offset, limit);
    }

    @Get(':id')
    findUser(@Param('id')id: number): Promise<User> {
        return this.userService.findUser(id);
    }

    @Post()
    insert(@Body() createUserDTO: CreateUserDTO): Promise<User> {
        if(!createUserDTO || !createUserDTO.firstName || !createUserDTO.lastName || !createUserDTO.age) {
            throw new BadRequestException('missing one or more parameters');
        }

        return this.userService.insert(createUserDTO);
    }
}