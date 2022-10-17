import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "./user.model";

@Resolver(_of => User)
export class UserResolver {
  constructor(
    private db: PrismaService
  ){}

  @Query(_ => User)
  async defaultUser(@Args('name') name: string): Promise<User> {
    return { id: "1", name };
  } 

  @Query(_ => [User])
  async users(@Args('limit', { type: () => Int }) limit: number): Promise<User[]> {
    return this.db.user.findMany({
      take: limit
    })
  }
}