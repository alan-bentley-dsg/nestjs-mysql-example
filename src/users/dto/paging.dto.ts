import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../user.entity";

@ObjectType()
export class Paging {
    @Field(() => String, { description: 'link to previous page results'})
    previous: string;
    @Field(() => String, { description: 'link to next page results'})
    next: string;
}