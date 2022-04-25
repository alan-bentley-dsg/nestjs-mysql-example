import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User { 
    @PrimaryGeneratedColumn()
    @Field(() => String, { description: 'id of the user'})
    id: number;

    @Column()
    @Field(() => String, { description: 'first name of the user'})
    firstName: string;

    @Column()
    @Field(() => String, { description: 'last name of the user'})
    lastName: string;

    @Column()
    @Field(() => Int, { description: 'age of the user'}) 
    age: number;
}