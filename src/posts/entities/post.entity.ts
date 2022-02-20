import { User } from "src/users/entities/user.entity";
import Model from "src/utils/basemodel.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('posts')
export class PostModel extends Model {

@Column()
content: string

// Relationships
@ManyToOne(() => User, (user) => user.post, {nullable: true})
user: User

}
