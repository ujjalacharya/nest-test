import Model from "src/utils/basemodel.entity";
import { Column, Entity } from "typeorm";

@Entity('users')
export class User extends Model {
    @Column({unique: true})
    email: string

    @Column()
    password: string

    // Relationships
    //@TODO Role and Post
}