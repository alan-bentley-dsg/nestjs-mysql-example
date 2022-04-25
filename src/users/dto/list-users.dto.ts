import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../user.entity";
import { Paging } from "./paging.dto";

@ObjectType()
export class ListUsersDTO {
    @Field(() => [User], { description: 'list of users'})
    results: User[];
    @Field(() => Paging, { description: 'links to paginate results'})
    paging: Paging;
}