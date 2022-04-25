import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserDTO {
    @Field(() => String, { description: 'first name of the user'})
    firstName: string;
    @Field(() => String, { description: 'last name of the user'})
    lastName: string;
    @Field(() => Int, { description: 'age name of the user'})
    age: number;
}