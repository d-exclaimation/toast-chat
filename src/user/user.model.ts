import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field(_type => ID)
  id!: string;

  @Field()
  name!: string;
}