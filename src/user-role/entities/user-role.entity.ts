import { User } from "src/users/entities/user.entity";
import Model from "src/utils/basemodel.entity";
import { Column, Entity, OneToMany } from "typeorm";

export enum UserRoleEnum {
    ADMIN = "admin",
    USER = "user",
}

@Entity('user_roles')
export class UserRoleModel extends Model{
    
    @Column({enum: UserRoleEnum, default: UserRoleEnum.USER})
    role: UserRoleEnum

    @OneToMany(() => User, user => user.userRole, {nullable: true})
    user: User[]
}
