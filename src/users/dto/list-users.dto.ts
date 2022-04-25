import { ObjectType } from "@nestjs/graphql";
import { User } from "../user.entity";

@ObjectType()
export class ListUsersDTO {
    data: User[];
    paging: {
        previous: string;
        next: string;
    }
}