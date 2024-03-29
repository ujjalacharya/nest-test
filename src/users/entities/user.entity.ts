import { PostModel } from 'src/posts/entities/post.entity';
import { UserRoleModel } from 'src/user-role/entities/user-role.entity';
import Model from 'src/utils/basemodel.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('users')
export class User extends Model {
  @Column({ nullable: false, default: 'ujjal' })
  username: string;

  @Column({nullable: false, default: 'ujjal'})
  email: string;

  @Column()
  password: string;

  // Relationships
  @OneToMany(() => PostModel, (post) => post.user)
  post: PostModel[];

  @ManyToOne(() => UserRoleModel, userRole => userRole.user)
  userRole: UserRoleModel
}
