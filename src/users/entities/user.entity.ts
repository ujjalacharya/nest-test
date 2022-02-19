import { PostModel } from 'src/posts/entities/post.entity';
import Model from 'src/utils/basemodel.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('users')
export class User extends Model {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // Relationships
  @OneToMany(() => PostModel, (post) => post.user)
  post: PostModel[];
}
