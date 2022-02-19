import { ApiProperty } from "@nestjs/swagger";
import { UserRoleEnum } from "../entities/user-role.entity";

export class CreateUserRoleDto {
    @ApiProperty()
    role: UserRoleEnum
}
