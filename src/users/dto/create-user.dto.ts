import { Field, InputType, Int } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateUserDTO {
    @Field(() => String, { description: 'first name of the user'})
    @ApiProperty()
    firstName: string;

    @Field(() => String, { description: 'last name of the user'})
    @ApiProperty()
    lastName: string;

    @Field(() => Int, { description: 'age name of the user'})
    @ApiProperty()
    age: number;
}